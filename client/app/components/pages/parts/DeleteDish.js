import React from 'react'

class DeleteDish extends React.Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div>
        <h3>Delete Dish</h3>
        <input
          name="dish-name"
          type="text"
          className="form-control"
          onChange={this.props.onChangeDeleteDish}
        />
        <button onClick={this.props.onDeleteSubmit}>Delete</button>
        <h4>{this.props.deleteMsg}</h4>
      </div>
    )
  }
}

export default DeleteDish;
