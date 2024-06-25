# TaskManager Project

## Overview

Welcome to the TaskManager Project! This project is designed to help you manage your tasks efficiently by providing a user-friendly interface to create, list, and schedule tasks. Built with a robust backend using Spring Boot and a responsive frontend using React, TaskManager aims to simplify task management, making it easier to stay organized and productive.

## Features

### Task Management
- **Create Tasks**: Easily create new tasks with details such as title, description, category, priority, and completion status.
- **List Tasks**: View all your tasks in a well-organized list, making it easy to see what needs to be done at a glance.
- **Update Tasks**: Modify existing tasks to keep your task list up-to-date with your changing priorities.
- **Delete Tasks**: Remove tasks that are no longer needed to keep your task list clean and focused.

### Scheduling
- **Schedule Tasks**: Plan your tasks by setting specific dates and times for when they need to be completed, helping you manage your time effectively.
- **Reminders**: Get notified about upcoming tasks to ensure you never miss a deadline.

## Running the Project

### Prerequisites

- **Java 17**: Ensure you have Java 17 installed on your system.
- **Maven**: Ensure you have Maven installed for managing dependencies and building the project.
- **Node.js & npm**: Required for running the React frontend.

### Backend Setup

1. **Navigate to the Backend Directory**:
   ```sh
   cd taskmanager-backend
2. **Build the Project**
   ```sh
   ./mvnw clean install
3. **Run the Application**
   ```sh
   ./mvnw spring-boot:run

**The backend will start on http://localhost:8080.**

### Frontend Setup
1. **Navigate to the Backend Directory**:
   ```sh
   cd taskmanager-frontend
2. **Install Dependencies**:
   ```sh
   npm install
3. **Run the Application**:
   ```sh
   npm start

The frontend will start on http://localhost:3000.

## Accessing the Application

Open your browser and go to http://localhost:3000 to start using the TaskManager application. You will be able to create, list, update, and delete tasks, as well as schedule tasks for future dates.

## Unique Points
**Integrated Task and Schedule Management**: Unlike many task management tools, TaskManager integrates both task and schedule management in a seamless interface.
**Modern Technology Stack**: Built with Spring Boot and React, TaskManager leverages modern technologies to ensure high performance, scalability, and a smooth user experience.
**User-Friendly Interface**: The application provides an intuitive and clean interface, making task management a breeze even for non-technical users.

## How to Use

**Creating a Task**
Navigate to the "Create Task" section.
Fill in the details: Title, Description, Category, Priority, and Completion Status.
Click on "Save" to add the task to your list.

**Listing Tasks**
Navigate to the "Task List" section.
View all your tasks in a neatly organized list.
Use filters to sort tasks by category, priority, or completion status.

**Scheduling Tasks**
Navigate to the "Schedule Task" section.
Select a task and set the date and time for when it should be completed.
Click "Save" to schedule the task and receive reminders.

**Updating and Deleting Tasks**:
In the "Task List" section, click on a task to update its details.
Modify the information as needed and click "Save."
To delete a task, simply click the "Delete" button next to the task.

## Conclusion

TaskManager is your go-to solution for efficient task and schedule management. Its integrated approach, modern technology stack, and user-friendly interface set it apart from other task management tools. By using TaskManager, you can ensure that you stay organized, meet your deadlines, and manage your tasks effectively.

Enjoy managing your tasks with TaskManager!

   
