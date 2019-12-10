'use strict';

var courses = require('../../courses.json');

exports.list_all_courses = function(req, res) {
  res.json(courses);
};

exports.find_by_course_code = function(req, res) {
  const search_value = req.params.value;
  const lower_case_search = search_value.toLowerCase();
  const matchedCourses = courses.filter(course => {
    if (course.course_code.toLowerCase().includes(lower_case_search)) {
      return true;
    }
    return false;
  })
  res.json(matchedCourses);

}

exports.find_by_title = function(req, res) {
  const search_value = req.params.value;
  const lower_case_search = search_value.toLowerCase();
  const matchedCourses = courses.filter(course => {
    if (course.title.toLowerCase().includes(lower_case_search)) {
      return true;
    }
    return false;
  })
  res.json(matchedCourses);

}

exports.find_by_instructor = function(req, res) {
  const search_value = req.params.value;
  const lower_case_search = search_value.toLowerCase();
  const matchedCourses = courses.filter(course => {
    if (course.instructor.toLowerCase().includes(lower_case_search)) {
      return true;
    }
    return false;
  })
  res.json(matchedCourses);

}

exports.find_by_day = function(req, res) {
  const search_value = req.params.value;
  const lower_case_search = search_value.toLowerCase();
  const matchedCourses = courses.filter(course => {
    if (course.course_day.toLowerCase().includes(lower_case_search)) {
      return true;
    }
    return false;
  })
  res.json(matchedCourses);

}

exports.find_by_seats_available = function(req, res) {
  const search_value = req.params.value;
  const seats = parseInt(search_value);
  console.log(typeof seats, seats);
  const matchedCourses = courses.filter(course => {
    if (course.seats_available >= seats) {
      return true;
    }
    return false;
  })
  res.json(matchedCourses);

}

exports.find_by_course_type = function(req, res) {
  const search_value = req.params.value;
  const lower_case_search = search_value.toLowerCase();
  const matchedCourses = courses.filter(course => {
    if (course.course_type.toLowerCase().includes(lower_case_search)) {
      return true;
    }
    return false;
  })
  res.json(matchedCourses);

}

exports.find_by_multi = function(req, res) {
  const queries = req.query;
  let matchedCourses = courses;
  for (var type in queries) {
    var lower_case_search = queries[type].toLowerCase();
    console.log(type, lower_case_search)

    switch(type) {
      case 'days':
      matchedCourses = matchedCourses.filter(course => {
        if (course.course_day.toLowerCase().includes(lower_case_search)) {
          return true;
        }
        return false;
      })
      break;
      case 'code':
      matchedCourses = matchedCourses.filter(course => {
        if (course.course_code.toLowerCase().includes(lower_case_search)) {
          return true;
        }
        return false;
      })
      console.log('course code', matchedCourses);
      break;
      case 'title':
      matchedCourses = matchedCourses.filter(course => {
        if (course.title.toLowerCase().includes(lower_case_search)) {
          return true;
        }
        return false;
      })
      console.log('course title', matchedCourses);
      break;
      case 'instructor':
      matchedCourses = matchedCourses.filter(course => {
        if (course.instructor.toLowerCase().includes(lower_case_search)) {
          return true;
        }
        return false;
      })
      console.log('instructor', matchedCourses);
      break;
      case 'seats':
      matchedCourses = matchedCourses.filter(course => {
       if (course.seats_available >= +lower_case_search) {
         return true;
       }
       return false;
     })
      break;
      case 'type':
      matchedCourses = matchedCourses.filter(course => {
        if (course.course_type.toLowerCase().includes(lower_case_search)) {
          return true;
        }
        return false;
      })
      break;
      default:
        break;

    }



  }

  if (matchedCourses.length === courses.length) {
    console.log('here')
    matchedCourses = [];
  }
  res.json(matchedCourses)



  // const lower_case_search = search_value.toLowerCase();
  // const matchedCourses = courses.filter(course => {
  //   if (course.course_type.toLowerCase().includes(lower_case_search)) {
  //     return true;
  //   }
  //   return false;
  // })
  // res.json(matchedCourses);

}





// exports.create_a_course = function(req, res) {
//   var new_course = new Courses(req.body);
//   new_course.save(function(err, course) {
//     if (err)
//       res.send(err);
//     res.json(course);
//   });
// };
