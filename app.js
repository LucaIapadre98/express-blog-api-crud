const express = require("express");
const postsRouter = require("./routers/posts");

const app = express();
const appPort = 3000;
const appUrl =`http://localhost:${appPort}`;

app.use(express.static("public"));
app.use("/posts", postsRouter);


app.listen(appPort, () => {
    console.log(`Ascolta il mio server ${appUrl}` ); 
})



