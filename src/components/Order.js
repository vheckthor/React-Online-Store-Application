import React from "react";
import { formatPrice } from "../helpers";
class Order extends React.Component {


  renderOrder = (key)=>{
    const fish = this.props.fishes[key];
    const count = this.props.ordered[key];
    const isAvailable = fish && fish.status === "available";
    // make sure that the fish is available (the fish objoct must be loaded before they can be referenced)
   const deleteOrder=()=>{
   this.props.deleteOrder(key)
 
   }
  
    if (!fish) return null;
  
    if (!isAvailable){
      console.log( this.props.fishes[key].name)
    return <li index={key} key={key}>Sorry {fish ? fish.name : "fish"} is no longer available <br></br><button onClick={()=>this.props.deleteOrder(key)}>Remove Order</button></li>
    
  }
  console.log( this.props.fishes[key].name)
   return <li index={key} key={key}>{count} Kg  {this.props.fishes[key].name} {formatPrice(count * fish.price)} <br></br><button onClick={deleteOrder}>Remove Order</button></li>
 
  }

  render() {
    const orderId = Object.keys(this.props.ordered);
    //console.log(orderId)
    const total = orderId.reduce((acc, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.ordered[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return acc + count * fish.price;
      }
      return acc;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul>
          <li>
            <ul className="order">
              {orderId.map(this.renderOrder)}
            </ul>
            <div className="total">
              Total:
              <strong> {formatPrice(total)}</strong>
            </div>
          </li>
        </ul>
        <br></br>
        
      </div>
    );
  }
}

export default Order;
