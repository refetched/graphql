import { JSONObject, Nullable } from '@refetched/types';
import { Cursor } from './Cursor';
import { OrderByInput } from './OrderByInput';
import { WhereInput } from './WhereInput';

export type ConnectionArguments<T extends JSONObject> = {
  first?: Nullable<number>;
  after?: Nullable<Cursor>;
  where?: Nullable<WhereInput<T>>;
  orderBy?: Nullable<OrderByInput<T>[]>;
};
