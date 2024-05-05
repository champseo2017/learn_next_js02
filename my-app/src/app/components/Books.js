"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "@/app/loading";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/api/books");
  const json = await res.json();
  return json;
};

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  console.log("loadingloading", loading);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <h1>Books</h1>
      {books.map((book) => (
        <div key={book.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={book.img} width="200" height="150" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.id}</h2>
              <p>{book.title}</p>
              <div className="card-actions justify-end">
                <Link href={book.link} className="btn btn-primary">
                  See in Amazon
                </Link>
                <button className="btn btn-error">Delete</button>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Books;

/* 
เราจะทดสอบ form ของเราเพื่อให้แน่ใจว่ามันทำงานถูกต้อง ตอนแรกเมื่อเรารันแอพ ดูเหมือนว่าการอัพเดท state ทุกครั้งจะทำให้เกิดการโหลดหน้าเซิร์ฟเวอร์ ซึ่งเป็นเพราะเราใส่ async ไว้ใน Books component
แต่ตอนนี้ Books component เป็น client component แล้ว เราจึงไม่จำเป็นต้องใช้ async อีกต่อไป และต้องเอาออก หลังจากนั้น form ของเราควรจะทำงานถูกต้อง เราสามารถลองพิมพ์ query ใน console เพื่อทดสอบได้

การกำหนด async ให้กับ component เป็นวิธีการบอก Next.js ว่า component นี้เป็น server component ที่สามารถโหลดข้อมูลแบบ asynchronous ได้

การโหลดข้อมูลแบบ Asynchronous: เมื่อเราใส่ async ไว้ เราสามารถใช้ await ภายใน component เพื่อรอการโหลดข้อมูลแบบ asynchronous เช่น การเรียก API หรือ query database โดยที่ component จะรอจนกว่าข้อมูลจะพร้อมก่อนที่จะ render
*/
