# Football Match Stats - Assignment

This project is part of my Web Platform Internship assignment.  
It is a simple web app made using React for frontend and Node.js + Express for backend.  
I have not used MongoDB in this project.

## Tech Used

- Frontend: React.js  
- Backend: Node.js with Express.js  

## How to Run the Project

Make sure Node.js and npm are installed on your system.  


### 1. Clone the Project

First, clone the repo and go to the folder:

git clone https://github.com/arjunmawri81/football-stats.git  
cd football-stats

### 2. Backend Setup

Open terminal and go to the backend folder:

cd backend

Install required packages:

npm install

Then start the backend server:

npm start

After this, backend will start on:  
http://localhost:8080/getMatchStats?matchId=1

### 3. Frontend Setup

Open a new terminal and go to frontend folder:

cd frontend

Install frontend packages:

npm install

Now start the React app:

npm start

It will open in your browser at:  
http://localhost:3000

The frontend will show match stats by calling the backend API.

## API Details

When you open this in browser:  
http://localhost:8080/getMatchStats?matchId=1

You will get a JSON like this:

{
  "matchId": "1",
  "date": "03-05-2023",
  "stats": {
    "teamA": {
      "goals": "1",
      "possession": "50%",
      "passes": "500"
    },
    "teamB": {
      "goals": "2",
      "possession": "50%",
      "passes": "480"
    }
  }
}

## About Me

Arjun Singh Mawri  
Web Platform Intern Assignment  
GitHub: https://github.com/arjunmawri81

