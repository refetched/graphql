import { JSONObject } from '@refetched/types';
import { Cursor } from '../types';
import { CreateCursorInput } from '../types/CreateCursorInput';
import { encrypt } from '@refetched/cryptography';
import { createDecryptedCursorData } from './createDecryptedCursorData';

export const createCursor = <T extends JSONObject>(input: CreateCursorInput<T>): Cursor => {
  const decodedData = createDecryptedCursorData(input);
  const data = encrypt(decodedData);
};

// export const createCursor = <T extends JSONObject>(
//   args: ConnectionArguments<T>,
//   node: Node<T>,
//   encryptionKey: string,
// ): Cursor => {
//   // Descrutcture the arguments.
//   const { orderBy } = args;
//   // Get the initialization vector.
//   const decodedIv = randomBytes(16);
//   const iv = encodeBuffer(decodedIv);
//   // Get the reference.
//   const keys = orderBy?.map((option) => Object.keys(option)[0]);
//   const entries = Object.entries(node).filter(([key]) => key === 'id' || keys?.includes(key));
//   const ref = Object.fromEntries(entries);
//   // Get the data.
//   const decryptedData: DecryptedCursorData<T> = { args: { orderBy }, data: ref };
//   const data = encryptObject(decryptedData, encryptionKey, decodedIv);
//   // Return the cursor.
//   const decodedCursor: DecodedCursor<{ iv: string }> = { iv, data };
//   return encodeObject(decodedCursor);
// };
