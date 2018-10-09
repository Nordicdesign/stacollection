"use strict";
// some config
const myCollectionDay = 3; // 3 equals Wednesday
// const houseType = house;
// const houseZone = week1;
// config ends
// DO NOT EDIT after this



// UTILS
// filter
let filterMonth = function(data) {

  // TODO check whether we should look at this week or the next one

  // find what month is today
  var DateTime = luxon.DateTime;
  const dt = DateTime.local();
  const whatWeek = dt.weekNumber + this;

  // console.log(data.weeknumber);
  // console.log('current week is ' + whatWeek);
  if (data.weeknumber == whatWeek) {
    // console.log('it is true ' + whatWeek);
    return true;
  }
  // console.log('false!');
  return false;
}

// filterMonth(collectionCalendar);

// WHAT PART OF WEEK IS? =============================
// exports the following strings:
// today = it's collection day
// current = it's this week's collection
// next = it's next week's collection
let isCollectionDay = function() {

  var DateTime = luxon.DateTime;
  const dt = DateTime.local();

  if (myCollectionDay === dt.weekday) {
    return "today";
  }
  else if (dt.weekday === 1 || dt.weekday === 2 ) {
    return "current"
  }
  return "next";
}



// IS IT GREEN OR LANDFILL ===========================
let findCollectionType = function(data, day) {
  let week;
  if (day === "today" || day === "current") {
    week = data.filter(filterMonth,0);
    // console.log(week);
    return week[0].type;
  }

  week = data.filter(filterMonth,1);
  // console.log(week);
  return week[0].type;

};



// DRAW SOMETHING ===================================
let drawCollectionType = function(type, day) {

  if (day === "today") {
    document.querySelector('h1').innerText = 'Hola, it is today';
  }
  if (type == 'green') {
      document.querySelector('#green').classList.remove('hidden')
  }
  else if (type == 'landfill') {
      document.querySelector('#landfill').classList.remove('hidden')
  }
}
//
//
//
// MAKE IT WORK =====================================

function initiate() {
  const isCollection = isCollectionDay();
  const type = findCollectionType(collectionCalendar, isCollection);
  drawCollectionType(type, isCollection);
}
