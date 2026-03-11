import React, {useState} from "react"; 
import API from "../api";

function EmployeeForm({onAddEmployee}) {

    const [employee, setEmployee] = useState({
        employee_id: "",
        full_name: "",
        email: "",
        department: ""
    });

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log("Submitting employee:", employee);

        try {
            await API.post("/employees", employee);
            alert("Employee added successfully!");

            if(onAddEmployee) onAddEmployee();
        } catch (error){
            console.error("Error adding employee:", error);
            alert("Failed to add employee. Please check the console for details.");
        }

    };

    return (

        <div>
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>

                <input
                name = "employee_id"
                placeholder="Employee ID"
                onChange={handleChange}
                />
                <input
                name = "full_name"
                placeholder="Full Name"
                onChange={handleChange}
                />
                <input
                name = "email"
                placeholder="Email"
                onChange={handleChange}
                />
                <input
                name = "department"
                placeholder="Department"
                onChange={handleChange}
                />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
}

export default EmployeeForm;