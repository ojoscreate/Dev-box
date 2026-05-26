function profilePic() {
    const imageUrl = "./src/assets/image1.jpeg";
    const handleClick = (e) => e.target.style.display = "none" ;
    

    return(
        <>
            <img src= {imageUrl} alt="sunset" onClick={(e) => handleClick (e)}/>
        </>
    )
}
export default profilePic;