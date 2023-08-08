import { JSONObject } from '@refetched/types';
import { Cursor } from './Cursor';
import { Node } from './Node';

export type Edge<T extends JSONObject> = {
  cursor: Cursor;
  node: Node<T>;
};
