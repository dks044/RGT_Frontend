import { NextResponse } from "next/server";
import { middleware } from "../src/app/middleware";
import axios from "../src/app/lib/axios";
import type { NextRequest } from "next/server";

jest.mock("../src/app/lib/axios");

describe("middleware", () => {
  const mockRequest = (url: string): NextRequest =>
    ({
      url,
      headers: new Headers(),
      method: "GET",
    } as NextRequest);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("사용자가 인증된 경우 요청을 허용해야 함", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: true });

    const req = mockRequest("/protected/some-route");
    const response = await middleware(req);

    expect(response).toBe(NextResponse.next());
  });

  it("사용자가 인증되지 않은 경우 홈으로 리디렉션되어야 함", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: false });

    const req = mockRequest("/protected/some-route");
    const response = await middleware(req);

    expect(response).toEqual(NextResponse.redirect(new URL("/", req.url)));
  });

  it("인증 중에 오류가 발생하면 홈으로 리디렉션되어야 함", async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    const req = mockRequest("/protected/some-route");
    const response = await middleware(req);

    expect(response).toEqual(NextResponse.redirect(new URL("/", req.url)));
  });
});
