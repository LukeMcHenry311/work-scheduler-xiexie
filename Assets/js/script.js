// show todays date, ('dddd, MMM Do YYYY') correpsonding to
// Two-digit-day, three-letter abbreviation of the month, four digit year //
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);
// listening for a "click" on the saveBtn function 
// text var is basically just saying GET the value of textarea from the siblings of ".description"
// time var is saying set the value of the parent to the attribute "id"
// .val is just basicallying saying GET the values of textarea, ( this could also be used for input select and more, and if it is called on an empty function it would be undefined )
// wrapped
$(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        // get nearby values of the description in jquery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    // referencing present, past, and future from style.css to differentiate between if the time was present, past, and future
    // timeTracker function to show if the time is present, past, or future 
    function timeTracker() {
        // get current number of hours
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            // if blocktime is less than timenow remove present, remove future, and add past
            if (blockTime < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            // else if blocktime is equal to timenow than remove future, remove past, and add present
            else if (blockTime === timeNow) {
                $(this).addClass("present")
                $(this).removeClass("future")
                $(this).removeClass("past")
            }
            // else (anything different) then remove present, remove past, and add future 
            else {
                $(this).addClass("future")
                $(this).removeClass("present")
                $(this).removeClass("past")
            }
        })
    }

    // get the item's from local storage 
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();

})