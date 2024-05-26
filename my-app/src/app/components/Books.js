"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingPage from "@/app/loading";
import AddBook from "@/app/components/AddBook";
import useMsgPack from "@/app/hooks/useMsgPack";

const getBooks = async () => {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();
  const res = await fetch("http://localhost:3000/api/books");
  const arrayBuffer = await res.arrayBuffer();
  const decodedData = decodeMsgPack(arrayBuffer);
  return decodedData;
};

const Books = () => {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fetchBooks = async () => {
    const resBooks = await getBooks();

    setBooks(resBooks);
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
    return () => {};
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/books/search?query=${query}`);
    const arrayBuffer = await res.arrayBuffer();
    const decodedBooks = decodeMsgPack(arrayBuffer);

    setBooks(decodedBooks);
    setLoading(false);
  };

  // ฟังก์ชันสำหรับลบหนังสือ
  const deleteBook = async (id) => {
    const { encodeMsgPack, decodeMsgPack } = useMsgPack();

    // เข้ารหัส id ด้วย MsgPack
    const encodedId = encodeMsgPack({ id });

    // ส่ง DELETE request ไปยัง API endpoint ของหนังสือตาม id ที่เข้ารหัสแล้ว
    const res = await fetch(`api/books/${encodeURIComponent(encodedId)}`, {
      method: "DELETE",
      body: encodedId,
    });

    if (res.ok) {
      // หลังจากลบเสร็จ เรียกฟังก์ชัน fetchBooks เพื่อดึงข้อมูลหนังสือล่าสุด
      fetchBooks();
    }
  };

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
      <AddBook refreshBooks={fetchBooks} />
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
                <button
                  onClick={() => deleteBook(book.id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
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

*/
