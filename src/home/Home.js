import React from "react";
//import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';

function Home() {
  return (
    <div style={{ background:"linear-gradient(90deg, rgba(238,174,202,1) 14%, rgba(148,187,233,1) 42%)"}}>
      <div>

        <h2 className='hh2 text-center text-dark'>Welcome to Academia</h2>
      </div>



      <section id="about">
        <div className="container m-5"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-5">
            </div>
            <div className="col-md-12 bg-dark text-light ">
              <div className="m-4 ">
                <h1 className="text-danger" >About App.<i class="fa-regular fa-bell"></i></h1>
                
                <h2 classname="text-light">An Academia app is an interactive
                   webpage that allows learners to input their data and get 
                   expected results through interactions. 
                   Your students can access the app from a web browser with 
                   an active internet connection from remote locations</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-2 p-5 g-5" >
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <h1 className='text-large'><i class="fa-solid fa-user"></i>1022+</h1>
            <h2 className='text-center mt-1'>Students</h2>
          </div>
          <div className='col-md-3'>
            <h1 className='text-large'><i class="fa-solid fa-check"></i>1200+</h1>
            <h2 className='text-center mt-1'>Projects Done</h2>
          </div>  <div className='col-md-3'>
            <h1 className='text-large'><i class="fa-regular fa-thumbs-up"></i>522+</h1>
            <h2 className='text-center mt-1'>feedback</h2>
          </div>  <div className='col-md-3'>
            <h1 className='text-large'><i class="fa-solid fa-thumbtack"></i>2200+</h1>
            <h2 className='text-center mt-1'>instructors</h2>
          </div>
        </div>
      </div>
      </div>

      <section id="services" className="bg-white py-5 " style={{ background:"linear-gradient(90deg, rgba(238,174,202,1) 14%, rgba(148,187,233,1) 42%)"}}>
        <div className="container bg-light m-auto p-4" >
          <div className="service text-center " >
            <div className="container  " >
              <div className="section-title">
                <h2> <span className="fw-bolder">Services.</span> </h2>
              </div>
            </div>
          </div>

          <div className="row g-4 p-5 text-center m-auto servicebackground">
            <div className="col-xl-4 col-md-12 col-lg-6 w-30">
              <div className="item bg-white p-3">
                <div className="brdr">
                  <i className="fa-solid fa-laptop"></i>
                </div>
                <h2> Enrolled Students</h2>
                <p>show who enrolled your courses.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-12 col-lg-6 w-30 servicebackground">
              <div className="item bg-white p-3">
                <div className="brdr">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <h2>set Grades</h2>
                <p>set Grades to your student</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-12 col-lg-6 w-30">
              <div className="item bg-white p-3">
                <div className="brdr">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <h2>Register courses</h2>
                <p>student can Register thier courses</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-12 col-lg-6 w-30">
              <div className="item bg-white p-3">
                <div className="brdr">

                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <h2>show  courses</h2>
                <p>Student can show registered course</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-12 col-lg-6 w-30">
              <div className="item bg-white p-3">
                <div className="brdr">
                  <i className="fa-solid fa-tv"></i>
                </div>
                <h2>Manage instructor</h2>
                <p>admin manage instructor</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-12 col-lg-6 w-30">
              <div className="item bg-white p-3">
                <div className="brdr">
                  <i className="fa-solid fa-camera"></i>
                </div>
                <h2>Assign instructor</h2>
                <p>admin Assign instructor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" className="section container bg-ofWhite">
        <div className="position-relative d-flex text-center mb-5">
          <h1 className="text-24 text-dark opacity-4 text-uppercase fw-600 w-100 mb-0">information about app</h1>
          {/* <h2 className="text-24 text-info fw-600 position-absolute w-100 align-self-center lh-base mb-0  ">Features </h2> */}
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge bg-info text-2 fw-400">Simplified Learning</p>
              
              <p className="mb-0">eLearning induces the human brain to grab complex concepts and theories dynamically. With visual explanation and narr</p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge bg-info text-2 fw-400"> Affordable Smartphones</p>
              
              <p className="mb-0">With reasonable rates of internet and smartphones, it has become easier to access from the remotest corner of the world by different sections of society</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge bg-info text-2 fw-400"> Custom Learning</p>
              <p className="mb-0">With personalized learning content, students can grab tough concepts dynamically without monotony</p>
            </div>
            <div className="bg-white border rounded p-4 mb-4">
              <p className="badge bg-info text-2 fw-400"> Systematic Mode</p>
              <p className="mb-0">Most educational apps for students are integrated with a systematic mode, like Google Classroom. </p>
            </div>
          </div>
        </div>

      </section>
      
      {/* <div className='container contact-background' style={{ backgroundImage: `url("how-to-write-an-about-us-wip1.webp")`, backgroundSize: "95%", backgroundRepeat: "no-repeat" }} >
        <div className="service text-center m-5 " >
          <div className="container  ">
            <div className="section-title">
              <h2> <span className="fw-bolder heading">CONTACT US</span> </h2>
            </div>
          </div>
        </div>

        <section id="contact" className="pp">
          <div className="container  d-flex justify-content-center align-items-center ">
            <div className="row ">
              <div className="col-md-4">
                <div className="sec m-5">
                  <i className=" brdr-contact fa  fa-commenting fa-2x"></i>
                  <h2>Chat</h2>
                  <p className="white">You can send us messages</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="sec m-5">
                  <i className="brdr-contact fa-solid fa-envelope fa-2x"></i>
                  <h2>Email</h2>
                  <p className="white">Support@website.com</p>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="sec m-5">
                  <i className=" brdr-contact fa-solid fa-phone fa-2x"></i>
                  <h2>Phone</h2>
                  <p className="white">+20 010 2517 8918</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto d-flex justify-content-center align-items-center w-100 h-50">
            <div className="m-5 w-75"> */}
              {/* <form className="p-5  ">
                <Form.Group as={Row} className="mb-3" >
                  <Form.Label column sm={2} >
                    <h6>Your Name</h6>
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Your name " />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >

                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <textarea className="w-75 m-2 h-25 rounded-1 bg-light border-0" data-error="Please,leave us a message."
                  required="required" placeHolder="Maximum 500 wrds" style={{ height: "200px" }}></textarea>
                <button type="button" class="btn btn-outline-dark  btn-secondary">Submit</button>
                <br />
                <br />
                <br />
                <br />
              </form> */}
            {/* </div>
          </div>
        </section> */}
      {/* </div> */}
    </div>
  );
};
export default Home;