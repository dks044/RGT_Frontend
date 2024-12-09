"use client";
import React from "react";
import useUserStore from "@/store/useUserStore";
import useLogout from "@/hooks/useLogout";

const Nav = () => {
  const { user } = useUserStore();
  const { logout } = useLogout();
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">RGT Book Store 관리자 모드</div>
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
  );
};

export default Nav;
