import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

// convert function to class based component

class App extends React.Component {
  /*constructor(props) {
    super(props);
    // this is the only time we do direct assignment
    //to this.state
    this.state = { lat: null };
    this.state = { log: null };
    this.state = { errorMessage: "" };
  }*/
  // state refactoring babel 
  state={lat:null , errorMessage: ''}
  //!! Refactoring data loading to the lifecycle method 
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // geolocation
  /*window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState coords in lat and log 
        this.setState({ lat: position.coords.latitude });
        this.setState({ log: position.coords.longitude });
        
        // we did not
        // this.state.lat = position.coords.latitude
      },
      err => {
          this.setState({errorMessage: err.message})
      }
    );*/

    //render() 
    // helper method renderContent
  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.log) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      //return <div>Latitude : {this.state.lat}</div>;
      // season display lat is props 
      return <SeasonDisplay lat={this.state.lat}/>
    
    }
    return <Spinner message="pleses accept location request"/>;
    //   <div>
    //     Latitude:{this.state.lat}
    //     <br/>
    //     Longitude:{this.state.log}
    //     <br/>
    //     Error:{this.state.errorMessage}
    //   </div>
  }
  
  render(){
    return(
      <div className='border-red'>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
