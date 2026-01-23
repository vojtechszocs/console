import { useExtensions as useExtensionsSDK } from '@openshift/dynamic-plugin-sdk';
import type { Extension, ExtensionPredicate, LoadedExtension } from '@openshift/dynamic-plugin-sdk';
import { useTranslatedExtensions } from '../utils/useTranslatedExtensions';
import { useSortedExtensions } from '../utils/useSortedExtensions';

/**
 * React hook for consuming Console extensions which are currently in use.
 *
 * An extension is in use when the associated plugin is currently enabled and its
 * feature flag requirements (if any) are met according to current feature flags.
 *
 * This hook re-renders the component whenever the list of matching extensions changes.
 *
 * The hook's result is guaranteed to be referentially stable across re-renders.
 *
 * @example
 * ```ts
 * const Example = () => {
 *   const navItemExtensions = useExtensions<NavItem>(isNavItem);
 *   // process extensions and render your component
 * };
 * ```
 *
 * @returns List of matching extensions which are currently in use.
 *
 * @see {@link useTranslatedExtensions}
 * @see {@link useSortedExtensions}
 */
// TODO: expose this hook via Console plugin SDK and move ^^ doc to exported symbol
export const useExtensions = <TExtension extends Extension>(
  predicate: ExtensionPredicate<TExtension>,
): LoadedExtension<TExtension>[] => {
  const extensions = useExtensionsSDK(predicate);
  const translatedExtensions = useTranslatedExtensions(extensions);
  const sortedExtensions = useSortedExtensions(translatedExtensions);

  return sortedExtensions;
};
