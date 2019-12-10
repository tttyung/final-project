const search = document.querySelector('.search');
console.log(search)
const courseBody = document.getElementById('course_body');
const add = document.querySelector('.add');
// Search states.json and filter it

search.addEventListener('click', function(e) {
  e.preventDefault();
  const search_value = document.getElementById('search').value;
  const select = document.getElementById('search_type');
  const search_type = select.options[select.selectedIndex].value;

  const search_value_2 = document.getElementById('search_2').value;
  const select_2 = document.getElementById('search_type_2');
  const search_type_2 = select.options[select_2.selectedIndex].value;

  if (search_value_2.length > 0) {
    console.log('here');
    searchCoursesMulti(search_value, search_type, search_value_2, search_type_2)
  } else {
    searchCourses(search_value, search_type)
  }





});

add.addEventListener('click', function(e) {
  document.getElementById('search_type_2').style.display = 'block';
  document.getElementById('search_2').style.display = 'block';
  document.getElementById('label').style.display = 'block';
})

async function searchCourses(search_value, search_type) {
  const res = await fetch('http://localhost:3000/courses/' + search_type + '/' + search_value);
  const courses = await res.json();
  courseBody.innerHTML = '';
  for (var i = 0; i < courses.length; i++) {

    const row = document.createElement('tr');
    const course_code = document.createElement('td');
    course_code.innerHTML = courses[i].course_code;
    const crn = document.createElement('td');
    crn.innerHTML = courses[i].crn;
    const title = document.createElement('td');
    title.innerHTML = courses[i].title
    const instructor = document.createElement('td');
    instructor.innerHTML = courses[i].instructor;
    const course_day = document.createElement('td');
    course_day.innerHTML = courses[i].course_day;
    const seats_available = document.createElement('td');
    seats_available.innerHTML = courses[i].seats_available;
    const course_type = document.createElement('td');
    course_type.innerHTML = courses[i].course_type;

    row.appendChild(course_code);
    row.appendChild(crn);
    row.appendChild(title);
    row.appendChild(instructor);
    row.appendChild(course_day);
    row.appendChild(seats_available);
    row.appendChild(course_type);


    courseBody.appendChild(row);


}
}

async function searchCoursesMulti(search_value, search_type, search_value_2, search_type_2) {

  const res = await fetch('http://localhost:3000/courses/multi?' + search_type + '=' + search_value + '&' + search_type_2 + '=' + search_value_2);
  const courses = await res.json();
  courseBody.innerHTML = '';
  for (var i = 0; i < courses.length; i++) {

    const row = document.createElement('tr');
    const course_code = document.createElement('td');
    course_code.innerHTML = courses[i].course_code;
    const crn = document.createElement('td');
    crn.innerHTML = courses[i].crn;
    const title = document.createElement('td');
    title.innerHTML = courses[i].title
    const instructor = document.createElement('td');
    instructor.innerHTML = courses[i].instructor;
    const course_day = document.createElement('td');
    course_day.innerHTML = courses[i].course_day;
    const seats_available = document.createElement('td');
    seats_available.innerHTML = courses[i].seats_available;
    const course_type = document.createElement('td');
    course_type.innerHTML = courses[i].course_type;

    row.appendChild(course_code);
    row.appendChild(crn);
    row.appendChild(title);
    row.appendChild(instructor);
    row.appendChild(course_day);
    row.appendChild(seats_available);
    row.appendChild(course_type);


    courseBody.appendChild(row);


}
}






window.addEventListener('load', async function()  {
  const res = await fetch('http://localhost:3000/courses');
  const courses = await res.json();
  console.log(courses);
  for (var i = 0; i < courses.length; i++) {

    const row = document.createElement('tr');
    const course_code = document.createElement('td');
    course_code.innerHTML = courses[i].course_code;
    const crn = document.createElement('td');
    crn.innerHTML = courses[i].crn;
    const title = document.createElement('td');
    title.innerHTML = courses[i].title
    const instructor = document.createElement('td');
    instructor.innerHTML = courses[i].instructor;
    const course_day = document.createElement('td');
    course_day.innerHTML = courses[i].course_day;
    const seats_available = document.createElement('td');
    seats_available.innerHTML = courses[i].seats_available;
    const course_type = document.createElement('td');
    course_type.innerHTML = courses[i].course_type;

    row.appendChild(course_code);
    row.appendChild(crn);
    row.appendChild(title);
    row.appendChild(instructor);
    row.appendChild(course_day);
    row.appendChild(seats_available);
    row.appendChild(course_type);


    courseBody.appendChild(row);


  }
})
