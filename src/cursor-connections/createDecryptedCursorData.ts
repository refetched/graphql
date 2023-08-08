import { DecryptedCursorData } from '..';
import { CreateDecryptedCursorDataInput } from '../types/CreateDecryptedCursorDataInput';

export const createDecryptedCursorData = ({ args, node }: CreateDecryptedCursorDataInput): DecryptedCursorData => {
  const orderByKeys = args.orderBy.map((input) => Object.keys(input)[0]);
  const nodeEntries = Object.entries(node).filter(([key]) => orderByKeys.includes(key));
  return { args, node: Object.fromEntries(nodeEntries) };
};
