import { Nullable } from '@refetched/types';
import { Cursor } from './Cursor';

export type PageInfo = {
  endCursor: Nullable<Cursor>;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: Nullable<Cursor>;
};
