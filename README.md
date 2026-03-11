# HR Management System (HRMS)

## Project Overview
HR Management System (HRMS) is a full-stack web application designed to manage employees and track their attendance efficiently. Users can add new employees with details like Employee ID, Full Name, Email, and Department, view employee lists, record and view attendance, and delete employee records. The frontend is built with React.js, while the backend uses FastAPI with SQLAlchemy. The frontend communicates with the backend via REST API calls. The system allows efficient employee management for small to medium organizations.

## Tech Stack Used
**Backend:**
- Python 3.x
- FastAPI
- SQLAlchemy (ORM for database interactions)
- SQLite (default database; can be replaced with PostgreSQL)
- CORS middleware (to allow frontend-backend communication)
- Hosted on Render.com

**Frontend:**
- React.js
- Axios (for HTTP requests)
- JavaScript, HTML, CSS
- Hosted on Vercel

## Steps to Run the Project Locally

**Backend:**
1. Clone the repository:
git clone https://github.com/ani819100/HRMS.git
cd HRMS/backend
2. Create and activate a virtual environment:

# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python -m venv venv
source venv/bin/activate

3. Install backend dependencies:
pip install -r requirements.txt

4.Start the backend server:
uvicorn main:app --reload

The backend will run at http://127.0.0.1:8000.

**Frontend:**
1.Navigate to the frontend folder:
cd ../frontend

2.Install frontend dependencies:
npm install

3.Configure the API base URL in src/api.js:
import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000", // Change to deployed backend URL for production
});

export default API;

4.Start the frontend:
npm start

The frontend will run at: http://localhost:3000

## Assumptions or Limitations
1.No authentication or user authorization is implemented; all endpoints are publicly accessible.

2.CORS is configured to allow requests from any origin (development and production).

3.Database is SQLite for local testing; production should use a hosted database.

4.Minimal validation is implemented; valid input is expected.

5.PWA features like manifest.json may show warnings if not fully configured.

## Live Application
 Frontend: https://hrms-nyqfyxu76-ani819100s-projects.vercel.app/

 Backend: https://hrms-alik.onrender.com
