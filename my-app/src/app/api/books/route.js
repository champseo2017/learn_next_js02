import books from "./data.json";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(books);
}

/* 
- เรานำเข้าข้อมูลหนังสือจากไฟล์ `data.json` และนำเข้า `NextResponse` จาก `next/server`
- เรากำหนด async function ชื่อ `GET` เพื่อจัดการ GET request
- ภายใน function เราส่งคืน `NextResponse.json(books)` ซึ่ง `books` คือข้อมูลจากไฟล์ JSON ของเรา

เมื่อมีการส่ง GET request ไปที่ `/api/books` Next.js จะเรียก function `GET` ในไฟล์ `route.js` และส่งคืนข้อมูลหนังสือในรูปแบบ JSON กลับไปยัง client
*/
