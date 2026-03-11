from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import models, schemas, crud
from database import SessionLocal, engine, Base
from fastapi.middleware.cors import CORSMiddleware


print("Starting HRMS")

Base.metadata.create_all(bind=engine)

app = FastAPI() 

origins = [
    "http://localhost:3000",               
    "hrms-rosy-two.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/')
def home():
    return {"message": "Welcome to the HRMS API"}

@app.post('/employees')
def create_employee(employee:schemas.EmployeeCreate, db:Session = Depends(get_db)):
    
    emp = crud.create_employee(db, employee)

    if emp is None:
        raise HTTPException(status_code=400, detail="Employee with this ID already exists")
    return emp

@app.get('/employees')
def get_employees(db:Session = Depends(get_db)):
    return crud.get_employees(db)

@app.delete('/employees/{emp_id}')
def remove_employee(emp_id:str, db:Session = Depends(get_db)):
    emp = crud.delete_employee(db, emp_id)
    if emp is None:
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"message": "Employee deleted successfully"}

@app.post('/attendance')
def add_attendance(attendance:schemas.AttendanceCreate, db:Session = Depends(get_db)):
    att = crud.mark_attendance(db, attendance)
    if att is None:
        raise HTTPException(status_code=400, detail="Employee not found")
    
    if att == "Marked":
        raise HTTPException(status_code=400, detail="Attendance already marked for this date")
    return att

@app.get('/attendance')
def get_attendance(db:Session = Depends(get_db)):
    records =  crud.get_attendance(db)
    return [
        {
            "attendance_id": r.id,
            "date": r.date,
            "status": r.status,
            "employee_id": r.employee.employee_id,
            "full_name": r.employee.full_name
        }
        for r in records
    ]