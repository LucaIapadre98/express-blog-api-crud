const express = require("express");
const postRouter = require("./routers/posts");
const {appPort, appUrl} = require("./database/db");
const app = express();


app.use(express.static("public"));
app.use("/posts",postRouter);


app.listen(appPort, () => {
    console.log(`Ascolta il mio server ${appUrl}` ); 
})

