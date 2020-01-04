import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import {numberCounter} from "../helpers"
import sampleFishes from "../sample-fishes"
import Fishes from "./Fishes"
import base from "../base";


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount(){
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes `, {
      context: this,
      state: "fishes"
    });

    //to access the local storage stored data if it is available
      const localref = localStorage.getItem(this.props.match.params.storeId)
    if(localref){
            this.setState({
      order: JSON.parse(localref)
    })
    }

  }

  componentDidUpdate(){
    localStorage.setItem( this.props.match.params.storeId, JSON.stringify(this.state.order))
  }

  componentWillUnmount(){
    base.removeBinding(this.ref)
  }


   
  addFIsh = (fish) => {
    const date =numberCounter();

    //copy the current state (whic is empty)
    const fishes = { ...this.state.fishes };
    //create a fishes object from the passed in object of fish from add fish
    fishes[`fish${date}`] = fish;
    // set new object to state
    this.setState({
      fishes:fishes
    })
  };


  updateFishes=(key, updatedFishes)=>{
    ///copy the current status
    const fishes = {...this.state.fishes};
    // update the current fish value
    fishes[key] = updatedFishes
    // set the current state to the updated fish value
    this.setState({
      fishes:fishes
    });
  }
  deleteFishes=(key)=>{
    ///copy the current status
    const fishes = {...this.state.fishes};
    // update the current fish value
    fishes[key] = null
    // set the current state to the updated fish value
    this.setState({
      fishes:fishes
    });
  }

  loadSampleFishes=()=>{
    this.setState({
      fishes:sampleFishes
    })
  }

  addToOrder = (key)=>{
    //copy present state
    const order = {...this.state.order}
    //if state already exist update else create a new one
    order[key] =  order[key] +1  || 1;
    //call set state to update state
    this.setState({
      order:order
    })
  }

  deleteOrder=(key)=>{
    // const localref = localStorage.getItem(this.props.match.params.storeId)
    // if(localref){
             const order = {...this.state.order}
 // we delete the order from state and then set the new state without the deleted item
             delete order[key]
      
             this.setState({
       order: order
     })
    // }
  }



  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header scan="Fresh SeaFood Online Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key=> <Fishes key={key} index={key}  addToOrder={this.addToOrder} fishDetails = {this.state.fishes[key]} />)} 
          </ul>
        </div>
        <Order ordered = {this.state.order}  fishes={this.state.fishes} deleteOrder={this.deleteOrder}/>
        <Inventory 
        addFish={this.addFIsh} 
        loadSampleFishes={this.loadSampleFishes}
        fish = {this.state.fishes}
        updateFishes = {this.updateFishes}
        deleteFishes={this.deleteFishes}
        />
      </div>
    );
  }
}

export default App;
