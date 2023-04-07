$(function () {
  /*Declared variables for save button and assigned them to the id within the html.*/
  var saveButton = $('.saveBtn');
  console.log(saveButton);
  

  /*Event listener for saving users events in local storage upon user clicking the save button.*/
  saveButton.on('click', function(){
    var userEvents = $('.description');
    console.log(userEvents);
    userEvents.append(userEvents);
    localStorage.setItem(".description", userEvents);
  });

  /*Retrieve stored events from local storage*/
  renderEvents();
  
  function renderEvents(){
    var userEvents = localStorage.getItem(userEvents);
  }

  /*Displays the current date*/
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));
});