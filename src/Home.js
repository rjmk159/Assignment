import React, { Component } from "react";
import AppContainer from "./container/AppContainer";
import Map from "./components/Map";
import PlaceType from "./components/PlaceType";
import List from "./container/ListContainer";

import { GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  state = {
    list: []
  };
  
  render() {
    let {selectedPlace,list}  = this.state;
    let {google} =  this.props;
    return (
        <AppContainer>
          <PlaceType
            selectedPlace={type => {
              this.setState({ selectedPlace: type });
            }}
          />
          <Map
            centerAroundCurrentLocation
            google={google}
            selectedPlace={selectedPlace}
            setLocations={list => this.setState({ list })}
          />
          <List list={list} />
        </AppContainer>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCdWkEeqRMNnTrlSmKnCo1WFY7xo6-nKw8"

})(App);
