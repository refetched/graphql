import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedDateTimeNullableFilterInput = {
  equals?: Nullable<Scalars['DateTime']>;
  gt?: Nullable<Scalars['DateTime']>;
  gte?: Nullable<Scalars['DateTime']>;
  in?: Nullable<Array<Scalars['DateTime']>>;
  lt?: Nullable<Scalars['DateTime']>;
  lte?: Nullable<Scalars['DateTime']>;
  not?: Nullable<NestedDateTimeNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['DateTime']>>;
};
