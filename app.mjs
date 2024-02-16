import {logger} from "./logger.mjs";
import express from "express";
import cors from "cors";
const app = express();
const url = "0.0.0.0";
const port = 8080;

app.use(cors({ origin: '*' }));
app.use(express.static("web"));
app.use("/",logger);

app.get("/",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"./web/index.html"));
});

app.use((req,res,next)=>{
    res.status(404).send("<h1>404 Not Found</h1>");
})

app.listen(port,url,()=>{
    console.log(`Listening to ${url}:${port}`);
});