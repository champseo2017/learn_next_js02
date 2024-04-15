const UserReposPage = ({ params: { user } }) => {
  return <div>Users Repo Page {user}</div>;
};

export default UserReposPage;
/* 
ต่อไปนี้คือโครงสร้างของโฟลเดอร์หลังจากเพิ่มโฟลเดอร์ '[user]' และไฟล์ 'page.jsx' สำหรับแสดงหน้า repositories ของผู้ใช้

app/
┣ githubusers/
┃ ┣ [user]/
┃ ┃ ┗ page.jsx
┃ ┗ page.jsx
┣ layout.js
┗ page.js

คำอธิบาย:
- เราสร้างโฟลเดอร์ใหม่ชื่อ '[user]' ภายใต้โฟลเดอร์ 'githubusers' 
- ภายในโฟลเดอร์ '[user]' เราสร้างไฟล์ 'page.jsx' ซึ่งจะเป็นคอมโพเนนต์สำหรับแสดงหน้า repositories ของผู้ใช้
- ชื่อโฟลเดอร์ '[user]' ที่มีวงเล็บเหลี่ยมหมายถึง dynamic route parameter ที่จะใช้ดึงชื่อผู้ใช้จาก URL

- เราประกาศคอมโพเนนต์ 'UserReposPage' และรับ prop 'params' ที่มี property 'user' ซึ่งจะเป็นชื่อผู้ใช้ที่ดึงมาจาก URL
- ตอนนี้เรายังแค่แสดงข้อความ 'Users Repo Page' เป็น placeholder ก่อน ภายหลังเราจะดึงข้อมูล repositories ของผู้ใช้มาแสดงแทน

เมื่อคลิกลิงก์ 'Go to Repos' ของผู้ใช้ เราจะย้ายไปยัง route '/github_users/<username>' เช่น '/githubusers/greg' ซึ่งจะแสดงหน้า 'Users Repo Page' สำหรับผู้ใช้ 'greg'

ในขั้นตอนต่อไป เราจะดึงข้อมูล repositories ของผู้ใช้จาก GitHub API โดยใช้ชื่อผู้ใช้ที่ได้จาก URL parameter มาแสดงผลในหน้านี้
*/
