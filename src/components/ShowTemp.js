import React, { Component } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

class ShowTemp extends Component {
    render() {
        var MIDDLE_TEMP = 0;
        var list = this.props.data;
        var data = this.generateData(list);
        // var minMax = this.getMinMaxData(list);

        if(data.labels.length) {
            MIDDLE_TEMP = 0
            for(var i = 0; i < data.datasets[0].data.length; i++) {
                MIDDLE_TEMP += data.datasets[0].data[i]
            }
            MIDDLE_TEMP = (MIDDLE_TEMP / data.datasets[0].data.length).toFixed(0);
        }
        return (
            <div className="show-temp wrap-data">
                <div className="wrap-first">
                    <p className="first-title">Температура</p>
                </div>
                <div className="wrap-second">
                    <p className="second-title">Средння температура / Максимальная температура / Минимальная температура</p>
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
    getMinMaxData(data) {
        if(data){
            var label = ['Минимальная температура', 'Максимальная температура']
            var maxArray = Array.prototype.map.bind(data, function(el){
                return el.main.temp_max
            })()

            var minArray = Array.prototype.map.bind(data, function(el){
                return el.main.temp_min
            })()

            var max = Math.max.apply(Math, maxArray);
            var min = Math.max.apply(Math, minArray);

            return {
                labels: label,
                datasets: [
                    {
                        data: [max, min],
                        backgroundColor: ['#FF3D67', '#36A2EB']
                    }
                ]
            }
        } else {
            return {}
        }
    }
    generateData(data) {
        if(data) {
            var labels = Array.prototype.map.bind(data, function(el){
                return el.dt_txt
            })()

            var dataMiddle = Array.prototype.map.bind(data, function(el){
                return el.main.temp
            })()

            var dataMax = Array.prototype.map.bind(data, function(el){
                return el.main.temp_max
            })()

            var dataMin = Array.prototype.map.bind(data, function(el){
                return el.main.temp_min
            })()

            var newData = {
                labels,
                datasets: [
                    {
                        label: 'Средняя погода',
                        data: dataMiddle,
                        backgroundColor: [
                            'rgba(47, 189, 54, 0.2)'
                        ],
                        borderColor: [
                            'rgba(47, 189, 54, 1)'
                        ],
                        borderWidth: 1
                    }, {
                        label: 'Максимальня погода',
                        data: dataMax,
                        backgroundColor: [
                            'rgba(47, 189, 54, 0.2)'
                        ],
                        borderColor: [
                            'rgba(214, 41, 41, 1)'
                        ],
                        borderWidth: 1
                    }, {
                        label: 'Минимальная погода',
                        data: dataMin,
                        backgroundColor: [
                            'rgba(47, 189, 54, 0.2)'
                        ],
                        borderColor: [
                            'rgba(102, 131, 237, 1)'
                        ],
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

export default ShowTemp;