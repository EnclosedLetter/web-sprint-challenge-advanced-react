import React, { Component } from "react";
import axios from "axios";

//class PlantList extends React.Component {
export default class PlantList extends Component { //preferred
  // add state with a property called "plants" - initialize as an empty array
  constructor(){
    super();
    this.state={
    plants: []
    };
  }
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  componentDidMount(){ //this is where we will get our API data back 
    axios
      .get("http://localhost:3333/plants")
      .then(response => { //response is the data that's returned from our API call
      console.log(response.data.plantsData)
      //set the returned plants array to this.state.plants
      this.setState({ 
        plants: response.data.plantsData
       })
      })
      .catch(err => console.error(err));
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => ( //
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

// export default App;