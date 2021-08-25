let weatherData;

const $weatherFor = $('#weatherFor');
const $weather = $('#weather');
const $temp = $('#temp');
const $feels_like = $('#feelsLike');

const $input = $('input[type="text"]');

function handleGetData(event){
    event.preventDefault();
    console.log("Form Submitted")
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&appid=ae3a4765bf66840762fe0ddea8bb7dfb&units=imperial` 
    }).then(
        function(data){
         console.log(data); 
         weatherData = data;
         render(); 
         $input.val("") 
        },
        function(error){
         console.log('bad request', error);
        }
      );
}

function render(){
    $weatherFor.text(weatherData.name);
    $temp.text(weatherData.main.temp);
    $feels_like.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather[0].description);
}


$('form').on('submit', handleGetData)


