const fetchGitHubUsers = async () => {
  const res = await fetch("https://api.github.com/search/users?q=greg");
  const json = await res.json();
  return json.items;
};

const GitHubUsersPage = async () => {
  const users = await fetchGitHubUsers();
  console.log(users);

  return (
    <div>
      <h1>GitHub Users Page</h1>
    </div>
  );
};

export default GitHubUsersPage;

/* 
การดึงข้อมูล (Data Fetching)

มาพูดถึงการดึงข้อมูลใน React server component กันสักหน่อย ปกติแล้ว ใน React client component เราจะใช้ useEffect สำหรับการดึงข้อมูล อย่างไรก็ตาม ในกรณีนี้ เราต้องการดึงข้อมูลผู้ใช้ GitHub ใน server component เป้าหมายของเราคือการดึงรายชื่อผู้ใช้ GitHub เมื่อคลิกลิงก์ "GitHub Users"

ในการทำเช่นนี้ เราจะต้องสร้าง route สำหรับ "GitHub Users" ภายใต้ 'app' เราจะสร้างโฟลเดอร์ใหม่ชื่อ 'githubusers' และภายในนั้น สร้างไฟล์ชื่อ 'page.jsx' จากนั้นเราจะสร้าง component 'GitHubUsersPage' เมื่อบันทึกแล้ว คุณควรจะถูกนำไปยังหน้าที่เหมาะสมเมื่อคลิกที่ลิงก์ "GitHub Users"

ขั้นตอนต่อไปคือการดึงข้อมูลผู้ใช้ GitHub ซึ่งสามารถทำได้โดยการเข้าถึง GitHub API ผ่าน 'api.github.com/search/users' และเพิ่ม username ต่อท้าย URL เช่น http://api.github.com/search/users?q=greg API จะส่งคืนผลลัพธ์รายการ ซึ่งรวมถึง array 'items' ที่เก็บ array ของผู้ใช้ GitHub

ในการดึงข้อมูลนี้ เราจะสร้างฟังก์ชันชื่อ 'fetchGitHubUsers'

สิ่งสำคัญที่ต้องทราบคือ เนื่องจากนี่เป็น server component จะไม่มีอะไรแสดงใน developer tools ของเบราว์เซอร์ เพราะการดำเนินการทั้งหมดเกิดขึ้นบนฝั่ง server ดังนั้น เราจึงต้องตรวจสอบ server log ในเทอร์มินัลแทน อย่างไรก็ตาม หากมีการระบุ 'useClient' ที่ด้านบนของ component console.log จะปรากฏในเบราว์เซอร์
*/
