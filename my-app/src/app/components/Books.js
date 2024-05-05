"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "@/app/loading";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/api/books");
  const json = await res.json();
  return json;
};

const Books = async () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks().then((books) => {
      setBooks(books);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
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
'use client'

- ในไฟล์ `app/components/Books.jsx` เราใช้ 'use client' เพื่อบอก Next.js ว่า Books component เป็น client component
- Client component คือ component ที่ render และรันที่ฝั่ง client (เบราว์เซอร์) ซึ่งต่างจาก server component ที่รันที่ฝั่ง server
- เราเลือกใช้ client component เพราะ Books component มีการใช้ state และ effect ผ่าน useState และ useEffect ซึ่งเป็น feature ที่ใช้ได้เฉพาะใน client component เท่านั้น
- การใช้ 'use client' ทำให้เราสามารถใช้ feature ของ React ที่รันที่ฝั่ง client ได้ เช่น state, effect, event handler เป็นต้น
- แต่การใช้ client component ก็มีข้อเสียคือ initial rendering จะช้ากว่า server component เพราะต้องรอให้ JavaScript load เสร็จก่อน
- ดังนั้นเราควรใช้ client component เฉพาะเมื่อจำเป็น เช่น ต้องการใช้ feature ของ React ที่รันที่ฝั่ง client หรือต้องการ interactivity ที่ซับซ้อน

การเลือกใช้ server component หรือ client component ขึ้นอยู่กับความต้องการของแต่ละส่วนในแอพ โดยเราควรใช้ server component ให้มากที่สุดเพื่อให้ initial rendering เร็วขึ้น และใช้ client component เฉพาะเมื่อจำเป็นจริงๆ
*/
