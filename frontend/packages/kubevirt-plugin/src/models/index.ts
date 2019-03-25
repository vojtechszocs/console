import { K8sKind } from '@console/shared';

export const VirtualMachineModel: K8sKind = {
  label: 'Virtual Machine',
  labelPlural: 'Virtual Machines',
  apiVersion: 'v1alpha2',
  path: 'virtualmachines',
  apiGroup: 'kubevirt.io',
  plural: 'virtualmachines',
  abbr: 'VM',
  namespaced: true,
  kind: 'VirtualMachine',
  id: 'virtualmachine',
  crd: true,
};
