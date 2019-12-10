# To clone: git clone https://github.com/tttyung/final-project

# To run the code, run the command node server.js in the root directory

# Navigate to home page by going to localhost:3000

#api

Supports Search by course code, instructor, title, type, days available, seats available.

All courses: '/courses'

Course code: '/courses/code/:codeValue'

Title: '/courses/title/:titleValue'

Days: '/courses/days/:daysValue'

Instructor: '/courses/instructor/:instructorName';

Seats Available: '/courses/seats/:minimumNumberOfSeats'

Course type: '/courses/type/:courseType'

Supports multi search by clicking add another search criteria button on the home page and then selecting the search type and inserting a value

'/courses/multi'
