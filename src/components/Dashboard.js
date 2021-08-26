import React from 'react'
import Homegraphs from './Homegraphs'
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'



const Dashboard = () => {
    return (
        <>
         <div className="dashboard-main-wrapper">
  {/* ============================================================== */}
  {/* navbar */}
  {/* ============================================================== */}
  <Header />
  {/* ============================================================== */}
  {/* end navbar */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* left sidebar */}
  {/* ============================================================== */}
        <Sidebar/>
  {/* ============================================================== */}
  {/* end left sidebar */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* wrapper  */}
  {/* ============================================================== */}
  <div className="dashboard-wrapper">
        <Homegraphs />
    {/* ============================================================== */}
    {/* footer */}
    {/* ============================================================== */}
    {/* <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            Copyright © 2018 Concept. All rights reserved. Dashboard by <a href="https://colorlib.com/wp/">Colorlib</a>. 
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="text-md-right footer-links d-none d-sm-block">
              <a href="javascript: void(0);">About</a>
              <a href="javascript: void(0);">Support</a>
              <a href="javascript: void(0);">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* ============================================================== */}
    {/* end footer */}
    {/* ============================================================== */}
  </div>
  {/* ============================================================== */}
  {/* end wrapper  */}
  {/* ============================================================== */}
</div>

        </>
    )
}

export default Dashboard