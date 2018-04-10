function isNum(arg) {
    var args = arg;

    if (args === '' || args === null || args.length === 0) {
        return false;
    }

    args = args.toString();

    for (var i = 0; i < args.length; i++) {
        if ((args.substring(i, i + 1) < '0' || args.substring(i, i + 1) > '9') && args.substring(i, i + 1) != '.') {
            return false;
        }
    }
    return true;
}



// THIS FUNCTION IS CHECKING THAT THE USER CAN ONLY PUT LESS 31 DAYS FOR THE DAY FIELD. 

function checkday(aa) {
    var val = aa.value;
    var valc = val.substring(0, 1);



    if (val.length > 0 && val.length < 3) {
        if (!isNum(val) || val === 0) {
            aa.value = '';
        } else if (val < 1 || val > 31) {
            aa.value = valc;
        }
    } else if (val.length > 2) {
        val = val.substring(0, 2);
        aa.value = val;


    }
}

function checkmon(aa) {
    var val = aa.value;
    var valc = val.substring(0, 1);



    if (val.length > 0 && val.length < 3) {
        if (!isNum(val) || val === 0) {
            aa.value = '';
        } else if (val < 1 || val > 12) {
            aa.value = valc;
        }
    } else if (val.length > 2) {
        val = val.substring(0, 2);
        aa.value = val;
    }



}



function checkyear(aa) {
    var val = aa.value;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var userday = parseInt(day.value);
    var usermonth = parseInt(month.value);
    var useryear = parseInt(year.value);


    // 	var valc = val.substring(0,(val.length-1));

    // 	if(val.length>0 && val.length < 4)
    // 	{
    // 		if(!isNum(val) || val == 0)
    // 		{
    // 			aa.value=valc;
    // 		}
    // 		else if(val < 1 || val>275759)
    // 		{
    // 			aa.value='';
    // 		}
    // 	}
    // 	else if(val.length>4)
    // 	{
    // 		aa.value=valc;
    // 	}

    val = parseInt(val);

    if (val > yyyy) {
        aa.value = '';
    }
  
    




}



function calculate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var result = document.getElementById("result");

    var userday = parseInt(day.value);
    var usermonth = parseInt(month.value);
    var useryear = parseInt(year.value);


    //-1 because it always starts at 0, storing your date of birth in the same format we got the current date
    var birthday = new Date(useryear, usermonth - 1, userday);

    //Milliseconds from the year you were born till today
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    //Years=total milliseonds lived/totalmilliseconds in one year
    var year_age = Math.floor(differenceInMilisecond / 31536000000);

    //Milliseconds I have lived after reaching year_age
    var day_age = differenceInMilisecond % 31536000000;

    //Converting those milliseconds to days
    day_age = Math.floor(day_age / 86400000);

    //Since 1 month is 30 days, calculating the number of months
    var month_age = Math.floor(day_age / 30);

    //Since the number of days cannot greater than 30, you need to get the remainder of the totaldays/30
    day_age = day_age % 30;


    if (day.value === "" || month.value === "" || year.value === "") {
        alert("Please fill in the text fields");

    } else if (isNaN(year_age, month_age, year_age)) {
        alert("invalid!");


    } 
  
    else if (dd > userday && mm > usermonth && yyyy > useryear) {
        result.innerHTML = "Enter your date of birth, month less than current month";
        result.style.color = "white";
    } 
  
     else if (dd === userday && mm === usermonth && yyyy === useryear) {
        result.innerHTML = "Happy Birthday, We wish you have a great day ";
        result.style.color = "white";
    } 
  

  
  
  else {
        result.innerHTML = "You are " + year_age + " years " + month_age + " months and " + day_age + " days old";
        result.style.color = "white";
        result.style.fontFamily = 'courier';

    }










}