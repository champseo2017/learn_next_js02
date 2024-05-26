// /app/api/books/[id]/route.js
import { NextResponse } from "next/server";
import { prisma } from "../../../../../db";
import useMsgPack from "@/app/hooks/useMsgPack";

export const DELETE = async (request, { params }) => {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();

  // ถอดรหัส params ที่เข้ารหัสด้วย MsgPack
  const decodedParams = decodeMsgPack(await request.arrayBuffer());
  const { id } = decodedParams;

  // ลบหนังสือออกจากฐานข้อมูล Prisma โดยใช้ id
  await prisma.book.delete({
    where: { id: id },
  });

  // ส่ง response เป็น MessagePack
  const responseData = { "Book deleted": id };
  const encodedResponse = encodeMsgPack(responseData);

  return new NextResponse(encodedResponse, {
    headers: {
      "Content-Type": "application/x-msgpack",
    },
  });
};
