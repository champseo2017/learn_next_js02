import books from "./data.json";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(books);
}

// เพิ่ม handler สำหรับ POST request
export async function POST(req) {
  const { title, link, img } = await req.json();
  const newBook = {
    id: books.length + 1,
    title,
    link,
    img,
  };
  books.push(newBook);
  return NextResponse.json("Book added successfully");
}

/* 
- เราต้องดึงข้อมูล body จาก `request.json` โดยใช้ `await` แล้ว destructure `title`, `link` และ `img` จาก `request.json` ซึ่งจะมาจากฟอร์มที่เราจะสร้างในภายหลัง และจะรวมอยู่ใน body ของ request
- ด้วย fields เหล่านี้ เราสามารถสร้าง object หนังสือใหม่ได้ โดยกำหนด `id` เป็นจำนวนหนังสือใน array บวกหนึ่ง (นี่เป็นวิธีชั่วคราวในการสร้าง ID ซึ่งเราจะแทนที่ภายหลังเมื่อเรามีฐานข้อมูล Prisma)
- เนื่องจากเรายังไม่ได้ใช้ฐานข้อมูล เราจึงเพิ่มหนังสือใหม่ลงใน array `books` ในหน่วยความจำโดยตรง
- สุดท้าย เราส่งกลับ response ว่า 'Book added successfully'
*/
