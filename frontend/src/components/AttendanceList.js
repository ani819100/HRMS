import React, {useState, useEffect} from "react";
import API from "../api";
import AttendanceForm from "./AttendanceForm";

function AttendanceList() {
    const [attendance, setAttendance] = useState([]);

    const fetchAttendance = async () => {
        console.log("Fetching attendance...");
        const res = await API.get("/attendance");
        console.log("Attendance fetched:", res.data);
        setAttendance(res.data);
    };

    useEffect(() => {
        fetchAttendance();
    }, []);

    return (
        <div>
            <AttendanceForm onAddAttendance={fetchAttendance} />
            <h2>Attendance List</h2>
            <ul>
                {attendance.map((record) => (
                    <li key={record.attendance_id}>
                        {record.employee_id} | {record.full_name} | {record.date} | {record.status}
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default AttendanceList;