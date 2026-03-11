import React from "react";
import EmployeeList from "./components/EmployeeList";
import AttendanceList from "./components/AttendanceList";
function App() {
  return (
    <div>
      <h1>HR Management System</h1>
      <EmployeeList />
      <AttendanceList />
    </div>
  );
}

export default App;
