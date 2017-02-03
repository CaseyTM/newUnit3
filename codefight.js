
function recurringTask(firstDate, daysOfTheWeek, k , n) {
    var year = 2015;
    var resultsArray = [];
    var firstRecurrence = k*7;
    var monthsOfTheYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    function leapYear(year){
        return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)}

    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var week = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
    function whatDate(dayNumberOne){
        var dayOfWeekIndex = 0;
        for(var i = 1; i<31; i++){
            
            if (dayOfWeekIndex > 6){
                dayOfWeekIndex = 0;
            }
             if (week[dayOfWeekIndex] == dayNumberOne){
                 return i;  
             }
            dayOfWeekIndex ++;
        }        
    }    
    var first = whatDate("Wednesday");
    var second = whatDate("Wednesday");
    console.log("the first date: ", first);
    console.log("the second date: ", second);
    return 
}
