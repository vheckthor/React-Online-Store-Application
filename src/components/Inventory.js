import React, {Component} from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './Editfishform';

class Inventory extends Component {
 
 

  render() {
  // console.log(Object.keys(this.props.fish))
    return( 
    <div className="inventory">
      <h2>Inventory!!!</h2>
      {Object.keys(this.props.fish).map((key)=>{return <EditFishForm key={key} fish={this.props.fish[key]} index={key} updateFishes={this.props.updateFishes}  deleteFishes={this.props.deleteFishes}/>})}
      <AddFishForm addFish = {this.props.addFish}/>
      <button onClick = {this.props.loadSampleFishes}>Load Fishes</button>
      </div>
      )
  }
}

export default Inventory