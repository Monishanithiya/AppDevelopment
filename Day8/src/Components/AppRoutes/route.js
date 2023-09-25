import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord/dashboard";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
}
export default AppRoutes;
