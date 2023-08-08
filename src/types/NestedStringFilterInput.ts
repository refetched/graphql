import { Nullable } from '@refetched/types';
import { Scalars } from './Scalars';

export type NestedStringFilterInput = {
  contains?: Nullable<Scalars['String']>;
  endsWith?: Nullable<Scalars['String']>;
  equals?: Nullable<Scalars['String']>;
  gt?: Nullable<Scalars['String']>;
  gte?: Nullable<Scalars['String']>;
  in?: Nullable<Array<Nullable<Scalars['String']>>>;
  lt?: Nullable<Scalars['String']>;
  lte?: Nullable<Scalars['String']>;
  not?: Nullable<NestedStringFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['String']>>>;
  startsWith?: Nullable<Scalars['String']>;
};
