import Profile from "./assets/drunk2.jpg"

function Card() {
    return(
        <div className="card">
            <img src= {Profile} alt="Profile picture" className="card-img" />
            <h1 className="card-title">Ojob</h1>
            <p  className="card-description">I am a great programmer with a passion for creating innovative solutions.</p>
        </div>
    )
}
export default Card