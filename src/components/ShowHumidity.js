import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ShowHumidity extends Component {
    render() {
        var list = this.props.data;
        var data = this.generateData(list);
        return (
            <div className="show-temp wrap-data">
                <div className="wrap-first">
                    <p className="first-title">Влажность</p>
                </div>
                <div className="wrap-second">
                    <p className="second-title"></p>
                    <Bar 
                        width={100} 
                        height={35} 
                        data={data} 
                        options={{
                            maintainAspectRatio: true
                        }}>
                    </Bar>
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
                return el.main.humidity
            })()
            
            var newData = {
                labels,
                datasets: [
                    {
                        label: 'Показатели влажности',
                        data,
                        backgroundColor: 'rgba(47, 189, 54, 0.2)',
                        borderColor: 'rgba(47, 189, 54, 1)',
                        borderWidth: 1
                    }
                ]
            }
            return newData;
        } else {
            return {}
        }
    }
}

export default ShowHumidity;