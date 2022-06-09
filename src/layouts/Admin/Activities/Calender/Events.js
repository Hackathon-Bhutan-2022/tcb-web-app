const events = [
  { index: 0, title: "Training", start: getDate("YEAR-MONTH-01") },
  {
    index: 0,
    title: "Cleaning campaign",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10")
  },
  {
    index: 1,
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00")
  },
  {
    index: 2,
    groupId: "999",
    title: "Route Event",
    start: getDate("YEAR-MONTH-16T16:00:00+00:00")
  },
  {
    index: 0,
    title: "Conference",
    start: "YEAR-MONTH-17",
    end: getDate("YEAR-MONTH-19")
  },
  {
    index: 4,
    title: "Meeting",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00")
  },
  { index: 3, title: "Tour conference", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  { title: "Her majesty Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  { title: "Agent Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  { title: "Annual Tour campaign", start: getDate("YEAR-MONTH-18T20:00:00+00:00") }
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
