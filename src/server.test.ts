import { expect, test } from "bun:test";
import { handleRequest } from "./server";

test("health endpoint reports ok", async () => {
  const response = handleRequest(new Request("http://localhost/health"));

  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({ status: "ok" });
});

test("home page shows the greeting", async () => {
  const response = handleRequest(new Request("http://localhost/"));

  expect(response.status).toBe(200);
  expect(await response.text()).toContain("Hello from the Bun lab!");
});

test("unknown routes return not found", async () => {
  const response = handleRequest(new Request("http://localhost/missing"));

  expect(response.status).toBe(404);
  expect(await response.json()).toEqual({ error: "not found" });
});
