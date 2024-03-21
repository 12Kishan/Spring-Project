# Train Ticket Booking Application

This is a web application for booking train tickets built with Spring Boot for the backend, React.js for the frontend, and Tailwind CSS for styling.

## Features

### User
- Users can register and login.
- Users can search for trains and book tickets.
- Users can view their booked tickets.
- Users cannot cancel tickets once booked.

### Admin
- Admin can login.
- Admin can add new trains.
- Admin can remove trains.
- Admin can edit train details.
- Admin can view all bookings.

## Technologies Used

- **Spring Boot**: Java-based framework for the backend.
- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **MySQL**: Relational database management system.

## Database Setup

1. Install MySQL if not already installed. Refer to [MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) for instructions.

2. Create a new database named `fsd`.

3. Update the database configuration in the `application.properties` file located in the `backend/src/main/resources` directory:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fsd
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
