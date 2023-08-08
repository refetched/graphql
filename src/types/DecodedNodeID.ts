import { JSONObject } from '@refetched/types';

export type DecodedNodeID<T extends JSONObject> = { __typename: string } & T;
