// import styles from "./button.module.css"

function Button() {
    /* 
    In styling, It can be done vi 3 methods, namelly
    - External styling(using the index.css to syle)
    - Module Method: which invoves creating a folder for the component and creating and impoting the style.module.css file on the style.jsx in the same folder
    - Inline Style : Where u create an object in the file and a calle the objests like this style = {objectName}
       */

    // Inline styling
    const style = {
        backgroundColor: 'rgb(0, 170, 255)',
        color: "aliceblue",
        padding:" 0.66rem 1.25rem",
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',

    }
    return(
        <div>
            {/*---- Uncomment for External ----*/}

            {/* <button className="btn">Click Me</button> */}

            {/*---- Uncomment for Module -----*/}

            {/* <button className= {styles.btn}> Click Me</button> */}

            {/* comment Inline stying */}
            <button style={style}>Click Me</button>

        </div>
    )
}
export default Button;