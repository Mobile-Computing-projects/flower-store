import '../assets/CSS/layout.css';
import {useState} from "react";

export default function Product({setCart,setTotal,flower}){

    const [qty,setQty] = useState();

    const addToCart =()=>{
        if(qty>0){
            setCart((prev)=>
                [...prev,{name:flower.name,quantity:qty,price:flower.price}]
            )
            setTotal((total)=>
                total +qty*flower.price
            )
    
        }
        
    }


    

    
    return(
        <div className="grid-item">

            <div class="card">
            <img  src={require("../assets/image/" + flower.img)} alt={flower.name}  />
                <div class="card-body">
                    <h5 class="card-title">{flower.name} Price:{flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input min={0} type="number" id="quantity" name="quantity" onChange={(e)=>setQty(e.target.value)}/>
                    </div>
                    <button class="card-button" onClick={()=>addToCart()}>Add to Cart</button>
                </div>
            </div>
        </div>
        
    );
}