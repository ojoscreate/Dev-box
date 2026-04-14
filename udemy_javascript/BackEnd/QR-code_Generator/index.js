import { error } from "console";
import inquirer from "inquirer";
import QRCode from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter the URL to generate QR code: ",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    const QRCode_Generator = QRCode.image(url, { type: "png" });
    QRCode_Generator.pipe(fs.createWriteStream(`${url}.png`));

    // var QRCode_String = QRCode.imageSync(url, { type: "png" });
    fs.writeFileSync(`${url}.txt`, url);
    console.log("QR code generated successfully!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("An error occurred:", error);
    }
  });
