import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import SigninPage from "../Auth/Sign-in/SigninPage";
import DashBoard from "../Dashboard/DashBoard";
import Header from "../components/custom/Header";
import ResumeEdit from "../Edit/ResumeEdit";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Header></Header>}>
          <Route path="/" element={<Home></Home>}>
            {" "}
          </Route>
          <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
          <Route
            path="/dashboard/edit/:mytitle/:docid"
            element={<ResumeEdit></ResumeEdit>}
          ></Route>
        </Route>

        <Route path="/auth/sign-in" element={<SigninPage></SigninPage>}></Route>
      </Routes>
    </>
  );
}
