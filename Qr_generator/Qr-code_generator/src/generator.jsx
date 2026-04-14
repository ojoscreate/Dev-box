import "./Generator.css"


function Generator() {
    return (
        <div className="generator">
            <h1>QR Generator</h1>
            <p>Enter text or URL to generate QR code</p>
            <input type="text" placeholder="Enter text or URL" />
            <button>Generate QR Code</button>
            <img src="" alt="" />
            <button>Download QR Code</button>
        </div>
    )
}
export default Generator