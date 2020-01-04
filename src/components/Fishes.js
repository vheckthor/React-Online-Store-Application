import React from "react"
import { formatPrice } from "../helpers"
//import fishes from "../sample-fishes"

class Fishes extends React.Component{
        handleClick=()=>{
            this.props.addToOrder(this.props.index);

        }  

    render(){ 
        const {image,name,price,desc,status} = this.props.fishDetails
        const isAvailable = status ==="available";
 
        return(
                <li className = "menu-fish">
                    <img src = {image} alt={name}/>
                     <h3  className="fish-name">{name}
                     <span className = "price">{formatPrice(price)}</span> 
                     </h3>
                    <p>{desc}</p>
                    <button disabled={!isAvailable} onClick={this.handleClick} >{isAvailable ? "Add to Order" : "Sold Out"}</button>
                    {/* <button  onClick={this.handleDelete} >Delete</button> */}
                </li>

        )
    }
}
export default Fishes;