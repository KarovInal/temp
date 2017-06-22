import React, {Component} from 'react'
import { connect } from 'react-redux'
import ShowTemp from '../components/ShowTemp'
import ShowHumidity from '../components/ShowHumidity'
import ShowPressure from '../components/ShowPressure'
import ShowSpeed from '../components/ShowSpeed'
import Map from '../components/Map'

class ShowData extends Component {
    render() {
        var city = this.props.data.city ? this.props.data.city.name : ''; 
        var list = this.props.data.list ? this.props.data.list : {};
        var lat = this.props.data.city ? this.props.data.city.coord.lat : 0;
        var lng = this.props.data.city ? this.props.data.city.coord.lon : 0;

        return (
            <div className="show-data-wrap">
                <p className="city">{city}</p>
                <ShowTemp data={list}></ShowTemp>
                <ShowHumidity data={list}></ShowHumidity>
                <ShowPressure data={list}></ShowPressure>
                <ShowSpeed data={list}></ShowSpeed>
                <Map 
                    containerElement={
                        <div style={{ height: `400px` }} />
                    }
                    mapElement={
                        <div style={{ height: `400px` }} />
                    }
                    lat={lat}
                    lng={lng}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(ShowData)