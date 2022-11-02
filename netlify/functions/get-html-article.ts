import { Handler } from "@netlify/functions";
import { readdir } from "node:fs/promises";

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(await readdir("./")),
    headers: {
      "content-type": "application/json"
    }
  }
}

export { handler };