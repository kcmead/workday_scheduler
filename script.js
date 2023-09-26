$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      // Past
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      // Present
      $(this).addClass("present");
    } else {
      // Future
      $(this).addClass("future");
    }
  });

  loadEvents();

  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
    saveEvent(hour, eventText);
  });


  function loadEvents() {
    $(".time-block").each(function () {
      var hour = $(this).attr("id");
      var eventText = localStorage.getItem(hour);

      if (eventText) {
        $(this).children(".description").val(eventText);
      }
    });
  }


  function saveEvent(hour, eventText) {
    localStorage.setItem(hour, eventText);
  }
});
