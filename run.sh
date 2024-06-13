#!/bin/bash

# Install dependencies
npm install --save @google/clasp

# Run the code
clasp login
clasp create --type sheets --title "Google Sheets to Google Calendar Registration Program"
clasp push -f Code.gs
clasp run registerSheetToCalendar
clasp run getRegisteredData
clasp run testRegisterSheetToCalendar
clasp run testGetRegisteredData
