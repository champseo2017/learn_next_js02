// api/books/route.js
import { NextResponse } from "next/server";
import books from "@/app/api/books/data.json";
import useMsgPack from "@/app/hooks/useMsgPack";

export async function GET(req) {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(query.toLowerCase());
  });

  const encodedBooks = encodeMsgPack(filteredBooks);

  return new NextResponse(encodedBooks, {
    headers: {
      "Content-Type": "application/x-msgpack",
    },
  });
}
