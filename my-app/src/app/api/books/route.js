import { NextResponse } from "next/server";
import useMsgPack from "@/app/hooks/useMsgPack";
import { prisma } from "../../../../db";

export async function GET(req) {
  // await prisma.book.deleteMany();
  // const bookCount = await prisma.book.count();

  // if (bookCount === 0) {
  //   await prisma.book.create({
  //     data: {
  //       title: "Prisma Book",
  //       link: "https://www.amazon.com/dp/B0BXMRB5VF/",
  //       img: "https://via.placeholder.com/600/92c952",
  //     },
  //   });
  // }

  const booksPrisma = await prisma.book.findMany();

  // เข้ารหัส books เป็น MessagePack
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();
  const encodedBooks = encodeMsgPack(booksPrisma);

  // ส่งข้อมูลเป็น MessagePack พร้อมตั้งค่า Content-Type header
  return new NextResponse(encodedBooks, {
    headers: {
      "Content-Type": "application/x-msgpack",
    },
  });
}

export async function POST(req) {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();

  // ถอดรหัสข้อมูลจาก MessagePack
  const encodedBody = await req.arrayBuffer();
  const { title, link, img } = decodeMsgPack(encodedBody);

  // สร้างหนังสือใหม่ในฐานข้อมูล Prisma
  await prisma.book.create({
    data: {
      title: title,
      link: link,
      img: img,
    },
  });

  // ส่งข้อความตอบกลับเป็น MessagePack
  return new NextResponse(encodeMsgPack("Book added successfully"), {
    headers: {
      "Content-Type": "application/x-msgpack",
    },
  });
}
