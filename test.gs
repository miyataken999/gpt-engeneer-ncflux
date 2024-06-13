/**
 * Test cases for the registration program.
 */
function testRegisterSheetToCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clearContents();
  
  var data = [
    ['Event 1', '2023-03-01 10:00:00', '2023-03-01 11:00:00'],
    ['Event 2', '2023-03-01 11:00:00', '2023-03-01 12:00:00']
  ];
  
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
  registerSheetToCalendar();
  
  var events = CalendarApp.getCalendarById('your_calendar_id').getEvents();
  Logger.log(events);
}

/**
 * Test case for the getRegisteredData function.
 */
function testGetRegisteredData() {
  var data = getRegisteredData();
  Logger.log(data);
}