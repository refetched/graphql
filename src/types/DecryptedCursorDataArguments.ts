import { JSONObject } from '@refetched/types';
import { OrderByInput } from './OrderByInput';

export type DecryptedCursorDataArguments = {
  orderBy: OrderByInput<JSONObject>[];
};
