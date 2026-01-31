import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import SignUpMain from "../components/SignUpMain";
import Footer from "../components/Footer";
function SignUp() {
  return (
    <div className="SignUp-container">
      <TopHeader />
      <Header />
      <SignUpMain />
      <Footer />
    </div>
  );
}

export default SignUp;
