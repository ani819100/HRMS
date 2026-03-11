from sqlalchemy.orm import Session
import models

def create_employee(db:Session, employee):

    print('Creating employee:', employee.employee_id)

    employee.employee_id = employee.employee_id.strip().upper()

    existing = db.query(models.Employee).filter(
        models.Employee.employee_id == employee.employee_id
    ).first()

    if existing:
        print('Employee already exists:')
        return None
    
    db_employee = models.Employee(**employee.dict())

    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)

    return db_employee

def get_employees(db:Session):
    print('Getting all employees')
    return db.query(models.Employee).all()

def delete_employee(db:Session, emp_id:str):

    emp = db.query(models.Employee).filter(
        models.Employee.employee_id == emp_id.strip().upper()
    ).first()

    if not emp:
        return None
    db.delete(emp)
    db.commit()
    print('Employee deleted')

    return True

def mark_attendance(db:Session, attendance):

    print("Marking Attendace")

    emp = db.query(models.Employee).filter(
        models.Employee.employee_id == attendance.employee_id.strip().upper()
    ).first()

    if not emp:
        return None
    
    exitsting = db.query(models.Attendance).filter(
        models.Attendance.employee_id == emp.id,
        models.Attendance.date == attendance.date
    ).first()

    if exitsting:
        print('Attendance already marked for this date')
        return "Marked"

    db_attendance = models.Attendance(
        employee_id=emp.id,
        date=attendance.date,
        status=attendance.status
    )

    db.add(db_attendance)
    db.commit()
    db.refresh(db_attendance)

    return db_attendance

def get_attendance(db:Session):

    print('Getting all attendance records')
    return db.query(models.Attendance).all()
    