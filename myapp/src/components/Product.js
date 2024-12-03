import '../assets/CSS/layout.css';
import {flowers} from './FlowerDB';
import {useState} from "react";

export default function Product({setCart,setTotal,flower}){

    const [qty,setQty] = useState();

    const addToCart =()=>{

    }

    
    return(
        <div className="grid-item">

            <div class="card">
            <img  src={require("../assets/image/" + flower.img)}  />
                <div class="card-body">
                    <h5 class="card-title">{flower.name} Price:</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>setQty(e.target.value)}/>
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
        
    );
}