import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  //   netstat -ano|findstr "LISTENING" (to check which port is being used on ur machine (windows))
});
