import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import styles from 'styled-components'

const Styled = styles.div`
.tabss:hover {
    cursor:pointer;    
    background-color:yellow;
}
`
const students = [ 
       
    {name:"felciti m", image:"assets/images/product-pic.jpg", campus:"chiromo",college:"biology",id:1,email:"dd@mail.com",endDate:"13/2/2019"},
    {name:"melisa m", image:"assets/images/product-pic.jpg", campus:"Kabete",college:"Swahili",id:"2",email:"kk@mail.com",endDate:"14/2/2019"},
    {name:"Eric m", image:"assets/images/product-pic.jpg", campus:"Gnong",college:"mathematics",id:"3",email:"mm@mail.com",endDate:"15/2/2019"},
    {name:"annile m", image:"assets/images/product-pic.jpg", campus:"Mt kenya",college:"physic",id:"4",email:"nn@mail.com",endDate:"16/2/2019"},
    {name:"Dennis m", image:"assets/images/product-pic.jpg", campus:"Ku",college:"chemisty",id:"5",email:"ll@mail.com",endDate:"17/2/2019"},
    {name:"Morris m", image:"assets/images/product-pic.jpg", campus:"Mombasa",college:"biology",id:"6",email:"jj@mail.com",endDate:"18/2/2019"},
]

const campuses = ["chiromo","kabete",'mombasa']


