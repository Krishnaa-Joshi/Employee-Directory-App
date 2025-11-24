import EmployeePage from "./pages/EmployeePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
   <>
      <EmployeePage />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
