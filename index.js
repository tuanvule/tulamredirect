const express = require("express");
const app = express();
const port = "https://tulamredirect.vercel.app/";

app.get("/redirect", (req, res) => {
    //   res.send('Hello World!')
    res.redirect("https://www.facebook.com/itclub.nhh");
});

app.get("/redirect/recruitment_form", (req, res) => {
    //   res.send('Hello World!')
    res.redirect("https://forms.gle/hDq1qbftfVmn1Smr6");
});

app.get("/redirect/seminar_form", (req, res) => {
    //   res.send('Hello World!')
    res.redirect("https://forms.gle/LyXwu5fHUh13WDJJA");
});

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
