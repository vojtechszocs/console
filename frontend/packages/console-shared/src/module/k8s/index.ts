export type MatchExpression = {key: string, operator: 'Exists' | 'DoesNotExist'}
  | {key: string, operator: 'In' | 'NotIn' | 'Equals' | 'NotEquals', values: string[]};

export type Selector = {
  matchLabels?: {[key: string]: string};
  matchExpressions?: MatchExpression[];
};

export type K8sKind = {
  abbr: string;
  kind: string;
  label: string;
  labelPlural: string;
  path: string;
  plural: string;
  propagationPolicy?: 'Foreground' | 'Background';

  id?: string;
  crd?: boolean;
  apiVersion: string;
  apiGroup?: string;
  namespaced?: boolean;
  selector?: Selector;
  labels?: {[key: string]: string};
  annotations?: {[key: string]: string};
  verbs?: string[];
};
