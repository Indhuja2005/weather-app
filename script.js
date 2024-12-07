const temperature=document.querySelector(".temp")
const locationField=document.querySelector(".location p")
const dateField=document.querySelector(".location span")
const weatherField=document.querySelector(".condition p")
const searchfield=document.querySelector(".search")
const form=document.querySelector("form")
form.addEventListener('submit',searchFormLocation)

let target="London"
const fetchResult = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=baf63ef27d3142eb8fe112511240412&q=${target}&aqi=no`;

    
        const res = await fetch(url);
        console.log("Raw Response:", res);

        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Parsed Data:", data);

        // Display the location data
        let locationName = data.location.name;
        console.log(locationName)
        let time=data.location.localtime;
        console.log(time)
        let temp=data.current.temp_c;
        console.log(temp)
        let condition=data.current.condition.text;
        console.log(condition)
       
        // console.log(`Name: ${location.name}`);
        // console.log(`Region: ${location.region}`);
        // console.log(`Country: ${location.country}`);
        // console.log(`Latitude: ${location.lat}`);
        // console.log(`Longitude: ${location.lon}`);
        // console.log(`Local Time: ${location.localtime}`);
        updateDetails(temp,locationName,time,condition)




   
};
function updateDetails(temp,locationName,time,condition){
    let splitDate=time.split(' ')[0]
    let splitTime=time.split(' ')[1]
    let currentDay=getDayName(new Date(splitDate).getDay())
    temperature.innerText=temp;
    locationField.innerText=locationName;
    dateField.innerText=`${splitDate} ${currentDay} ${splitTime}`;
    weatherField.innerText=condition;
    
}


function searchFormLocation(e){
    e.preventDefault()
    target=searchfield.value
    fetchResult(target)
    
}
fetchResult(target);


function getDayName(number){
    switch(number){
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'

    }
}
