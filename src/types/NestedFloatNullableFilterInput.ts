import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedFloatNullableFilterInput = {
  equals?: Nullable<Scalars['Float']>;
  gt?: Nullable<Scalars['Float']>;
  gte?: Nullable<Scalars['Float']>;
  in?: Nullable<Array<Scalars['Float']>>;
  lt?: Nullable<Scalars['Float']>;
  lte?: Nullable<Scalars['Float']>;
  not?: Nullable<NestedFloatNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['Float']>>;
};
