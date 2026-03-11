import React, {useState} from "react";
import API from "../api";

function AttendanceForm({onAddAttendance}) {
    const [attendance, setAttendance] = useState({
        employee_id: "",
        date: "",
        status: "Present"
    });

    const handleChange = (e) => {
        setAttendance({
            ...attendance,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting attendance:", attendance);
        try {
            const res = await API.post("/attendance", attendance);
            alert(res.data === "Marked" ? "Attendance already marked for this date!" : "Attendance marked successfully!");
            if(onAddAttendance) onAddAttendance();
        } catch (error) {
            console.error("Error marking attendance:", error);
            alert("Failed to mark attendance. Please check the console for details.");
        }
    };

    return (
        <div>
            <h2>Mark Attendance</h2>

            <form onSubmit={handleSubmit}>

                <input
                name = "employee_id"
                placeholder="Employee ID"
                onChange={handleChange}
                />
                <input
                name = "date"
                type="date"
                onChange={handleChange}
                />
                <select name="status" onChange={handleChange}>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
                <button type="submit">Mark Attendance</button>
            </form>
        </div>
    );
    
}

export default AttendanceForm;