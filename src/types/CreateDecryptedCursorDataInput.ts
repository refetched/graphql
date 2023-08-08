import { OrderByInput } from './OrderByInput';

import { Node } from './Node';

export type CreateDecryptedCursorDataInput<T extends object> = {
  args: { orderBy: OrderByInput<T>[] };
  node: Node<T>;
};
