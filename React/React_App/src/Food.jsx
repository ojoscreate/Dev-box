function Food() {
    const foodItem1 = "Pizza";
    const foodItem2 = "Sushi";

    return (
        <ul>
            <li>app</li>
            <li>{foodItem1}</li>
            <li>{foodItem2.toUpperCase()}</li>
        </ul>
    );
}
export default Food