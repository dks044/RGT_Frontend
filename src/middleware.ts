// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import axios from "@/app/lib/axios";

// export async function middleware(req: NextRequest) {
//   const isHomePath = req.nextUrl.pathname === "/";

//   try {
//     const response = await axios.get("/api/auth/authentication", {
//       withCredentials: true,
//     });

//     if (response.data) {
//       // 인증된 사용자라면 /books로 리다이렉트
//       if (isHomePath) {
//         return NextResponse.redirect(new URL("/books", req.url));
//       }
//     } else {
//       // 인증되지 않은 경우
//       if (!isHomePath) {
//         return NextResponse.redirect(new URL("/", req.url));
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     // API 호출에 실패했다면 홈으로 리다이렉트 (인증 실패)
//     if (!isHomePath) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }

//   // 홈 경로에 있을 경우, 아무것도 하지 않음
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/books/:path*"],
// };