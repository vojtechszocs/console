import { useMemo } from 'react';
import { useResolvedExtensions as useResolvedExtensionsSDK } from '@openshift/dynamic-plugin-sdk';
import type {
  Extension,
  LoadedExtension,
  ResolvedExtension,
  ExtensionPredicate,
} from '@openshift/dynamic-plugin-sdk';
import { UseResolvedExtensions } from '../extensions/console-types';
import { useTranslatedExtensions } from '@console/plugin-sdk/src/utils/useTranslatedExtensions';
import { useSortedExtensions } from '@console/plugin-sdk/src/utils/useSortedExtensions';

export const useResolvedExtensions: UseResolvedExtensions = <TExtension extends Extension>(
  predicate: ExtensionPredicate<TExtension>,
): [LoadedExtension<ResolvedExtension<TExtension>>[], boolean, unknown[]] => {
  const [resolvedExtensions, resolved, errors] = useResolvedExtensionsSDK(predicate);
  const translatedExtensions = useTranslatedExtensions(resolvedExtensions);
  const sortedExtensions = useSortedExtensions(translatedExtensions);

  return useMemo(() => [sortedExtensions, resolved, errors], [sortedExtensions, resolved, errors]);
};
