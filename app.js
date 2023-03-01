const express = require("express");
const { writeFile } = require("fs").promises;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/kairow", (req, res) => {
  const query = req.query;
  res.send("Kairow");
});

app.post("/kairow", async (req, res) => {
  const songs = req.body.songs;

  try {
    await writeFile("./91_new_drop_songs.txt", songs);

    res.status(200).send("success");
  } catch (err) {
    console.error(err);
    res.status(500).send("there are server problems :(");
  }

  console.log(songs);
});

app.put("/kairow/:songID", (req, res) => {
  res.send(req.params.songID);
});
// app.delete("/kairow")

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
