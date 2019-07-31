import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { RootState } from '@console/internal/redux';
import { featureReducerName } from '@console/internal/reducers/features';
import { pluginStore } from '@console/internal/plugins';
import { Extension } from '.';

/**
 * Returns a higher-order component (HOC) that connects the provided `Component`
 * to Console extensions. This is a direct analogy to `connect` from react-redux,
 * but using `Extension[]` as the source of truth.
 *
 * Use `mapExtensionsToProps` to specify additional props to pass to the wrapped
 * component, based on the extensions that are currently in use.
 *
 * An extension is in use when
 * - it is an always-on extension (i.e. not gated by any feature flags)
 * - otherwise, its `flags` constraints must be satisfied
 *   - all required feature flags are resolved to `true`
 *   - all disallowed feature flags are resolved to `false`
 */
export const connectToExtensions: ConnectToExtensions = (mapExtensionsToProps) => (Component) => {
  const mapStateToProps = (state: RootState) => ({
    allFlags_: state[featureReducerName],
  });

  const ComponentWrapper = connect(mapStateToProps)(
    (props) => {
      const extensions = pluginStore.getExtensionsInUse(props.allFlags_);
      const extensionProps = mapExtensionsToProps(extensions);
      return <Component {..._.omit(props, 'allFlags_')} {...extensionProps} />;
    }
  );

  const HOC = (props) => <ComponentWrapper {...props} />;
  HOC.displayName = `connectToExtensions(${Component.displayName || Component.name})`;
  HOC.WrappedComponent = Component;
  return HOC;
};

type ConnectToExtensions = <ExtensionProps = any, OwnProps = any>(
  mapExtensionsToProps: MapExtensionsToProps<ExtensionProps>,
) => (Component: React.ComponentType<ExtensionProps>)
  => React.ComponentType<OwnProps> & {WrappedComponent: React.ComponentType<ExtensionProps>};

type MapExtensionsToProps<ExtensionProps> = (extensions: Extension[]) => ExtensionProps;
