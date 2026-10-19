const port = Number(process.env.PORT ?? 3000);
const greeting = process.env.APP_GREETING ?? "Hello from the Bun lab!";

export function handleRequest(request: Request): Response {
  const path = new URL(request.url).pathname;

  if (path === "/health") {
    return Response.json({ status: "ok" });
  }

  if (path === "/") {
    return new Response(`<html><body><h1>${greeting}</h1></body></html>`, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return Response.json({ error: "not found" }, { status: 404 });
}

if (import.meta.main) {
  Bun.serve({ port, fetch: handleRequest });
  console.log(`Listening on http://localhost:${port}`);
}
