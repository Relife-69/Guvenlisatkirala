import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Wanted from "./Components/Pages/Wanted/Wanted";
import Contuct_us from "./Components/Pages/Contact_us/Contuct_us";
import Sell from "./Components/Pages/Sell/Sell";
import Story from "./Components/Pages/Story/Story";
import Project from "./Components/Pages/Project/Project";
import Blog from "./Components/Pages/Blog/Blog";
import Buy from "./Components/Pages/Buy/Buy";
import Rent from "./Components/Pages/Rent/Rent";
import SellAgreement from "./Components/Pages/Agreement/SellAgreement/SellAgreement";
import RentAgreement from "./Components/Pages/Agreement/RentAgreement/RentAgreement";
import SingleProject from "./Components/Pages/Single_project/SingleProject";
import SingleProperty from "./Components/Pages/Single_Property/SingleProperty";
import RentSingleProperty from "./Components/Pages/Single_Property/ForRent/RentSingleProperty";
import Signup from "./Components/Pages/Sign_up/Signup";
import LSign from "./Components/Pages/Lawyer_signup/LSign";
import Signin from "./Components/Pages/Sign_in/SignIn";
import Forget from "./Components/Pages/Forget/Forget";
import Email from "./Components/Pages/Verify/Email/Email";
import OTP from "./Components/Pages/Verify/OTP/OTP";
import Success from "./Components/Pages/Verify/Success/Success";
import Password from "./Components/Pages/Forget/ChangePassword/Password";
import DashHome from "./Dashboard/DashHome/DashHome";
import Active from "./Dashboard/DashMyadd/Active";
import InActive from "./Dashboard/DashMyadd/InActive";
import Expire from "./Dashboard/DashMyadd/Expire";
import Draft from "./Dashboard/DashMyadd/Draft";
import Delete from "./Dashboard/DashMyadd/Delete";
import DeleteAccount from "./Dashboard/DashMembership/DeleteAccount";
import Profile from "./Dashboard/DashMembership/Profile";
import ChangePassword from "./Dashboard/DashMembership/ChangePassword";
import Favorurite from "./Dashboard/DashFavourite/Favorurite";
import HairLawyer from "./Components/Pages/HairLawyer/HairLawyer";
import AuthorizedLawyer from "./Dashboard/DashAuthorizedLawyer/AuthorizedLawyer";
import ApprovedLawyer from "./Components/AdminDashboard/AdminLawyerApprove/ApprovedLawyer";
import AiModel from "./Components/Pages/AIModel/AiModel";
import Trust from "./Components/Pages/Trust/Trust";
import AdminAds from "./Components/AdminDashboard/AdminAds/AdminAds";
import AdminHome from "./Components/AdminDashboard/AdminHome/AdminHome";
import ActiveAds from "./LawyerDash/LawyerAds/ActiveAds";
import InactiveAds from "./LawyerDash/LawyerAds/InactiveAds";
import DeletedAds from "./LawyerDash/LawyerAds/DeletedAds";
import DraftAds from "./LawyerDash/LawyerAds/DraftAds";
import ExpireAds from "./LawyerDash/LawyerAds/ExpireAds";
import ApprovedLawyerAads from "./LawyerDash/LawyerAds/ApprovedLawyerAads";
import AllAdvertisement from "./LawyerDash/LawyerAds/AllAdvertisement";
import LawyersAgreementPager from "./LawyerDash/LawyerPapers/LawyersAgreementPager";
import LawyerChat from "./LawyerDash/LawyersChats/LawyerChat";
import LawyerProfile from "./LawyerDash/LawyersProfile/LawyerProfile";
import LawyersClients from "./LawyerDash/LawyerClients/LawyersClients";
import LawyerPassword from "./LawyerDash/LawyerPassword/LawyerPassword";
import All from "./Dashboard/DashMyadd/All";
import AdminChangePassword from "./Components/AdminDashboard/ChangePassword/ChangePassword";
import Contract1 from "./Components/Contract/Contract1";
import Contract2 from "./Components/Contract/Contract2";
import Contract3 from "./Components/Contract/Contract3";
import ApprovedLawyerList from "./Components/AdminDashboard/AdminLawyerApprove/ApprovedLawyerList";
import UserList from "./Components/AdminDashboard/Users/UserList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    const userRole = localStorage.getItem("user-role");

    if (token && userRole) {
      setIsLoggedIn(true);
      setRole(userRole);
    } else {
      setIsLoggedIn(false);
      setRole(null);
    }
  }, []);

  // const handleAlertClose = () => {
  //   alert("ilan yayınlamak için standart üye olarak oturum açın");
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/wanted" element={<Wanted />} />
        <Route path="/contuctus" element={<Contuct_us />} />
        <Route path="/story" element={<Story />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sellagreement" element={<SellAgreement />} />
        <Route path="/rentagreement" element={<RentAgreement />} />
        <Route path="/singleproject" element={<SingleProject />} />
        <Route path="/singleproperty/:id" element={<SingleProperty />} />
        <Route path="/rentsingleproperty" element={<RentSingleProperty />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lsign" element={<LSign />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/success" element={<Success />} />
        <Route path="/password" element={<Password />} />
        <Route path="/ai" element={<AiModel />} />
        <Route path="/C1" element={<Contract1 />} />
        <Route path="/C2" element={<Contract2 />} />
        <Route path="/C3" element={<Contract3 />} />
        {/* <Route path="/sell" element={<Navigate to="/signin" replace />} /> */}

        {isLoggedIn && role === "standard" && (
          <>
            <Route path="/sell" element={<Sell />} />
            <Route path="/dashhome" element={<DashHome />} />
            <Route path="/activeads" element={<Active />} />
            <Route path="/inactiveads" element={<InActive />} />
            <Route path="/expireads" element={<Expire />} />
            <Route path="/draftads" element={<Draft />} />
            <Route path="/deleteads" element={<Delete />} />
            <Route path="/deleteaccount" element={<DeleteAccount />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/favourite" element={<Favorurite />} />
            <Route path="/lawyer" element={<HairLawyer />} />
            <Route path="/authorizedlawyer" element={<AuthorizedLawyer />} />
            <Route path="/allad" element={<All />} />
          </>
        )}

        {isLoggedIn && role === "lawyer" && (
          <>
            <Route path="/lawyer" element={<HairLawyer />} />
            <Route path="/authorizedlawyer" element={<AuthorizedLawyer />} />
            <Route path="/lawyeractiveads" element={<ActiveAds />} />
            <Route path="/lawyerinactiveads" element={<InactiveAds />} />
            <Route path="/lawyerexpireads" element={<ExpireAds />} />
            <Route path="/lawyerdraftads" element={<DraftAds />} />
            <Route path="/lawyerdeletedads" element={<DeletedAds />} />
            <Route path="/approved" element={<ApprovedLawyerAads />} />
            <Route path="/allads" element={<AllAdvertisement />} />
            <Route path="/papers" element={<LawyersAgreementPager />} />
            <Route path="/chats" element={<LawyerChat />} />
            <Route path="/LProfile" element={<LawyerProfile />} />
            <Route path="/clients" element={<LawyersClients />} />
            <Route path="/lawyerpassword" element={<LawyerPassword />} />
            <Route path="/sell" element={<Sell />} />
            {/* <Route
              path="/sell"
              element={<Navigate to="/" replace />}
              onClick={handleAlertClose}
            /> */}
          </>
        )}

        {isLoggedIn && role === "admin" && (
          <>
            <Route path="/lawyer" element={<HairLawyer />} />
            <Route path="/authorizedlawyer" element={<AuthorizedLawyer />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/approvedlwayer" element={<ApprovedLawyer />} />
            <Route path="/adminads" element={<AdminAds />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/adminpass" element={<AdminChangePassword />} />
            <Route path="/lawyerlist" element={<ApprovedLawyerList />} />
            <Route path="/userlist" element={<UserList />} />
          </>
        )}

        {!isLoggedIn && <Route path="/signin" element={<Signin />} />}

        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
