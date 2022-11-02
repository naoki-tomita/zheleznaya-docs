import { Handler } from "@netlify/functions";
import { readdir, stat, readFile } from "node:fs/promises";

async function readDirRecursively(root: string): Promise<string[]> {
  try {
    const files = await readdir(root);
    const nestedFiles = await Promise.all(
      files
        .map(it => `${root}/${it}`)
        .map(it => (stat(it).then(s => s.isFile() ? [it] : readDirRecursively(it))))
    );
    return nestedFiles.flat();
  } catch (e) {
    console.error(e)
    return []
  }
}


const handler: Handler = async (req) => {
  console.log(req.queryStringParameters?.path)
  const files = await readDirRecursively(req.queryStringParameters?.path ?? "./")

  return {
    statusCode: 200,
    body: JSON.stringify(files),
    headers: {
      "content-type": "application/json"
    }
  }
}

export { handler };