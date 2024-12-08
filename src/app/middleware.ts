import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "@/app/lib/axios";

export async function middleware(req: NextRequest) {
  try {
    // 현재 사용자가 인가된 사용자인지 검증
    const response = await axios.get("/api/authentication", {
      withCredentials: true,
    });

    // 응답이 true인 경우 요청을 계속 진행
    if (response.data) {
      return NextResponse.next();
    }
  } catch (error) {
    // 검증 실패 시 Home으로 리다이렉트
    console.log(error);
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.redirect(new URL("/", req.url));
}

// TODO:보호할 경로 설정
export const config = {
  matcher: ["/protected/**"],
};
