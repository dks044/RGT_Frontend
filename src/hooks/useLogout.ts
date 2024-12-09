import { useCallback } from "react";
import axios from "@/lib/axios";
import useUserStore from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogout = () => {
  const { clearUser } = useUserStore();
  const router = useRouter();

  const logout = useCallback(async () => {
    try {
      const response = await axios.post("/api/auth/logout", {});

      if (response) {
        clearUser();
        toast("로그아웃 했습니다.");
        router.replace("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }, [clearUser, router]);

  return { logout };
};

export default useLogout;
