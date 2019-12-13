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
    return (
        <AppContainer>
          <PlaceType
            selectedPlace={type => {
              this.setState({ selectedPlace: type });
            }}
          />
          <Map
            centerAroundCurrentLocation
            google={this.props.google}
            selectedPlace={this.state.selectedPlace}
            setLocations={list => this.setState({ list })}
          />
          <List list={this.state.list} />
        </AppContainer>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCdWkEeqRMNnTrlSmKnCo1WFY7xo6-nKw8"

})(App);
