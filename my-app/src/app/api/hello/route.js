export async function GET(req) {
  return new Response("Hello World");
}

/* 
API Route Handlers

 โดย endpoint คือ 'api' และภายใต้ 'api' เรามี 'hello' ส่วน code จริงๆ จะอยู่ในไฟล์ 'route.js'

ใน 'route.js' function จะถูกตั้งชื่อตาม HTTP request method ที่เราต้องการจัดการ เช่น ถ้าเราต้องการจัดการ GET request เราจะตั้งชื่อ function ว่า 'GET' แต่ถ้าเราเปลี่ยนเป็น 'POST' การส่ง GET request จะ return 'Method Not Allowed' แต่ถ้าเปลี่ยนเป็น POST request จะ return status 200 ซึ่งแสดงถึงความสำเร็จ

- เราส่งออก async function ชื่อ `GET` ซึ่งรับ `req` (request) เป็น parameter
- Function นี้ return `new Response('Hello World!')` ซึ่งเป็น response ที่ส่งกลับไปยัง client เมื่อมีการเรียก API นี้ด้วย GET request

เมื่อส่ง GET request ไปที่ `localhost:3000/api/hello`:
- Next.js จะค้นหา file `route.js` ใน `/app/api/hello`
- เมื่อพบ file แล้ว มันจะ execute function `GET` ที่เราส่งออก
- Function จะ return response `'Hello World!'` กลับไปยัง client

โดยมีรายละเอียดดังนี้:

- `app/`: เป็น directory หลักของแอปพลิเคชัน Next.js
  - `api/`: เป็น directory ที่เก็บ API route handlers ทั้งหมด ซึ่งจะทำให้ URL ของ API ขึ้นต้นด้วย `/api`
    - `hello/`: เป็น directory ที่เก็บ API route handler สำหรับ endpoint `/api/hello`
      - `route.js`: เป็นไฟล์ที่ประกาศ function สำหรับจัดการ HTTP request ที่เข้ามา โดยชื่อ function จะตรงกับ HTTP method ที่ต้องการจัดการ เช่น `GET`, `POST`, `PUT`, `DELETE` เป็นต้น

เมื่อมีการส่ง HTTP request มาที่ `/api/hello`:
1. Next.js จะค้นหาไฟล์ `route.js` ใน directory `app/api/hello/`
2. เมื่อพบไฟล์แล้ว Next.js จะ execute function ที่มีชื่อตรงกับ HTTP method ของ request นั้น เช่น ถ้าเป็น GET request ก็จะ execute function `GET` ที่ export ใน `route.js`
3. Function ที่ถูก execute จะจัดการกับ request และ return response กลับไปยัง client
*/
