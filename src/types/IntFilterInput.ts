import { Nullable } from '@refetched/types';
import { NestedIntFilterInput } from './NestedIntFilterInput';
import { Scalars } from './Scalars';

export type IntFilterInput = {
  equals?: Nullable<Scalars['Int']>;
  gt?: Nullable<Scalars['Int']>;
  gte?: Nullable<Scalars['Int']>;
  in?: Nullable<Array<Nullable<Scalars['Int']>>>;
  lt?: Nullable<Scalars['Int']>;
  lte?: Nullable<Scalars['Int']>;
  not?: Nullable<NestedIntFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['Int']>>>;
};
