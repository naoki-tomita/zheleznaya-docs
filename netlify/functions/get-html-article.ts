import { Handler } from "@netlify/functions";
import { readdir, stat, readFile } from "node:fs/promises";

async function readDirRecursively(root: string): Promise<string[]> {
  const files = await readdir(root);
  const nestedFiles = await Promise.all(
    files
      .map(it => `${root}/${it}`)
      .map(it => (stat(it).then(s => s.isFile() ? [it] : readDirRecursively(it))))
  );
  return nestedFiles.flat();
}


const handler: Handler = async () => {
  const files = await readDirRecursively("./")

  return {
    statusCode: 200,
    body: JSON.stringify(await Promise.all(files.map(file => readFile(file).then(data => ({ file, data }))))),
    headers: {
      "content-type": "application/json"
    }
  }
}

export { handler };