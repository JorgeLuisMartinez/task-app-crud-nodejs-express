import app from "./app.js";
import './db.js';
import { serverPort } from "./config.js";

app.listen(serverPort);
console.log("server listening on", serverPort);



