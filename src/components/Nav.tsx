"use client";
import React, { useState } from "react";
import useUserStore from "@/store/useUserStore";
import useLogout from "@/hooks/useLogout";
import AddBookModal from "./modals/AddBookModal";

const Nav = () => {
  const [isAddBookModalShow, setIsAddBookModalShow] = useState(false);
  const { user } = useUserStore();
  const { logout } = useLogout();

  return (
    <>
      <AddBookModal
        isOpen={isAddBookModalShow}
        onClose={() => setIsAddBookModalShow(false)}
      />
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex gap-4 items-center justify-center">
          <div className="text-lg font-bold">RGT Book Store 관리자 모드</div>
          <button
            onClick={() => setIsAddBookModalShow(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            책 추가
          </button>
        </div>
        <div className="flex items-center">
          {user && (
            <>
              <span className="mr-4">{user.userName}님</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
              >
                로그아웃
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
