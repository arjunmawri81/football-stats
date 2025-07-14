Football Match Stats 
This is my assignment project for the Web Platform Intern role.
I have made a simple web app using React and Node.js (MERN stack). MongoDB is not used.

Technologies Used
Frontend: React.js

Backend: Node.js + Express.js

How to Run the Project
1. Backend Setup
Open terminal and go to the backend folder:
cd backend

Install backend dependencies:
npm install

Start the backend server:
npm start

Now the API will be running at:
http://localhost:8080/getMatchStats?matchId=1

2. Frontend Setup
Open terminal and go to the frontend folder:
cd frontend

Install frontend dependencies:
npm install

Start the React app:
npm start

The application will open in the browser at:
http://localhost:3000


API Response
When you visit:
http://localhost:8080/getMatchStats?matchId=1
You will get this JSON respons
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


Arjun Singh Mawri
Web Platform Internship Assignment




