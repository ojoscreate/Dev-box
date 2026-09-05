import "./Generator.css";
// import { error } from "console";
// import { AsyncLocalStorage } from "async_hooks";
// import inquirer from "inquirer";
// import QRCode from "qr-image";
// import fs from "fs";

// function generatebtn() {
//       inquirer
//         .prompt([
//             {
//             type: "input",
//             name: "url",
//             message: "Generate QR code? ",
//             value: document.querySelector('.info').value,
//             },
//         ])
//         .then((answers) => {
//             // let input1 = 
//             const url = answers.value;
//             console.log(url);
            
//             const QRCode_Generator = QRCode.image(url, { type: "png" });
//             QRCode_Generator.pipe(fs.createWriteStream(`${url}.png`));

//             // var QRCode_String = QRCode.imageSync(url, { type: "png" });
//             fs.writeFileSync(`${url}.txt`, url);
//             console.log("QR code generated successfully!");
//         })
//         .catch((error) => {
//             if (error.isTtyError) {
//             console.log("Prompt couldn't be rendered in the current environment");
//             } else {
//             console.error("An error occurred:", error);
//             }
//         });
// }
function Generator() {
// let generatebtn = document.querySelector(".generateBtn");


   
    // let input = document.getElementsByTagName('input');
// let generatebtn = document.querySelector(".generateBtn");
// console.log(input, generatebtn)
// console.log(input.value);
// let downloadbtn = document.querySelector(".downloadBtn");
// function generatebtn () {
//     let inpValue = input.value;
//     console.log(inpValue);
    // let qr_svg = QRCode.image(inpValue, { type: 'png' });
    // qr_svg.pipe(fs.createWriteStream(inpValue + '.png'));
    // var svg_string = qr.imageSync(inpValue, { type: 'png' });
    // svg_string.pipe(fs.createWriteStream(inpValue + '.png'));
    // fs.writeFileSync(`${inpValue}.txt`,inpValue);
    // console.log("QR Generated Successfully...");
//     input.value= "";
// };
  
    
    return (
        <div className="generator">
            <h1>QR Generator</h1>
            <p>Enter text or URL to generate QR code</p>
            <input className="info" type="text" placeholder="Enter text or URL" />
            <button className="generateBtn" onClick={e => {e.preventDefault, generatebtn(e)}}>Generate QR Code</button>
            {/* <img src="" alt="" /> */}
            <button className="downloadBtn">Download QR Code</button>
        </div>
        
    )
}
 // let generatebtn = document.querySelector(".generateBtn");
    // function generatebtn() {
    //     console.log("workinng");
        
        
            // try {
                // //     import QRCode from "qr-image";
                // // import fs from "fs";
                // let input1 = document.querySelector('.info');
                // const url = input1.value;
                // console.log(url); 
                
            //     const QRCode_Generator = QRCode.image(url, { type: "png" });
            //     QRCode_Generator.pipe(fs.createWriteStream(`${url}.png`));

            //     var QRCode_String = QRCode.imageSync(url, { type: "png" });
            //     fs.writeFileSync(`${url}.txt`, url);
            //     console.log("QR code generated successfully!");
            // } catch (error) {
            //     if (error.isTtyError) {
            //     console.log("Prompt couldn't be rendered in the current environment");
            //     } else {
            //     console.error("An error occurred:", error);
                // }
        // }
        // };
    // };


// let input = document.querySelector('.generator input');
// let generatebtn = document.querySelector(".generateBtn");
// console.log(generatebtn)
// // console.log(input.value);
// let downloadbtn = document.querySelector(".downloadBtn");
// generatebtn.addEventListener("click", () => {
//     const inpValue = input.value;
//     console.log(input.value);
//      inpValue= "";
//     let qr_svg = QRCode.image(inpValue, { type: 'png' });
//     qr_svg.pipe(fs.createWriteStream(inpValue + '.png'));
//     var svg_string = qr.imageSync(inpValue, { type: 'png' });
//     svg_string.pipe(fs.createWriteStream(inpValue + '.png'));
//     fs.writeFileSync(`${inpValue}.txt`,inpValue);
//     console.log("QR Generated Successfully...");
    
// })

export default Generator