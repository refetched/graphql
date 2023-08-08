import { Nullable } from '@refetched/types';
import { NestedIntNullableFilterInput } from './NestedIntNullableFilterInput';
import { Scalars } from './Scalars';

export type IntNullableFilterInput = {
  equals?: Nullable<Scalars['Int']>;
  gt?: Nullable<Scalars['Int']>;
  gte?: Nullable<Scalars['Int']>;
  in?: Nullable<Array<Scalars['Int']>>;
  lt?: Nullable<Scalars['Int']>;
  lte?: Nullable<Scalars['Int']>;
  not?: Nullable<NestedIntNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['Int']>>;
};
