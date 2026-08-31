import { describe, it, expect, vi } from "vitest";
import { hello } from "./handler";

describe("hello handler", () => {
  it("should return status code 200", async () => {
    const result = await hello();
    expect(result.statusCode).toBe(200);
  });

  it("should return hello world in the body", async () => {
    const result = await hello();
    const body = JSON.parse(result.body);
    expect(body.message).toBe("hello world");
  });

});
