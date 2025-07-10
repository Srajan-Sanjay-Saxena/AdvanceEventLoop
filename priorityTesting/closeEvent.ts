import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close" , () => console.log("Closing the read stream........"));
setImmediate(() => console.log("this is setImmediate"))
setTimeout(() => console.log("i am set timeout"))
Promise.resolve().then(() => console.log("Promise is running"));