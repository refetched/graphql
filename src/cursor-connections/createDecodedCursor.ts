import { JSONObject } from "@refetched/types";
import { DecryptedCursorDataArguments } from "../types/DecryptedCursorDataArguments";
import { DecodedCursor } from "../types";

export const createDecodedCursor = ({ orderBy }: DecryptedCursorDataArguments<JSONObject>, node: JSONObject): DecodedCursor => {
  const decryptedData = createDecryptedCursorData();
  const iv = createIv();
  return {}
}