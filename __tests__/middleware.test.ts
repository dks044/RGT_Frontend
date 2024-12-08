import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import axios from "@/app/lib/axios";
import { middleware } from "../src/app/middleware";

jest.mock("@/app/lib/axios"); // axios 모킹

describe("Middleware", () => {
  it("should allow access for authenticated users", async () => {
    // Mocking axios.get to return a successful response
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: true });

    const req = new NextRequest(
      new Request("https://example.com/protected/some-path")
    );
    const response = await middleware(req);

    expect(response).toBeInstanceOf(NextResponse);
    expect(response.status).toBe(200); // 요청이 계속 진행되어야 함
  });

  it("should redirect for unauthenticated users", async () => {
    // Mocking axios.get to throw an error
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Unauthorized"));

    const req = new NextRequest(
      new Request("https://example.com/protected/some-path")
    );
    const response = await middleware(req);

    expect(response).toBeInstanceOf(NextResponse);
    expect(response.status).toBe(302); // 리다이렉트가 발생해야 함
    expect(response.headers.get("Location")).toBe("https://example.com/"); // 리다이렉트 위치 확인
  });
});
