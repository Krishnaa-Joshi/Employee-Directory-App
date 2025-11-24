import { useContext } from "react";
import { EmployeeContext } from "../Context/EmployeeContext";
import ProfilePic from "../assets/icons/Avatar.svg";

/*  
Employee List Items Component -
- display single employee item in the list
*/

function EmployeeListItem({ employee }) {
  const { setIsViewingProfile, setSelectedEmployee, setSearchTerm } =
    useContext(EmployeeContext);

  return (
    <>
      {/* For large devices */}
      <div
        className="grid-cols-4 p-4 mx-4 my-3 items-center rounded-lg bg-[#F9F8FF] cursor-pointer hidden lg:grid"
        onClick={() => {
          setSelectedEmployee(employee);
          setIsViewingProfile(true);
          setSearchTerm("");
        }}
      >
        {/* Employee Name and pf  */}
        <div className="flex items-center gap-4">
          <div className="p-1">
            <img
              src={employee.avatar || ProfilePic}
              alt={employee.name}
              className="rounded-full w-8 h-8 object-cover"
            />
          </div>
          <span className="noto-sans-regular font-semibold">
            {employee.name}
          </span>
        </div>

        {/* Employee ID */}
        <span className="noto-sans-regular font-semibold">
          {employee.empId || employee.id}
        </span>

        {/* Department */}
        <span className="noto-sans-regular font-semibold">
          {employee.department}
        </span>

        {/* Role */}
        <span className="noto-sans-regular font-semibold">{employee.role}</span>
      </div>

      {/* for small devices */}
      <div
        className="flex items-center justify-between w-[94%] sm:w-[95%] md:w-[96%] p-4 mx-4 my-3 rounded-lg bg-[#F9F8FF] cursor-pointer sm:flex-row lg:hidden"
        onClick={() => {
          setSelectedEmployee(employee);
          setIsViewingProfile(true);
          setSearchTerm("");
        }}
      >
        {/* Avatar, name and department */}
        <div className="flex items-center gap-4">
          <img
            src={employee.avatar || ProfilePic}
            alt={employee.name}
            className="rounded-full w-10 h-10 object-cover"
          />

          <div className="flex flex-col">
            <span className="noto-sans-regular font-semibold text-base">
              {employee.name}
            </span>
            <span className="noto-sans-regular text-sm text-[#878787]">
              {employee.department}
            </span>
          </div>
        </div>

        {/* Role */}
        <span className="noto-sans-regular font-semibold text-sm text-right sm:text-base">
          {employee.role}
        </span>
      </div>
    </>
  );
}

export default EmployeeListItem;
