let weather = require('weather-js')

let args = process.argv.slice(2)

const getCurrentTimeWeather = (locationNameOrPostalCode, callback) => {
    weather.find({search: locationNameOrPostalCode, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err)    
        else{
            if(result[0]){
                const { location, current } = result[0]
                let currentTimeWeather = `${location.name} - ${getLocationDateTime(location.timezone)} - ${current.skytext} - ${current.temperature}°F`
                return callback(currentTimeWeather) 
                
            }else{
                callback(`${locationNameOrPostalCode} - no data`)
            }     
        }
    })
}


const getLocationDateTime = timeZone => {
    let localTime = new Date()
    let timeZoneOffsetFromLocalTimeInMin = timeZone * 60 
                                            + localTime.getTimezoneOffset()
    //convert the offset to milliseconds, add to newTime, and make a new Date
    let newTime = new Date(localTime.getTime() + timeZoneOffsetFromLocalTimeInMin * 60 * 1000)
    return newTime.toLocaleString()  
}


args.forEach( async locationNameOrPostalCode => { 
    await getCurrentTimeWeather(locationNameOrPostalCode, function(response){
        console.log(response);
    })
 })

module.exports = { 
     getCurrentTimeWeather
};


