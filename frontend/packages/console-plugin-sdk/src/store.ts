import * as _ from 'lodash';

import { flagPending, FeatureState } from '@console/internal/reducers/features';
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

      // TODO(vojtech): freeze?
    });

    this.extensions = _.flatMap(plugins.map((p) => p.extensions));
    this.registry = new ExtensionRegistry(this.extensions);
  }

  public getExtensionsInUse(flags: FeatureState) {
    const isPending = (f: string) => flagPending(flags.get(f));
    const isEnabled = (f: string) => flags.get(f) === true;

    return this.extensions.filter((e) => {
      if (!e.flags) {
        // always-on extension
        return true;
      }

      return e.flags.required.every((f) => !isPending(f) && isEnabled(f))
        && e.flags.disallowed.every((f) => !isPending(f) && !isEnabled(f));
    });
  }

  public getAlwaysOnExtensions() {
    return this.extensions.filter((e) => !e.flags);
  }
}
