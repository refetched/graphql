import { Nullable } from '@refetched/types';
import { NestedFloatFilterInput } from './NestedFloatFilterInput';
import { Scalars } from './Scalars';

export type FloatFilterInput = {
  equals?: Nullable<Scalars['Float']>;
  gt?: Nullable<Scalars['Float']>;
  gte?: Nullable<Scalars['Float']>;
  in?: Nullable<Array<Nullable<Scalars['Float']>>>;
  lt?: Nullable<Scalars['Float']>;
  lte?: Nullable<Scalars['Float']>;
  not?: Nullable<NestedFloatFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['Float']>>>;
};
