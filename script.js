const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f88e42c6cmsh460e74bd63d8c7cp198c58jsn684be3534e78',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather= (city)=>{

cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => { 
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML =  response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
      //  wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        
    
    
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click" ,(e)=>{
    e.preventDefault()
    getWeather(city.value)
})


const delhi = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f88e42c6cmsh460e74bd63d8c7cp198c58jsn684be3534e78',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', delhi)
	.then(response => response.json())
	.then(response => 
        {console.log(response)
    
    cloud_pct_d.innerHTML = response.cloud_pct
        feels_like_d.innerHTML =  response.feels_like
        humidity_d.innerHTML = response.humidity
        //humidity2.innerHTML = response.humidity
        max_temp_d.innerHTML = response.max_temp
        min_temp_d.innerHTML = response.min_temp
        sunrise_d.innerHTML = response.sunrise
        sunset_d.innerHTML = response.sunset
        temp_d.innerHTML = response.temp
      //  temp2.innerHTML = response.temp
        wind_degrees_d.innerHTML = response.wind_degrees
        wind_speed_d.innerHTML = response.wind_speed
       // wind_speed2.innerHTML = response.wind_speed

    
        })
	.catch(err => console.error(err));    

    const lucknow = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f88e42c6cmsh460e74bd63d8c7cp198c58jsn684be3534e78',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', lucknow)
        .then(response => response.json())
        .then(response => 
            {console.log(response)
        
        cloud_pct_l.innerHTML = response.cloud_pct
            feels_like_l.innerHTML =  response.feels_like
            humidity_l.innerHTML = response.humidity
            //humidity2.innerHTML = response.humidity
            max_temp_l.innerHTML = response.max_temp
            min_temp_l.innerHTML = response.min_temp
            sunrise_l.innerHTML = response.sunrise
            sunset_l.innerHTML = response.sunset
            temp_l.innerHTML = response.temp
          //  temp2.innerHTML = response.temp
           wind_degrees_l.innerHTML = response.wind_degrees
            wind_speed_l.innerHTML = response.wind_speed
           // wind_speed2.innerHTML = response.wind_speed
    
        
            })
        .catch(err => console.error(err)); 

        const meerut = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0f88e42c6cmsh460e74bd63d8c7cp198c58jsn684be3534e78',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Meerut', meerut)
            .then(response => response.json())
            .then(response => 
                {console.log(response)
            
            cloud_pct_m.innerHTML = response.cloud_pct
                feels_like_m.innerHTML =  response.feels_like
                humidity_m.innerHTML = response.humidity
                //humidity2.innerHTML = response.humidity
                max_temp_m.innerHTML = response.max_temp
                min_temp_m.innerHTML = response.min_temp
                sunrise_m.innerHTML = response.sunrise
                sunset_m.innerHTML = response.sunset
                temp_m.innerHTML = response.temp
              //  temp2.innerHTML = response.temp
                wind_degrees_m.innerHTML = response.wind_degrees
                wind_speed_m.innerHTML = response.wind_speed
               // wind_speed2.innerHTML = response.wind_speed
        
            
                })
            .catch(err => console.error(err)); 

            const kolkata = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0f88e42c6cmsh460e74bd63d8c7cp198c58jsn684be3534e78',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };
            
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', kolkata)
                .then(response => response.json())
                .then(response => 
                    {console.log(response)
                
                cloud_pct_k.innerHTML = response.cloud_pct
                    feels_like_k.innerHTML =  response.feels_like
                    humidity_k.innerHTML = response.humidity
                    //humidity2.innerHTML = response.humidity
                    max_temp_k.innerHTML = response.max_temp
                    min_temp_k.innerHTML = response.min_temp
                    sunrise_k.innerHTML = response.sunrise
                    sunset_k.innerHTML = response.sunset
                    temp_k.innerHTML = response.temp
                  //  temp2.innerHTML = response.temp
                    wind_degrees_k.innerHTML = response.wind_degrees
                    wind_speed_k.innerHTML = response.wind_speed
                   // wind_speed2.innerHTML = response.wind_speed
            
                
                    })
                .catch(err => console.error(err)); 



   
            