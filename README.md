# User List App

## Overview

This full-stack application is designed to demonstrate a comprehensive implementation combining a FastAPI backend for data scraping and API development with a React frontend for user data presentation. The backend efficiently scrapes user data and exposes it through a REST API, while the frontend elegantly displays this data in a web application format.

## Features

### Backend (Python with FastAPI)

- **Data Scraping:** Scrape 1M fake user data from the Random User Generator API. Focuses on U.S. nationality and limits to 5,000 users per request.
- **Storage:** Utilizes RavenDB's free cloud version for data storage.
- **API Development:**
  - FastAPI Framework for robust API development.
  - RESTful API to interact with the database.
  - Endpoints for fetching paginated user data and individual user details.
- **Performance and Error Handling:**
  - Performance tracking for the data scraping process.
  - Comprehensive error handling for API and scraping errors.

### Frontend (React)

- **User List Page:**
  - Displays a paginated list of users, including Name, Email, and Age.
  - Allows sorting by age or name.
- **User Details Page:**
  - Detailed view for each user, accessible through the list.
  - Displays all available user information.
- **Interactive Features:**
  - Search functionality for filtering users by name or email.
  - Responsive design for diverse devices.

## Technical Specifications

- **Backend Language:** Python with FastAPI.
- **Frontend:** React.
- **Database:** RavenDB.
- **Documentation:** Includes setup instructions and technical overview.

## Setup and Installation

### Backend

1. Install Python and FastAPI.
2. Navigate to the backend directory.
3. Install dependencies: `pip install -r requirements.txt`.
4. Run the FastAPI server:
   ```
   uvicorn app.main:app --reload
   ```

### Frontend

1. Install Node.js and npm.
2. Navigate to the frontend directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the React application.
