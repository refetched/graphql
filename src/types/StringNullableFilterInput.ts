import { QueryMode } from './QueryMode';
import { NestedStringNullableFilterInput } from './NestedStringNullableFilterInput';
import { Scalars } from './Scalars';
import { Nullable } from '@refetched/types';

export type StringNullableFilterInput = {
  contains?: Nullable<Scalars['String']>;
  endsWith?: Nullable<Scalars['String']>;
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Scalars['String']>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  mode?: Nullable<QueryMode>;
  not?: Nullable<NestedStringNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['String']>>;
  startsWith?: Nullable<Scalars['String']>;
};
