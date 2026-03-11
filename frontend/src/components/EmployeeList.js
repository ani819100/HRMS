import React, { useEffect, useState} from "react";
import API from "../api";
import EmployeeForm from "./EmployeeForm";
function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        console.log("Fetching employees...");

        const res = await API.get("/employees");
        console.log("Employees fetched:", res.data);
        setEmployees(res.data);
    };

    useEffect(() => {
        fetchEmployees();
    },[]);

    const deleteEmployee = async (employee_id) => {
        console.log("Deleting employee with ID:", employee_id);

        try {
            await API.delete(`/employees/${employee_id}`);
            alert("Employee deleted successfully!");
            fetchEmployees();
        } catch (error) {
            console.error("Error deleting employee:", error);
            alert("Failed to delete employee. Please check the console for details.");
        }
    };

     return (

    <div>
      <EmployeeForm onAddEmployee={fetchEmployees} />
      <h2>Employee List</h2>


      {employees.map((emp) => (

        <div key={emp.id}>

          {emp.employee_id}|{emp.full_name} | {emp.department}

          <button onClick={() => deleteEmployee(emp.employee_id)}>
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default EmployeeList;