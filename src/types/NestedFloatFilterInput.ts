import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedFloatFilterInput = {
  equals?: Nullable<Scalars['Float']>;
  gt?: Nullable<Scalars['Float']>;
  gte?: Nullable<Scalars['Float']>;
  in?: Nullable<Array<Nullable<Scalars['Float']>>>;
  lt?: Nullable<Scalars['Float']>;
  lte?: Nullable<Scalars['Float']>;
  not?: Nullable<NestedFloatFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['Float']>>>;
};
