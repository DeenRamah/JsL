function getCurrentDate(){
    var currentDate = new Date();

    //componenets
    var month = currentDate.getMonth() +1;//months is zero indexed
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();

    //format mm-dd-yyyy and mm/dd/yyyy

    var formattedDate1 = padNumber(month) + "-" + padNumber(day) + "-" + year;
    var formattedDate2 = padNumber(month) + "/" + padNumber(day) + "/" + year;


    //format dd-mm-yyyy and dd/mm/yyyy
    var formattedDate3 = padNumber(day) + "-" + padNumber(month) + "-" + year;
    var formattedDate4 = padNumber(day) + "/" + padNumber(month) + "/" + year;

    console.log("mm-dd-yyyy: "  + formattedDate1);
    console.log("mm/dd/yyyy: " + formattedDate2);
    console.log("dd-mm-yyyy: " + formattedDate3);
    console.log("dd/mm/yyyy: " + formattedDate4);

}

//helper function to pad single-digit numbers with a leading zero
function padNumber(num){
    return num < 10 ? "0" + num : num;
}

getCurrentDate();