const express = require("express");
const postRouter = require("./routers/posts");
const errorHandlerMid = require("./middlewares/errorHandler");
const errorNotFound = require("./middlewares/notFound");

const app = express();
const appPort = 3000;
const appUrl =`http://localhost:${appPort}`;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json("Benvenuto nei miei Post");
})

app.use("/posts", postRouter);


app.use(errorNotFound);
app.use(errorHandlerMid);

app.listen(appPort, () => {
    console.log(`Ascolta il mio server ${appUrl}` ); 
});



