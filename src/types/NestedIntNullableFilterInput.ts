import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedIntNullableFilterInput = {
  equals?: Nullable<Scalars['Int']>;
  gt?: Nullable<Scalars['Int']>;
  gte?: Nullable<Scalars['Int']>;
  in?: Nullable<Array<Scalars['Int']>>;
  lt?: Nullable<Scalars['Int']>;
  lte?: Nullable<Scalars['Int']>;
  not?: Nullable<NestedIntNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['Int']>>;
};
