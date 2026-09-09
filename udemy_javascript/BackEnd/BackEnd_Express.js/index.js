import express from "express";
const app = express();
const PORT = 35279;

app.get("/", (req, res) => {
  res.send("Hello World josh is ha a jasg!");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  //   netstat -ano|findstr "LISTENING" (to check which port is being used on ur machine (windows))
});
