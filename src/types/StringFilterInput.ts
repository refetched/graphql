import { QueryMode } from './QueryMode';
import { NestedStringFilterInput } from './NestedStringFilterInput';
import { Scalars } from './Scalars';
import { Nullable } from '@refetched/types';

export type StringFilterInput = {
  contains?: Nullable<Scalars['String']>;
  endsWith?: Nullable<Scalars['String']>;
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  mode?: Nullable<QueryMode>;
  not?: Nullable<NestedStringFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
  startsWith?: Nullable<Scalars['String']>;
};
