import { Inter } from "next/font/google";
import "./globals.css";

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
          <a className="btn btn-ghost normal-case text-xl">DaisyUI</a>
        </div>
        {children}
      </body>
    </html>
  );
}

/* 
ปรับแต่ง metadata ในแต่ละหน้าของเว็บไซต์ของคุณเพื่อเพิ่มประสิทธิภาพสำหรับ SEO เพื่อทำเช่นนี้ ให้คัดลอกออบเจ็กต์ metadata จาก 'layout.js' และวางลงในไฟล์ page.jsx ของแต่ละโฟลเดอร์ ตัวอย่างเช่น ใน '/app/about/page.jsx' คุณสามารถเพิ่ม "About" ลงในชื่อหน้าเว็บ และปรับแต่งคำอธิบายและ keywords ตามนั้น เมื่อบันทึกแล้ว คุณจะสังเกตเห็นว่าชื่อหน้าเว็บเปลี่ยนไปตามหน้าที่คุณกำลังดูอยู่ - เป็น "Greg's Portfolio of Small Bets" บนหน้าแรก

ในไฟล์ app/layout.js เราได้กำหนด metadata สำหรับเว็บไซต์ทั้งหมด โดยระบุ title, description และ keywords ซึ่งจะช่วยในการปรับแต่ง SEO

นอกจากนี้ เรายังสามารถกำหนด metadata เฉพาะสำหรับแต่ละหน้าได้ด้วย เช่นในไฟล์ app/about/page.jsx เราได้กำหนด metadata สำหรับหน้า About โดยระบุ title, description และ keywords ที่แตกต่างจากหน้าอื่นๆ เพื่อเพิ่มประสิทธิภาพของ SEO สำหรับหน้านั้นโดยเฉพาะ
*/
