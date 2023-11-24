//Today is:Day

function getCurrentDayAndTime(){
    var currentDate = new Date();
    var dayNumber =  currentDate.getDay();
    var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayName = daysOfWeek[dayNumber];
    var currentTime = currentDate.toLocaleString();
    var results ="Today is: " +dayName+" and current Time: " +currentTime

    console.log(results)
}
return getCurrentDayAndTime();
