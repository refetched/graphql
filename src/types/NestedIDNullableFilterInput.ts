import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedIDNullableFilterInput = {
  equals?: Nullable<Scalars['ID']>;
  in?: Nullable<Array<Scalars['ID']>>;
  not?: Nullable<NestedIDNullableFilterInput>;
  notIn?: Nullable<Array<Scalars['ID']>>;
};
