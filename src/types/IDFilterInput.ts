import { Nullable } from '@refetched/types';
import { NestedIDFilterInput } from './NestedIDFilterInput';
import { Scalars } from './Scalars';

export type IDFilterInput = {
  equals?: Nullable<Scalars['ID']>;
  in?: Nullable<Array<Nullable<Scalars['ID']>>>;
  not?: Nullable<NestedIDFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['ID']>>>;
};
