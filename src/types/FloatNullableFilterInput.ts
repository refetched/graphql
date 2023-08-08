import { Nullable } from '@refetched/types';
import { NestedFloatNullableFilterInput } from './NestedFloatNullableFilterInput';
import { Scalars } from './Scalars';

export type FloatNullableFilterInput = {
  equals?: Nullable<Scalars['Float']>;
  gt?: Nullable<Scalars['Float']>;
  gte?: Nullable<Scalars['Float']>;
  in?: Nullable<Array<Scalars['Float']>>;
  lt?: Nullable<Scalars['Float']>;
  lte?: Nullable<Scalars['Float']>;
  not?: Nullable<NestedFloatNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['Float']>>;
};
