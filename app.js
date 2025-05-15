const express = require("express");
const postRouter = require("./routers/posts");

const app = express();
const appPort = 3000;
const appUrl =`http://localhost:${appPort}`;

app.use(express.static("public"));
app.use(express.json());

app.use("/posts", postRouter);



app.listen(appPort, () => {
    console.log(`Ascolta il mio server ${appUrl}` ); 
});



