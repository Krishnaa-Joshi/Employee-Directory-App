import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import AddEmployee from "../components/AddEmployee";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import RemoveEmployeeWarning from "../components/RemoveEmployeeWarning";
import EmployeeCard from "../components/EmployeeCard";
import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";

/*
  Employee Page Component -
    - render all components
*/

function EmployeePage() {
  const { isViewingProfile, selectedEmployee} =
    useContext(EmployeeContext);

  return (
    <>
      <Navbar />
      <AddEmployee />
      <SearchBar />
      <EmployeeList />
      <EmployeeForm />
      <RemoveEmployeeWarning />
      {isViewingProfile && selectedEmployee && <EmployeeCard />}
    </>
  );
}

export default EmployeePage;
