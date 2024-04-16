const LoadingPage = () => {
  return (
    <div>
      <button className="btn loading">loading</button>
    </div>
  );
};

export default LoadingPage;
/* 
ใน Next.js เวอร์ชัน 13 ขึ้นไป (App Router) การตรวจสอบว่าต้องแสดงไฟล์ `loading.jsx` หรือโหลดข้อมูลนั้น ใช้หลักการที่เรียกว่า "Suspense"

Suspense เป็นกลไกที่ช่วยให้คุณจัดการกับสถานะโหลดข้อมูลแบบอะซิงโครนัสในคอมโพเนนต์ของคุณ เมื่อคอมโพเนนต์ใดๆ ภายในคอมโพเนนต์แม่กำลังโหลดข้อมูล Next.js จะแสดงคอมโพเนนต์ `loading.jsx` จนกว่าข้อมูลจะพร้อม

หลักการทำงานของ Suspense ใน Next.js มีดังนี้:

1. เมื่อคอมโพเนนต์แม่ (parent component) เริ่มเรนเดอร์ มันจะตรวจสอบว่ามีการเรียกใช้ฟังก์ชันแอสิงโครนัส (เช่น การดึงข้อมูล) ในคอมโพเนนต์ลูก (child components) หรือไม่

2. ถ้ามีการเรียกใช้ฟังก์ชันแอสิงโครนัส Next.js จะ "ระงับ" (suspend) การเรนเดอร์คอมโพเนนต์แม่ชั่วคราว และแสดงคอมโพเนนต์ `loading.jsx` แทน

3. ในขณะเดียวกัน Next.js จะเริ่มดึงข้อมูลแอสิงโครนัสในเบื้องหลัง

4. เมื่อข้อมูลแอสิงโครนัสพร้อมใช้งาน Next.js จะ "เรซูม" (resume) การเรนเดอร์คอมโพเนนต์แม่ และแทนที่คอมโพเนนต์ `loading.jsx` ด้วยคอมโพเนนต์ลูกที่อัปเดตแล้ว

5. ถ้าไม่มีการเรียกใช้ฟังก์ชันแอสิงโครนัส หรือข้อมูลพร้อมใช้งานทันที Next.js จะเรนเดอร์คอมโพเนนต์โดยไม่แสดงคอมโพเนนต์ `loading.jsx` เลย
*/
