const fetchRepos = async (user) => {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  const json = await res.json();
  return json;
};

const Repos = async ({ user }) => {
  const repos = await fetchRepos(user);
  return (
    <div>
      <h1>{user}'s Repos</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, index) => (
              <tr key={index}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Repos;
/* 
ใน Repos.jsx เราจะคัดลอกโค้ด markup ของ table มาใช้ โดยในส่วนหัวของตารางจะมีคอลัมน์สำหรับชื่อและคำอธิบายของ repository ในส่วน body ของตาราง เราจะวนลูปแสดงชื่อและคำอธิบายของแต่ละ repository โดยใช้ข้อมูลที่ได้จาก GitHub API

หลังจากเพิ่มชื่อและคำอธิบายลงในตารางและรีเฟรชหน้า เราจะเห็นตารางที่แสดงรายการ repositories ของผู้ใช้ ถึงตรงนี้ เราก็สร้างคอมโพเนนต์ที่ดึงและแสดงรายการ repositories ของผู้ใช้บน GitHub ได้สำเร็จแล้ว
*/
