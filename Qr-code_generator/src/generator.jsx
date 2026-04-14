import "./Generator.css";
// import inquirer from "inquirer";
// import QRCode from "qr-image";
// import fs from "fs";


function Generator() {
    return (
        <div className="generator">
            <h1>QR Generator</h1>
            <p>Enter text or URL to generate QR code</p>
            <input type="text" placeholder="Enter text or URL" />
            <button className="generateBtn">Generate QR Code</button>
            <img src="" alt="" />
            <button className="downloadBtn">Download QR Code</button>
        </div>
        
    )
}

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