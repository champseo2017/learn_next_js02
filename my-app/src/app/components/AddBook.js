// AddBook.jsx
"use client";
import { useState } from "react";
import useMsgPack from "@/app/hooks/useMsgPack";

const AddBook = ({ refreshBooks }) => {
  const { encodeMsgPack, decodeMsgPack } = useMsgPack();
  const [modalOpen, setModalOpen] = useState(false);

  // ประกาศตัวแปร state 'newBookTitle' เพื่อเก็บค่าจาก input field
  const [newBookTitle, setNewBookTitle] = useState("");

  // ฟังก์ชันจัดการ form submission
  const handleSubmitNewBook = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/books/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-msgpack",
      },
      body: encodeMsgPack({
        title: newBookTitle,
        link: "https://www.amazon.com/dp/B0979MGJ5J",
        img: "https://via.placeholder.com/600/92c952",
      }),
    });

    if (res.ok) {
      setNewBookTitle("");
      setModalOpen(false);
      // เรียกเมธอด refreshBooks เมื่อเพิ่มหนังสือสำเร็จ
      refreshBooks();
    }
  };

  return (
    <div>
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add Book
      </button>

      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        {/* เพิ่ม onSubmit event ให้กับ form เพื่อเรียกใช้ฟังก์ชัน handleSubmitNewBook เมื่อส่งฟอร์ม */}
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmitNewBook}
        >
          <button
            onClick={() => setModalOpen(false)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Add New Book</h3>

          {/* เพิ่ม value และ onChange ให้กับ input field เพื่ออัปเดตค่า newBookTitle เมื่อผู้ใช้พิมพ์ข้อมูล */}
          <input
            type="text"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
            placeholder="Enter New Book Title"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default AddBook;
