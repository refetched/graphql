import { JSONObject, Nullable } from '@refetched/types';

export type WhereInput<T extends JSONObject> = {
  [key in keyof T]?: unknown;
} & {
  and?: Nullable<WhereInput<T>[]>;
  or?: Nullable<WhereInput<T>[]>;
  not?: Nullable<WhereInput<T>[]>;
};
