import { NextResponse } from "next/server";
import books from "@/app/api/books/data.json";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(query.toLowerCase());
  });

  return NextResponse.json(filteredBooks);
}

/* 
เราต้องการดูวิธีการดึงพารามิเตอร์ของ search query เพื่อที่จะสามารถสร้างฟังก์ชันการค้นหาหนังสือได้ ปัจจุบันในเอนด์พอยต์ API ของเรา เรากำลังดึงหนังสือทั้งหมด สมมติว่าเราต้องการเส้นทางที่มี search query เช่น 'localhost:3000/api/books/search?query=graphql' เราจะศึกษาวิธีการดึงคำว่า 'graphql' เพื่อใช้ในการค้นหาหนังสือที่มีอยู่

เราดึงค่า `query` และเก็บไว้ในตัวแปรค่าคงที่ จากนั้นเรากรองหนังสือโดยวนลูปผ่าน Array `books` แปลงชื่อหนังสือเป็นตัวพิมพ์เล็กทั้งหมด แล้วตรวจสอบว่ามีคำที่ตรงกับ `query` (ที่ถูกแปลงเป็นตัวพิมพ์เล็กเช่นกัน) หรือไม่ ซึ่งจะช่วยกำจัดความแตกต่างของตัวพิมพ์ใหญ่-เล็ก สุดท้ายเราส่งหนังสือที่กรองแล้วกลับไปเป็น JSON response
*/
