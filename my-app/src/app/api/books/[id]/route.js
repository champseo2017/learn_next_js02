import books from "../data.json";
import { NextResponse } from "next/server";
import useMsgPack from "@/app/hooks/useMsgPack";

export const DELETE = async (request, { params }) => {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();

  // ถอดรหัส params ที่เข้ารหัสด้วย MsgPack
  const { id } = decodeMsgPack(await request.arrayBuffer());

  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
  }

  return new NextResponse({ "Book deleted": id });
};
