# Course-Selling Backend
### A backend application for managing courses, where admins can create and manage courses, and users can view and purchase courses. This is a simplified version of an online learning platform like Udemy.

## Description
### This project is a backend application built using Node.js, Express.js, and MongoDB. The application allows:

- Admins to sign up and create courses.
- Users to sign up, view available courses, and purchase courses.
- In this implementation, authentication is done by sending the username and password in the headers for every request instead of using JWT tokens.
- The app uses MongoDB to persist data.

_Note: This project does not have a sign-in route, and user authentication is done through request headers. The next assignment will implement a more secure authentication method (JWT)._

# Features
- Admins can create new courses and view all available courses.
- Users can sign up, view available courses, and purchase courses.
- Persistent data storage using MongoDB.
# Installation
1. Clone the repository:

```bash 
git clone https://github.com/your-username/course-selling-backend.git
```
2. Navigate to the project directory:
```bash
cd course-selling-backend
```
3. Install dependencies:
```bash
npm install express
npm install mongoose
```
4. Add the following variables:
```bash
PORT=2121
MONGODB_URI=your_mongodb_connection_string
```
5. Start the server:
```bash
node index.js
```
# Routes
### Admin Routes:
1. POST `/admin/signup`
- Description: Creates a new admin account.
2. POST `/admin/courses`
- Description: Creates a new course.
3. GET `/admin/courses`
- Description: Returns all the courses.

### User Routes:
1. POST `/users/signup`

- Description: Creates a new user account.
2. GET `/users/courses`
- Description: Lists all the available courses.

3. POST ``/users/courses/:courseId``

- Description: Purchases a course.

4. GET ``/users/purchasedCourses``

- Description: Lists all the courses purchased by the user.

