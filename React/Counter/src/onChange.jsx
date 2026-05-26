import { useState } from "react";
function OnChange() {

    // USESTATES VALUES---------
    const [name, setName] = useState("");
    const [quantity, SetQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("Delivery")



    // FUNCTION HANDLER----------
     const handleChange =(e)=>{
        setName(e.target.value);
     }
     const handleQuantity =(e)=>{
        SetQuantity(e.target.value);
     }
     const extraInfo =(e) =>{
        setComment (e.target.value);
     }

     const handlePayment = (e) =>{
        setPayment(e.target.value);
     }

     const handleDelevery = (e)=>{
        setDelivery(e.target.value);
     }

    return(
        <div className="onChange"> 
            <input type="text" value={name} onChange={handleChange} placeholder="Enter Name" />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantity}  placeholder="Enter Quantity"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={extraInfo} placeholder="Enter additional instructions"></textarea>
            <p>Comments: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label htmlFor="Pickup">
                <input type="radio"value="Pick Up" checked={delivery === "Pick Up"} onChange={handleDelevery}/>
                Pick Up
            </label>
            <br />
            <label htmlFor="Delivery">
                <input type="radio" value="Delivery" checked = {delivery === "Delivery"} onChange={handleDelevery} />
                Delivery
            </label>
            <p>Shipping Method: {delivery}</p>
        </div>
    )
}
export default OnChange;