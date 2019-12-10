'use strict';
module.exports = function(app) {
  var courseList = require('../controllers/courseController');

  // todoList Routes
  app.route('/courses')
    .get(courseList.list_all_courses)

  app.route('/courses/code/:value')
    .get(courseList.find_by_course_code)

  app.route('/courses/title/:value')
    .get(courseList.find_by_title)

  app.route('/courses/instructor/:value')
    .get(courseList.find_by_instructor)

    app.route('/courses/days/:value')
      .get(courseList.find_by_day)

      app.route('/courses/seats/:value')
        .get(courseList.find_by_seats_available)

        app.route('/courses/type/:value')
          .get(courseList.find_by_course_type)

    app.route('/courses/multi')
      .get(courseList.find_by_multi)


};
