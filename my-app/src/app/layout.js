import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greg's Portfolio of Small Bets",
  description: "Tech Courses and Books",
  keywords:
    "passive income, small bets, tech courses, tech books, tech tutorials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              Greg's Portfolio of Small Bets
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about/contact">Contact</Link>
              </li>
              <li>
                <Link href="/githubusers">GitHub Users</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

/* 
โค้ดนี้เป็นส่วนหนึ่งของไฟล์ app/layout.js ซึ่งเป็นโครงสร้างหลักของแอปพลิเคชัน โดย navigation bar จะปรากฏในทุกหน้าของแอปพลิเคชัน

- `navbar`: คลาสนี้ใช้สำหรับสร้างแถบนำทาง (navigation bar) ใน Daisy UI มันจะจัดวางองค์ประกอบภายในให้เป็นแถวเดียวกัน และมีการจัดตำแหน่งที่เหมาะสมสำหรับแถบนำทาง
- `bg-base-100`: คลาสนี้ใช้สำหรับกำหนดสีพื้นหลังของแถบนำทาง โดย `base-100` เป็นสีพื้นหลังเริ่มต้นของ Daisy UI ซึ่งปกติจะเป็นสีขาวหรือสีอ่อน
- `flex-1`: คลาสนี้ใช้สำหรับกำหนดให้องค์ประกอบยืดขยายเต็มพื้นที่ที่เหลือในแถวนั้น ในที่นี้ใช้กับส่วนด้านซ้ายของแถบนำทาง เพื่อให้ชื่อเว็บไซต์ยืดขยายเต็มพื้นที่
- `btn`: คลาสนี้ใช้สำหรับสร้างปุ่มใน Daisy UI ซึ่งจะมีลักษณะเป็นปุ่มพื้นฐาน
- `btn-ghost`: คลาสนี้ใช้ร่วมกับ `btn` เพื่อสร้างปุ่มแบบโปร่งใส (ghost button) ซึ่งจะมีเฉพาะขอบและข้อความ แต่ไม่มีพื้นหลัง จนกว่าจะเกิด hover
- `normal-case`: คลาสนี้ใช้สำหรับกำหนดให้ข้อความเป็นตัวพิมพ์เล็กและใหญ่ตามปกติ ไม่ใช่ตัวพิมพ์ใหญ่ทั้งหมด
- `text-xl`: คลาสนี้ใช้สำหรับกำหนดขนาดข้อความให้ใหญ่ขึ้น (xl ย่อมาจาก extra-large)
- `flex-none`: คลาสนี้ใช้สำหรับกำหนดให้องค์ประกอบไม่ยืดขยายหรือหดตัวตามพื้นที่ที่เหลือ ในที่นี้ใช้กับส่วนด้านขวาของแถบนำทาง เพื่อให้ปุ่มต่างๆ มีขนาดคงที่
- `menu`: คลาสนี้ใช้สำหรับสร้างเมนูใน Daisy UI
- `menu-horizontal`: คลาสนี้ใช้ร่วมกับ `menu` เพื่อกำหนดให้เมนูวางในแนวนอน (horizontal)
- `px-1`: คลาสนี้ใช้สำหรับกำหนดระยะห่างแนวนอน (horizontal padding) ให้กับองค์ประกอบ โดย `1` เป็นหน่วยขนาดเล็กสุดใน Daisy UI ซึ่งปกติจะเท่ากับ 0.25rem หรือ 4px

ในบริบทของ Flexbox คำว่า flex-none หมายความว่า องค์ประกอบนั้นจะไม่ยืดขยายหรือหดตัวตามพื้นที่ว่างที่เหลือใน Flex container แต่จะคงขนาดตามเนื้อหาข้างใน
*/
