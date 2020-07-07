//Function for displaying date and time

//The code listed below is shorterand includes the "th" or "rd" or "st" after the day of the month,
//but it does not want to give a running real time, which is provided by the longer code.
//$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

function renderTime() {
    //Date variables
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = currentDate.getDay();
    let daym = currentDate.getDate();
    const monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    const dayArray = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,");

    //Time variables
    const currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();   
        //Adding a zero if less than 10 to keep hours at two digits
        if(h < 10){
            h = "0" + h;
        }
        //Adding a zero if less than 10 to keep minutes at two digits
        if(m < 10){
            m = "0" + m;
        }
        //Adding a zero if less than 10 to keep seconds at two digits
        if(s < 10){
            s = "0" + s;
        }

        const myClock = document.getElementById("currentDay");
         
        myClock.innerText = dayArray[day] + " " + monthArray[month] + " " + daym + ", " + year + " | " + h + ":" + m + ":" + s; 

        setTimeout("renderTime()", 1000);
}
renderTime();

//Function to fill in description fields with time-sensitive colors
function changeColor() {
    //get current number of hours.
    let currentHour = moment().hour();

    //Loop over time blocks
    $(".time-block").each(function () {
        let blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

        //Applies time sensitive coloring
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
changeColor();


//Function for saving and retrieving data
$(".saveBtn").on("click", function () {
    //Get input values
    console.log(this);

    const input = $(this).siblings(".description").val();
    const time = $(this).parent().attr("id");

    //Saves input in local storage.
    localStorage.setItem(time, input);
})
//Loads any saved data from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
