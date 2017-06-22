import axios from 'axios';

export default function getData(city) {
    return function(dispath) {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=a2f4844a5bd308049fdd27f9c1219f3a&units=metric')
            .then(function (response) {
                dispath({type: 'GET_RESPONSE', data: response.data})
            })
            .catch(function (error) {
                dispath({type: 'ERROR_RESPONSE', error: "error"})
            });
    }
}

export function readFile(file) {
    return function(dispath) {
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(e) {
                var JsonObj = JSON.parse(e.target.result);
                console.log(JsonObj)
                dispath({
                    type: 'ADD_FILE',
                    data: JsonObj
                })
            }
        })(file)

        reader.readAsText(file);
    }
}