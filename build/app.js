var CHART = document.getElementById('lineChart');

var lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ['Июнь', 'Июль', 'Август', 'Сентябрь'],
        datasets: [
            {
                label: "Температура",
                fill: false,
                backgroundColor: 'red',
                lineTension: .5,
                borderColor: 'blue',
                data: [12, 16, 30, 5]
            }
        ]
    }
})