import { Nullable } from '@refetched/types';
import { NestedDateTimeFilterInput } from './NestedDateTimeFilterInput';
import { Scalars } from './Scalars';

export type DateTimeFilterInput = {
  equals?: Nullable<Scalars['DateTime']>;
  gt?: Nullable<Scalars['DateTime']>;
  gte?: Nullable<Scalars['DateTime']>;
  in?: Nullable<Array<Nullable<Scalars['DateTime']>>>;
  lt?: Nullable<Scalars['DateTime']>;
  lte?: Nullable<Scalars['DateTime']>;
  not?: Nullable<NestedDateTimeFilterInput>;
  notIn?: Nullable<Array<Nullable<Scalars['DateTime']>>>;
};
