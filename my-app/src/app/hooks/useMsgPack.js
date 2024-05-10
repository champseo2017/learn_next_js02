// useMsgPack.js
import { encode, decode } from "@msgpack/msgpack";

const useMsgPack = () => {
  const encodeMsgPack = (data) => {
    return encode(data);
  };

  const decodeMsgPack = (data) => {
    return decode(new Uint8Array(data));
  };

  return { encodeMsgPack, decodeMsgPack };
};

export default useMsgPack;
