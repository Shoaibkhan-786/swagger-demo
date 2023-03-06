const moment = require('moment');

// const now = moment().format()
// console.log(now)
// console.log(moment.utc().format())

// console.log(moment("12-25-1995", "MM-DD-YYYY").format())
let m = moment();

// console.log(m)
// console.log(moment)

// m = moment()

// console.log(m.minutes(4))
// console.log(m.hours());
// console.log(m.seconds());
// console.log(m.quarter(3))
// console.log(m.set('day',3))

// console.log(m.toString())
// console.log(m.toISOString())


// var friends =  [{name: 'Dan', birthday: '11.12.1977'}, {name: 'Mary', birthday: '11.12.1986'}, {name: 'Stephan', birthday: '11.01.1993'}]
// var friendsBirthDays = friends.map(function(friend){
//     return moment(friend.birthday, 'DD.MM.YYYY');
// });
// console.log(moment.min(friendsBirthDays));  // '11.01.1993'
// console.log(friendsBirthDays)

// console.log(m.format('[today is] dddd [and month is] MMMM [and current year is] yyyy '))

// console.log(moment([2023-0-0]).fromNow(true))

var s = "2013-01-01T00:00:00-13:00";
const c = moment(s).utcOffset(s);
console.log(c)

console.log(moment({hour: 5, minute: 10}));

/**
 * This is the controller for craeting post
 */


/* */

// 