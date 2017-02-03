
function recurringTask(firstDate, daysOfTheWeek, k , n) {
    var year = 2015;
    var resultsArray = [];
    var firstRecurrence = k*7;


    function leapYear(year){
        return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)}

    var months = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30];
    for(var j = 0; j < months.length; j++){
      for(var i = 0; i <= months[j]; i++){
        if((i == 0) || (i % 7 == 0)){
            console.log("Thursday" +i);
        }else if((i == 1) || (i % 7 == 1)){
          console.log("It's a Friday" +i);
        }else if((i == 2) || (i % 7 == 2)){
          console.log("It's a Saturday" +i);
        }else if((i == 3) || (i % 7 == 3)){
          console.log("It's a Sunday" +i);
        }else if((i == 4) || (i % 7 == 4)){
          console.log("It's a Monday" +i);
        }else if((i == 5) || (i % 7 == 5)){
          console.log("It's a Tuesday" +i);
        }else if((i == 6) || (i % 7 == 6)){
          console.log("It's a Wednesday" +i);
        }else{
          console.log("something's friggin wrong");
        }
            console.log(i)
            console.log(j+i)
      }       
            
     
        console.log(j)
    }  
}
