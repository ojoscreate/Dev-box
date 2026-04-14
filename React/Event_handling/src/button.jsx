function button() {

    const handleClick = (name)=> console.log(`${name} stop it Ouch`);
    // const handleclick2 = ()=> console.log("ALRIGHT");

    let count = 0;
    const clickHandler = (name) =>{
        if (count <3){
            count++;
        console.log(`${name}, You have clicked me ${count} times`);
            
        }else if (count = 5) {
            count = 0;
            console.log(`${name} stop clicking`);

        }
    }
    
    
    return(
        <>
            <button onClick={() => clickHandler("joe")}>Click Me ✅</button>
        </>
    )
}
export default button;