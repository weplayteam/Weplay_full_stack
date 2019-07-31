import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import MapMarker from '../MapMarker';

class MapComponent extends Component {

    state = {
        selectedPlace: {
            properties: {}
        },
        activeMarker: {},
        showingInfoWindow: false,
    }

    onMarkerClicked = (props, marker, ev) => {
        console.log(props, marker, ev)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    render() {

        const {
            features
        } = this.props.collection;

        return (
            <div className={`h-screen`}>
                <Map google={this.props.google}
                    zoom={12}
                    initialCenter={{
                        lat: 29.761993,
                        lng: -95.366302
                    }}
                    mapTypeId={`terrain`}>
                    {/* containerStyle={{
                        width: "1000px",
                        height: "100%",
                        position: "relative",
                        float: "right"
                        // left:"-8%"
                    }}> */}

                    {
                        features.map(feature => {
                            return <Marker
                                key={feature.properties.FacilityName}
                                properties={feature.properties}
                                position={{
                                    lat: feature.geometry.coordinates[1],
                                    lng: feature.geometry.coordinates[0]
                                }}
                                onClick={this.onMarkerClicked} />
                        })
                    }
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <p>
                                <span className={`text-indigo-700 text-lg`}>{this.state.selectedPlace.properties.FacilityName}</span>
                            </p>
                            <br />
                            <p>
                                <b>{`Facility type: `}</b>
                                <span>{this.state.selectedPlace.properties.FacilityType}</span>
                            </p>
                            <p>
                                <b>{`Address: `}</b>
                                <span>{this.state.selectedPlace.properties.Address}</span>{`, `}
                                <span>{this.state.selectedPlace.properties.City}</span>{`, `}
                                <span>{this.state.selectedPlace.properties.State}</span>
                            </p>
                            <p>
                                <b>{`ZipCode: `}</b>
                                <span>{this.state.selectedPlace.properties.ZipCode}</span>
                            </p>
                            <br />

                            <p>
                                <a href={this.state.selectedPlace.properties.WebSite}>Visit our website!</a>
                            </p>
                        </div>
                    </InfoWindow>

                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD25uACj9DuRe_b1anOs__B12acAO9eZeY"
})(MapComponent)
