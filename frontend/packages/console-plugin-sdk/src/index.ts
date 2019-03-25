export * from './api';

import { Registry } from './registry';
import { plugins } from './plugins';

export const registry = new Registry(plugins);
