import React from "react";

class EditFishForm extends React.Component {
    handleChange=(event)=>{
        console.log(event.target.value)
        console.log(event.currentTarget.name)
        //listen to event and then update it in state
        //take a copy of fish
        const updateFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value,
            [event.currentTarget.price]: event.currentTarget.value,
            [event.currentTarget.status]: event.currentTarget.value,
            [event.currentTarget.desc]: event.currentTarget.value,
            [event.currentTarget.image]: event.currentTarget.value
        }
        this.props.updateFishes(this.props.index,updateFish)
    }

    handleDelete=()=>{
        this.props.deleteFishes(this.props.index)
    }

  render() {
    return (
      <div className="fish-edit">
          <input name="name" type="text"  placeholder="Name" onChange={this.handleChange} value={this.props.fish.name}/>
        <input name="price" type="text" placeholder="Price" onChange={this.handleChange} value={this.props.fish.price}/>
        <select name="status" type = "text" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc}/>
        <input name="image" type="text" placeholder="Image" onChange={this.handleChange} value={this.props.fish.image} />
        <button onClick={this.handleDelete}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
