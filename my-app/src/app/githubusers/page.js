import Link from "next/link";

const fetchGitHubUsers = async () => {
  const res = await fetch("https://api.github.com/search/users?q=greg", {
    next: {
      revalidate: 60, // เพิ่ม revalidate เพื่อบอกให้ cache ข้อมูลเป็นเวลา 60 วินาที
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const json = await res.json();
  return json.items;
};
/* 
object { next: { revalidate: 60 } } เป็น argument ที่สองใน fetch เพื่อระบุให้ Next.js รู้ว่าควร revalidate (ตรวจสอบข้อมูลใหม่) ทุกๆ 60 วินาที ซึ่งจะช่วยให้แอปพลิเคชันของเราแสดงข้อมูลล่าสุดเสมอ โดยไม่ต้องเสียสละประสิทธิภาพจากการ caching

การกำหนด `revalidate: 60` หมายความว่า หลังจากผ่านไป 60 วินาที Next.js จะทำการเรียกข้อมูลใหม่ (revalidate) โดยอัตโนมัติ

กระบวนการนี้ทำงานดังนี้:

1. เมื่อมีการร้องขอ (request) เข้ามาครั้งแรก Next.js จะเรียกข้อมูลจาก API และส่งคืนผลลัพธ์ให้กับผู้ใช้ 

2. Next.js จะเก็บ cache ผลลัพธ์นั้นไว้เป็นเวลา 60 วินาที

3. ในระหว่าง 60 วินาทีนั้น หากมีการร้องขอเดียวกันเข้ามาอีก Next.js จะส่งคืนข้อมูลจาก cache โดยไม่ต้องเรียก API ใหม่ ซึ่งช่วยเพิ่มประสิทธิภาพ

4. หลังจากผ่านไป 60 วินาที เมื่อมีการร้องขอเข้ามาอีกครั้ง Next.js จะเรียกข้อมูลใหม่จาก API (revalidate) เพื่อให้ได้ข้อมูลล่าสุด และเก็บ cache ไว้อีก 60 วินาที

5. วงจรนี้จะเริ่มต้นใหม่อีกครั้ง โดยทำซ้ำขั้นตอนที่ 2-4

ด้วยวิธีนี้ แอปพลิเคชันของเราจะสามารถแสดงข้อมูลที่ update ล่าสุดเสมอ โดยมีการ cache เพื่อเพิ่มประสิทธิภาพ และทำการ revalidate ตามระยะเวลาที่กำหนด เพื่อให้ได้ข้อมูลใหม่ๆ อยู่เรื่อยๆ โดยไม่ต้องให้ผู้ใช้ refresh หน้าเว็บเอง
*/

const GitHubUsersPage = async () => {
  const users = await fetchGitHubUsers();
  console.log("dateeeee", Date.now());
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
            <th>Repos</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.avatar_url} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.login}</div>
                    <div className="text-sm opacity-50">{user.id}</div>
                  </div>
                </td>
                <td>
                  <Link href={user.html_url} className="btn btn-link">
                    View on GitHub
                  </Link>
                </td>
                <td>
                  <Link
                    href={`/githubusers/${user.login}`}
                    className="btn btn-link"
                  >
                    Go to Repos
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GitHubUsersPage;

/* 

*/
