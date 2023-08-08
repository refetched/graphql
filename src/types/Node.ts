import { NodeID } from './NodeID';

export type Node<T extends object> = T & { id: NodeID };