const Students = props => {
    const [singleStudent, setSingleStudent] = useState(null);
    const [studentsArray, setStudentsArray] = useState(null);
    let results;

    const ascDescSortHandler = (params) =>{
        let array = studentsArray
        array.sort();     
        array.reverse()
    //    console.log(array)
        setStudentsArray(array)
        console.log(studentsArray)

    }


    useEffect(()=>{     
        setStudentsArray(students);              
    },[])

    const clickHandler =  (params) => {      
     results = students.find((student) => student.id === params )
     setSingleStudent(results)
        console.log( results)
    };





    return (
      <>
        <Styled>
          {/* wrapper  */}
          {/* ============================================================== */}
          <div className="dashboard-wrapper">
            <div className="influence-finder">
              <div className="container-fluid dashboard-content">
                {/* ============================================================== */}
                {/* pageheader */}
                {/* ============================================================== */}
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                      <h3 className="mb-2">Influencer Finder </h3>
                      <p className="pageheader-text">
                        Proin placerat ante duiullam scelerisque a velit ac
                        porta, fusce sit amet vestibulum mi. Morbi lobortis
                        pulvinar quam.
                      </p>
                      <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="/#" className="breadcrumb-link">
                                Dashboard
                              </a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Influencer Finder Template
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ============================================================== */}
                {/* end pageheader */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* content */}
                {/* ============================================================== */}
                <div className="row">
                  {/* ============================================================== */}
                  {/* search bar  */}
                  {/* ============================================================== */}
                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="card">
                      <div className="card-body">
                        <form>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Dropdown
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  Action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                                <div
                                  role="separator"
                                  className="dropdown-divider"
                                />
                                <a className="dropdown-item" href="#">
                                  Separated link
                                </a>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Text input with dropdown button"
                            />
                          </div>

                          {/* <input
                          className="form-control form-control-lg"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-primary search-btn"
                          type="submit"
                        >
                          Search
                        </button> */}
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* ============================================================== */}
                  {/* end search bar  */}
                  {/* ============================================================== */}

                  <div className="col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <h5 className="card-header">Students</h5>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table">
                            <thead className="bg-light">
                              <tr className="border-0">
                                <th className="border-0">id</th>
                                <th className="border-0">image</th>
                                <th className="border-0">student Name</th>
                                <th className="border-0">Campus</th>
                                <th className="border-0">College</th>
                                <th className="border-0">Email</th>
                                <th className="border-0">endDate</th>
                              </tr>
                            </thead>
                            {!studentsArray
                              ? "Loading ...."
                              : studentsArray.map((student) => (
                                  <tr
                                    className="tabss"
                                    onClick={() => clickHandler(student.id)}
                                    key={student.id}
                                  >
                                    <td>{student.id}</td>{" "}
                                    <td>
                                      <div className="m-r-10">
                                        <img
                                          src={student.image}
                                          alt="user"
                                          className="rounded"
                                          width={45}
                                        />
                                      </div>
                                    </td>
                                    <td>{student.name}</td>
                                    <td>{student.campus}</td>
                                    <td>{student.college}</td>
                                    <td>{student.email}</td>
                                    <td>{student.endDate}</td>
                                    <td>
                                      <span className="badge-dot badge-brand mr-1" />
                                      InTransit{" "}
                                    </td>
                                  </tr>
                                ))}
                            <tbody></tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* ============================================================== */}

                    {/* ============================================================== */}
                    {/* student detail*/}
                    {/* ============================================================== */}
                    {singleStudent ? (
                      <div className="card">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="user-avatar float-xl-left pr-4 float-none">
                                <img
                                  src={singleStudent.image}
                                  alt="User Avatar"
                                  className="rounded-circle user-avatar-xl"
                                />
                              </div>
                              <div className="pl-xl-3">
                                <div className="m-b-0">
                                  <div className="user-avatar-name d-inline-block">
                                    <h2 className="font-24 m-b-10">
                                      {singleStudent.name}
                                    </h2>
                                  </div>
                                  <div className="rating-star d-inline-block pl-xl-2 mb-2 mb-xl-0">
                                    <i className="fa fa-fw fa-star" />
                                    <i className="fa fa-fw fa-star" />
                                    <i className="fa fa-fw fa-star" />
                                    <i className="fa fa-fw fa-star" />
                                    <i className="fa fa-fw fa-star" />
                                    <p className="d-inline-block text-dark">
                                      14 Reviews{" "}
                                    </p>
                                  </div>
                                </div>
                                <div className="user-avatar-address">
                                  <p className="mb-2">
                                    <i className="fa fa-map-marker-alt mr-2  text-primary" />
                                    Avenal, CA, USA
                                    <span className="m-l-10">
                                      Female
                                      <span className="m-l-20">
                                        24 Year Old
                                      </span>
                                    </span>
                                  </p>
                                  <div className="mt-3">
                                    <a
                                      href="/#"
                                      className="mr-1 badge badge-light"
                                    >
                                      Fitness
                                    </a>
                                    <a
                                      href="/#"
                                      className="mr-1 badge badge-light"
                                    >
                                      Life Style
                                    </a>
                                    <a
                                      href="/#"
                                      className="mr-1 badge badge-light"
                                    >
                                      Gym
                                    </a>
                                    <a href="/#" className="badge badge-light">
                                      Crossfit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="float-xl-right float-none mt-xl-0 mt-4">
                                <a href="/#" className="btn-wishlist m-r-10">
                                  <i className="far fa-star" />
                                </a>
                                <a href="/#" className="btn btn-secondary">
                                  Send Messages
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-top user-social-box">
                          <div className="user-social-media d-xl-inline-block ">
                            <span className="mr-2 twitter-color">
                              {" "}
                              <i className="fab fa-twitter-square" />
                            </span>
                            <span>13,291</span>
                          </div>
                          <div className="user-social-media d-xl-inline-block">
                            <span className="mr-2  pinterest-color">
                              {" "}
                              <i className="fab fa-pinterest-square" />
                            </span>
                            <span>84,019</span>
                          </div>
                          <div className="user-social-media d-xl-inline-block">
                            <span className="mr-2 instagram-color">
                              {" "}
                              <i className="fab fa-instagram" />
                            </span>
                            <span>12,300</span>
                          </div>
                          <div className="user-social-media d-xl-inline-block">
                            <span className="mr-2  facebook-color">
                              {" "}
                              <i className="fab fa-facebook-square " />
                            </span>
                            <span>92,920</span>
                          </div>
                          <div className="user-social-media d-xl-inline-block">
                            <span className="mr-2 medium-color">
                              {" "}
                              <i className="fab fa-medium" />
                            </span>
                            <span>291</span>
                          </div>
                          <div className="user-social-media d-xl-inline-block">
                            <span className="mr-2 youtube-color">
                              {" "}
                              <i className="fab fa-youtube" />
                            </span>
                            <span>1291</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      "no students"
                    )}
                  </div>
                  {/* ============================================================== */}
                  {/* Sorting */}
                  {/* ============================================================== */}
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card">
                      <div className="card-body">
                        <h3 className="font-16">Sorting By</h3>
                        <select className="form-control">
                          <option>Followers</option>
                          <option>Followers</option>
                        </select>
                      </div>
                      <div className="card-body border-top">
                        <h3 className="font-16">
                          {" "}
                          <i class="fas fa-sort "></i> Sorting
                        </h3>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            className="custom-control-input"
                            onClick={() => ascDescSortHandler("Ascending")}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio1"
                          >
                            <i class="fas fa-sort-alpha-down"></i> Ascending
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            className="custom-control-input"
                            onClick={() => ascDescSortHandler("descending")}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio2"
                          >
                            <i class="fas fa-sort-alpha-up"></i> Descending
                          </label>
                        </div>
                      </div>
                      <div className="card-body border-top">
                        <h3 className="font-16">Filter</h3>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck10"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck10"
                          >
                            Facebook
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck11"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck11"
                          >
                            Instagram
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck12"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck12"
                          >
                            Pinterest
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck13"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck13"
                          >
                            Twitter
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck14"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck14"
                          >
                            Youtube
                          </label>
                        </div>
                      </div>
                      <div className="card-body border-top">
                        <h3 className="font-16">Influncer Category</h3>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck15"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck15"
                          >
                            Business
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck16"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck16"
                          >
                            Lifestyle
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck17"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck17"
                          >
                            Fitness
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck18"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck18"
                          >
                            Sports
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck19"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck19"
                          >
                            Clothing
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck20"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck20"
                          >
                            Pets &amp; Animals
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck21"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck21"
                          >
                            Beauty &amp; Makeup
                          </label>
                        </div>
                      </div>
                      <div className="card-body border-top">
                        <h3 className="font-16">Age Demographics</h3>
                        <select className="form-control">
                          <option selected>Select the Age</option>
                          <option value="20-30">20-30</option>
                          <option value="30-40">30-40</option>
                          <option value="40-50">40-50</option>
                        </select>
                      </div>
                      <div className="card-body border-top">
                        <a
                          href="/#"
                          className="btn btn-secondary btn-lg btn-block"
                        >
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* ============================================================== */}
                  {/* end influencer sidebar  */}
                  {/* ============================================================== */}
                </div>
              </div>
              {/* ============================================================== */}
              {/* footer */}
              {/* ============================================================== */}
              <div className="footer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      Copyright © 2018 Concept. All rights reserved. Dashboard
                      by <a href="https://colorlib.com/wp/">Colorlib</a>.
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
              </div>
              {/* ============================================================== */}
              {/* end footer */}
              {/* ============================================================== */}
            </div>
            {/* ============================================================== */}
            {/* end wrapper  */}
            {/* ============================================================== */}
          </div>
        </Styled>
      </>
    );
}

Students.propTypes = {

}

export default Students
