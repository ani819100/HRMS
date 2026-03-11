import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
function App() {
  return (
    <div>
      <h1>HR Management System</h1>
      {/* <EmployeeForm /> */}
      <EmployeeList />
      {/* <AttendanceForm /> */}
      <AttendanceList />
    </div>
  );
}

export default App;
