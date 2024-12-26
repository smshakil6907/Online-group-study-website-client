# Assignment Management System

## Introduction

Welcome to the Assignment Management System! This application allows users to create, view, and manage assignments easily. Users can filter assignments based on difficulty levels, search assignments by title, and perform CRUD (Create, Read, Update, Delete) operations. This README provides an overview of the application, installation instructions, and usage guidelines.

## Live Link

[Visit the Live Application](https://online-group-study-a0ce2.web.app)

## Features

- **Create Assignments**: Logged-in users can create new assignments with a title, description, marks, thumbnail image URL, difficulty level (easy, medium, hard), and due date.
- **View Assignments**: Users can view all assignments, with options to filter by difficulty level and search by title.
- **Update Assignments**: Users can update existing assignments if they are the creators of the assignments.
- **Delete Assignments**: Users can delete assignments they have created.
- **Filter and Search**: Assignments can be filtered by difficulty level and searched by title.
- **JWT-based private routes**: JWT-based private routes for secure access.

## Technologies Used

- Frontend: React, React Router, Tailwind CSS, React DatePicker
- Backend: Node.js, Express.js, MongoDB
- Authentication: Context API (for managing user authentication)

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/programming-hero-web-course2/b10a11-client-side-smshakil6907
   cd assignment-management-system
   ```
