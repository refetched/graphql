import { JSONObject } from '@refetched/types';

export type DecodedCursor<T extends JSONObject> = T & {
  data: string;
};
