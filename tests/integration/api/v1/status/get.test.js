test("GET to /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const data = await response.json();
  expect(response.status).toEqual(200);
});
