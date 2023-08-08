import { JSONObject } from '@refetched/types';
import { DecryptedCursorDataArguments } from './DecryptedCursorDataArguments';

export type CreateCursorInput = {
  args: DecryptedCursorDataArguments;
  node: JSONObject;
};
