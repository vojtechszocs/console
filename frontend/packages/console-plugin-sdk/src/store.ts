import * as _ from 'lodash';

import { flagPending } from '@console/internal/reducers/features';
import { Extension, ActivePlugin, isFeatureFlag, isModelDefinition } from './typings';
import { ExtensionRegistry } from './registry';

const isGateableExtension = (e: Extension) => {
  return !(isFeatureFlag(e) || isModelDefinition(e));
};

const getGatingFlags = (p: ActivePlugin) => {
  return [
    ...(p.extensions
      .filter(isFeatureFlag)
      .filter((e) => e.properties.gateExtensions === undefined || e.properties.gateExtensions)
      .map((e) => e.properties.flag)
    ),
  ];
};

const sanitizeExtension = (e: Extension) => {
  if (isGateableExtension(e)) {
    e.flags = e.flags || {};
    e.flags.required = _.uniq(e.flags.required || []);
    e.flags.disallowed = _.uniq(e.flags.disallowed || []);
  }
  return e;
};

/**
 * Maintains a list of all Console extensions and provides access to ones which
 * are currently in use.
 */
export class PluginStore {
  private readonly extensions: Extension[];
  readonly registry: ExtensionRegistry; // TODO(vojtech): legacy, remove

  public constructor(plugins: ActivePlugin[]) {
    plugins.forEach((p) => {
      // sanitize
      p.extensions = p.extensions.map(sanitizeExtension);

      // post-process
      getGatingFlags(p).forEach((flag) => {
        p.extensions.filter(isGateableExtension).forEach((e) => {
          e.flags.required = _.uniq([ ...e.flags.required, flag ]);
        });
      });

      // freeze
      p.extensions = p.extensions.map((e) => {
        return _.assignWith(e, (value) => _.isObject(value) ? Object.freeze(value) : value);
      });
    });

    this.extensions = _.flatMap(plugins.map((p) => p.extensions));
    this.registry = new ExtensionRegistry(this.extensions);
  }

  public getExtensionsInUse(flags: {[key: string]: boolean}) {
    return this.extensions
      .filter((e) => e.flags.required.every((f) => !flagPending(flags[f]) && flags[f]))
      .filter((e) => e.flags.disallowed.every((f) => !flagPending(flags[f]) && !flags[f]));
  }
}
