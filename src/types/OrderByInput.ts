import { JSONObject } from '@refetched/types';
import { SortOrder } from './SortOrder';

export type OrderByInput<T extends JSONObject> = {
  [key in keyof T]?: SortOrder;
};
