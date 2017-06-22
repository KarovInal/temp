import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
    render() {
        var {lat, lng} = {...this.props}
        
        return (
            <GoogleMap
                defaultZoom={13}
                center={{ lat: lat, lng: lng }} 
                options={{ scrollwheel: false}}>
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map)