import { JSONObject } from '@refetched/types';
import { NodeID } from './NodeID';

export type DecryptedCursorDataNode = { id: NodeID } & JSONObject;
