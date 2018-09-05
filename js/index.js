// some config
const myCollectionDay = 3; // 3 equals Wednesday
// const houseType = house;
// const houseZone = week1;
// config ends
// DO NOT EDIT after this



// UTILS
// filter
let filterMonth = function(data) {

  // find what month is today
  var DateTime = luxon.DateTime;
  const dt = DateTime.local();

  if (data.weeknumber === dt.weekNumber) {
    return true
  }
  return false
}

// filterMonth(collectionCalendar);

// WHAT PART OF WEEK IS? =============================
// exports the following strings:
// true = it's collection day
// false = it's past the collection day
let isCollectionDay = function() {

  var DateTime = luxon.DateTime;
  const dt = DateTime.local();

  if (myCollectionDay === dt.weekday) {
    return true;
  }
  return false;
}

// IS IT GREEN OR LANDFILL ===========================
let findCollectionType = function(data) {

  let week = data.filter(filterMonth);
  return week[0].type;
};

// DRAW SOMETHING ===================================
let drawCollectionType = function(type) {

  if (type == 'green') {
      document.querySelector('#green').classList.remove('hidden')
  }
  if (type == 'landfill') {
      document.querySelector('#landfill').classList.remove('hidden')
  }
}
//
//
//
// MAKE IT WORK =====================================

function initiate() {
  const isCollection = isCollectionDay();
  const type = findCollectionType(collectionCalendar);
  drawCollectionType(type);
}
