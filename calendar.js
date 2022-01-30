
$(document).ready(function() {

  $(".btn").on("click", function() {
    var event = $(this).siblings(".description").val();
    event = event.replace(/\s/g, '');
    var time = $(this).parent().attr("id");
    console.log(time.toString(), event)
    localStorage.setItem(time.toString(), event);
  });

  $("#today").text(moment().format(" MMMM Do, dddd"));

  function update() {
  
    var currentHour = moment().hours();
   
    $(".time-block").each(function() {
      var hour = parseInt($(this).attr("id"));
  

      // check if we've moved past this time
      if (hour < currentHour) {
        $(this).addClass("past");
      } 
      else if (hour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  update();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(update, 10000);

  // load any saved data from localStorage
  for(i=9;i<=17;i++)
  {
    console.log("#"+i.toString()+ " .description")
    $("#"+i.toString()+ " .description").val(localStorage.getItem(i.toString()));

  }
  
 
  
});
