import React, { Component } from "react";
import { InfoWindow, Marker } from "google-maps-react";
import MapContainer from "../container/MapContainer";
import InfoComponent from "../components/InfoComponent";
import pin from "../assets/images/pin.png";

export class Map extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    list: []
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  setLocation = list => {
    this.setState({ list: list });
    this.props.setLocations(list);
  };
  render() {
    let { list, activeMarker, showingInfoWindow, selectedPlace } = this.state;
    let { centerAroundCurrentLocation, google } = this.props;
    return (
      <MapContainer
        centerAroundCurrentLocation={centerAroundCurrentLocation}
        google={google}
        setLocations={list => {
          this.setLocation(list);
        }}
        selectedPlace={selectedPlace}
      >
        {list && list.length > 0
          ? list.map((item, index) => {
              return (
                <Marker
                  key={index}
                  icon={pin}
                  position={{
                    lat: item.geometry.location.lat(),
                    lng: item.geometry.location.lng()
                  }}
                  onClick={this.onMarkerClick}
                  name={item.name}
                />
              );
            })
          : ""}
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={this.onClose}
        >
          <InfoComponent details={selectedPlace} list={list} />
        </InfoWindow>
      </MapContainer>
    );
  }
}

export default Map;
