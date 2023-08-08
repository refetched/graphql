import { Nullable } from '@refetched/types';
import { NestedIDNullableFilterInput } from './NestedIDNullableFilterInput';
import { Scalars } from './Scalars';

export type IDNullableFilterInput = {
  equals?: Nullable<Scalars['ID']>;
  in?: Nullable<Array<Scalars['ID']>>;
  not?: Nullable<NestedIDNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['ID']>>;
};
