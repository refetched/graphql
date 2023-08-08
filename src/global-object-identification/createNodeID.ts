import { JSONObject } from '@refetched/types';
import { NodeID } from '../types';

export const createNodeID = (__typename: string, key: JSONObject): NodeID => {
  return Buffer.from(JSON.stringify({ __typename, ...key })).toString('hex');
};
