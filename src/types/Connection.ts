import { JSONObject } from '@refetched/types';
import { Edge } from './Edge';
import { PageInfo } from './PageInfo';

export type Connection<T extends JSONObject> = {
  edges: Edge<T>[];
  pageInfo: PageInfo;
};
