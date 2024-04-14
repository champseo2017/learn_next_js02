"use client";
import { useState } from "react";

const AboutPage = () => {
  return <div>About Page</div>;
};

export default AboutPage;

/* 
ใน Next.js ถ้าไม่ได้ระบุไว้เป็นอย่างอื่น component ทั้งหมดจะเป็น server component ซึ่งหมายความว่าจะถูก render บน server Server component มีข้อดีที่สำคัญหลายประการ ประการแรก ช่วยให้โหลดหน้าเว็บครั้งแรกได้เร็วขึ้น เพราะไม่ต้องรอให้ JavaScript โหลด นอกจากนี้ยังทำให้ขนาด JavaScript bundle ฝั่งไคลเอนต์เล็กลงด้วย เนื่องจาก component หลายตัวไม่รวมอยู่ในฝั่งไคลเอนต์ ประการที่สอง React server component เป็นมิตรกับ SEO ซึ่งเป็นสิ่งสำคัญ เนื่องจากเราสามารถกำหนด metadata ใน component เหล่านี้ได้ ประการที่สาม server component ให้สิทธิ์การเข้าถึงทรัพยากรที่ปกติไม่สามารถเข้าถึงได้จากไคลเอนต์ ตัวอย่างเช่น คุณสามารถเข้าถึงทรัพยากรแบ็กเอนด์ เช่น ฐานข้อมูลโดยตรงจาก server component และปกป้องข้อมูลที่ละเอียดอ่อน เช่น access token และ API key บน server โดยรวมแล้ว การใช้ server component มักช่วยเพิ่มประสบการณ์ของนักพัฒนาและทำให้กระบวนการทำงานง่ายขึ้น

อย่างไรก็ตาม server component มีข้อเสียด้วย โดยเฉพาะอย่างยิ่งในเรื่องของการโต้ตอบ พวกมันไม่รองรับ event listener เช่น onClick หรือ onChange, component state หรือ useEffect หากแอปพลิเคชันของคุณต้องใช้ฟีเจอร์การโต้ตอบประเภทนี้ server component อาจไม่ใช่ตัวเลือกที่เหมาะสม

ตัวอย่างเช่น ถ้าคุณพยายาม import useState ลงใน server component คุณจะพบข้อผิดพลาดที่ระบุว่า useState ใช้ได้เฉพาะใน client component และ component ปัจจุบันไม่ได้ทำเครื่องหมาย 'useClient' หากคุณต้องการเปลี่ยน server component เป็น client component คุณต้องทำเครื่องหมายด้วย 'use client' อย่างไรก็ตาม การทำเช่นนั้นหมายความว่าคุณไม่สามารถรวม metadata ไว้ใน component ได้ ซึ่งจะทำให้เกิดข้อผิดพลาดอื่น ๆ

หน้า 'About' ด้านบนกำลังทำหน้าที่เป็น React client component ปกติ แม้ว่าจะสามารถใช้ useState หรือ useEffect ได้ แต่เราเลือกที่จะไม่ใช้ เนื่องจากหน้านี้ไม่ต้องการการโต้ตอบใดๆ แต่จะใช้เพื่อนำเสนอข้อมูลเป็นหลักและต้องมีการปรับ SEO ด้วยเหตุผลเหล่านี้ เราจึงยังคงปฏิบัติต่อมันเหมือนเป็น React server component ดังนั้นให้แน่ใจว่าคุณได้เปลี่ยนกลับไปเป็นค่าเดิมแล้ว

ในตัวอย่างนี้ หน้า Contact และ About เป็น server component ที่ render HTML บนฝั่ง server ส่วนหน้า About ที่ทำเครื่องหมาย 'use client' จะกลายเป็น client component ที่สามารถใช้ฟีเจอร์การโต้ตอบของ React อย่างเต็มที่ แต่จะไม่สามารถกำหนด metadata ได้ ซึ่งไม่เหมาะสมสำหรับการทำ SEO ในกรณีของเรา
*/
