import books from "./data.json";
import { NextResponse } from "next/server";
import useMsgPack from "@/app/hooks/useMsgPack";
import { v4 as uuidv4 } from "uuid";

export async function GET(req) {
  // return NextResponse.json(books);
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();
  const encodedBooks = encodeMsgPack(books);
  return new NextResponse(encodedBooks, {
    headers: {
      "Content-Type": "application/x-msgpack",
    },
  });
}

export async function POST(req) {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();
  const encodedBody = await req.arrayBuffer();
  const { title, link, img } = decodeMsgPack(encodedBody);

  const newBook = {
    id: uuidv4(),
    title,
    link,
    img,
  };
  books.push(newBook);
  return new NextResponse(encodeMsgPack("Book added successfully"), {
    headers: {
      "Content-Type": "application/x-msgpack",
    },
  });
}
