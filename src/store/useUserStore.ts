import { User, userSchema } from "@/schemas/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        const parsedUser = userSchema.parse(user);
        set({ user: parsedUser });
      },
      clearUser: () => set({ user: null }),
    }),
    {
      name: "UserStorage",
    }
  )
);

export default useUserStore;
