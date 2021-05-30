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