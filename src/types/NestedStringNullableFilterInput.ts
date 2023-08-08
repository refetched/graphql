import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedStringNullableFilterInput = {
  contains?: Nullable<Scalars['String']>;
  endsWith?: Nullable<Scalars['String']>;
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Scalars['String']>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  not?: Nullable<NestedStringNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['String']>>;
  startsWith?: Nullable<Scalars['String']>;
};
