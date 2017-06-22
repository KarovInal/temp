import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class ShowPressure extends Component {
    render() {
        var list = this.props.data;
        var data = this.generateData(list);
        return (
            <div className="show-temp wrap-data">
                <div className="wrap-first">
                    <p className="first-title">Давление</p>
                </div>
                <div className="wrap-second">
                    <p className="second-title"></p>
                    <Line 
                        width={100} 
                        height={35} 
                        data={data} 
                        options={{
                            maintainAspectRatio: true
                        }}>
                    </Line>
                </div>
            </div>
        )
    }
    generateData(data) {
        if(data) {
            var labels = Array.prototype.map.bind(data, function(el){
                return el.dt_txt
            })()

            var data = Array.prototype.map.bind(data, function(el){
                return el.main.pressure
            })()
            
            var newData = {
                labels,
                datasets: [
                    {
                        label: 'Показатели давления',
                        data,
                        lineTension: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(47, 189, 54, 1)',
                        borderWidth: 3
                    }
                ]
            }
            return newData;
        } else {
            return {}
        }
    }
}

export default ShowPressure;