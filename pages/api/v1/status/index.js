import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(process.env.POSTGRES_DATABASE);
  response.status(200).json({ status: "Muito boa ação" });
}

export default status;
