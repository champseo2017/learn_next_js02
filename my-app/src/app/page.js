import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-primary">Button</button>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

/* 
ระบบ Routing และ Nested Routes

มาพูดถึงเรื่อง routing ใน Next.js กัน สมมติว่าเราอยากสร้างเพจ 'About' ทำยังไงดี?

ขั้นแรก ให้สร้างโฟลเดอร์ใหม่ชื่อ 'about' ไว้ใต้ไดเรกทอรี 'app' จากนั้นสร้างไฟล์ชื่อ 'page.jsx' ข้างใน (ใช้นามสกุล .js หรือ .jsx ก็ได้) แล้วสร้าง component ง่ายๆ ชื่อ 'AboutPage' ขึ้นมา

เพื่อแสดงการทำงานของเพจใหม่และ route ของมัน เราจะกลับไปที่ component 'HomePage' ใน '/app/page.js' แล้ว import component 'Link' จาก 'next/link' เพื่อใช้สร้างลิงก์สำหรับ navigation โดยมีโค้ดที่เพิ่มเข้ามา ดังนี้:

import Link มาจาก 'next/link'
เพิ่ม <ul> ที่มี <li> สองอันสำหรับลิงก์ไปหน้า 'Home' และ 'About' โดยใช้ component <Link> และระบุ URL ผ่าน prop href
ในเพจ 'About' จะใช้ '/about' ส่วนเพจ 'Home' ใช้แค่ '/'

จากนั้นเราจะมาลองใช้ nested route โดยสมมติว่าเราอยากมีเพจ 'Contact' ซ้อนอยู่ในเพจ 'About' โดยเพิ่ม:

ลิงก์ไปที่ '/about/contact' ในหน้า 'Home'
เราจะทำแบบนี้ได้โดยการสร้างโฟลเดอร์ซ้อนชื่อ 'contact' ไว้ในโฟลเดอร์ 'about' โดยทุก custom route ที่เราสร้าง จะสอดคล้องกับชื่อโฟลเดอร์ จากนั้นสร้างไฟล์ 'page.jsx' และ component 'ContactPage' ไว้ข้างใน

ด้วย nested route แบบนี้ ตอนนี้เราก็จะมี URL '/about/contact' แล้ว
ถ้าต้องการ nested route เพิ่มอีก ก็แค่สร้างโฟลเดอร์ย่อยลงไปเรื่อยๆ

ทุก custom route ที่เราสร้างจะสอดคล้องกับโครงสร้างโฟลเดอร์ โฟลเดอร์ย่อยเท่าไหร่ ก็จะได้ URL ที่ซ้อนกันลึกเท่านั้น

*/
