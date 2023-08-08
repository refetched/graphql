import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedIDFilterInput = {
  equals?: Nullable<Scalars['ID']>;
  in?: Nullable<Array<Nullable<Scalars['ID']>>>;
  not?: Nullable<NestedIDFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['ID']>>>;
};
