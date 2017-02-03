


// var week = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];


	function recurringDays(day, k, monthLength) {
		var arr = [];
		var l = k*7;
		for (var i = day; i <= monthLength; i += l){
			arr.push(i);
		}
		return arr;
		// return [2, 16, 30];
	}
	