import { OrderByInput } from './OrderByInput';

export type CreateDecodedCursorInput<T extends object> = {
  args: { orderBy: OrderByInput<T>[] };
};
