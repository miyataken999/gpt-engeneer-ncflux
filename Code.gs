/**
 * Registers Google Sheets content to Google Calendar.
 */
function registerSheetToCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var calendarId = 'your_calendar_id';
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var startDateTime = row[1];
    var endDateTime = row[2];
    
    var event = calendar.createEvent(title, startDateTime, endDateTime);
  }
}

/**
 * Returns the registered data as JSON.
 */
function getRegisteredData() {
  var data = [];
  var calendarId = 'your_calendar_id';
  var calendar = CalendarApp.getCalendarById(calendarId);
  
  var events = calendar.getEvents();
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    data.push({
      title: event.getTitle(),
      start: event.getStartTime(),
      end: event.getEndTime()
    });
  }
  
  return JSON.stringify(data);
}