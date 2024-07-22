import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { decryptData } from "../helper/encryptionAndDecryption";

var id;
const auth = getAuthUser();

function Alertt() {
  return (
    <div className="alertt">
      {["warning"].map((variant) => (
        <Alert key={variant} variant={variant}>
          IMPORTANT! You have permission to register from 10/5/2023 to 6/6/2023
        </Alert>
      ))}
    </div>
  );
}

function Heading() {
  return (
    <div className="heading p-4">
      <h1>Register Your Courses</h1>
    </div>
  );
}

function RegisterForm({ studentID }) {
  const navigate = useNavigate();

  const [courses, setCourses] = useState({
    selectedCourseID: "",
    selectedSemester: "",
    results: [],
    err: [],
    loading: false,
    studentID: studentID,
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/listCourse")
      .then((resp) => {
        console.log('then====================================');
        console.log(resp.data);
        console.log('====================================');
        setCourses({
          ...courses,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        console.log('errrr====================================');
        console.log(courses.results);
        console.log('====================================');
        setCourses({
          ...courses,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, []);

  id = courses.selectedCourseID;
console.log('====================================');
console.log(id);
console.log('====================================');
  const handleRegister = (e) => {
    e.preventDefault();
    setCourses({ ...courses, loading: true, err: [] });
    axios
      .post(
        "http://localhost:4000/student/registerCourse",
        {
          courseID: id,
          studentID: auth.id,
        },
        {
          headers: {
            authorization: `Bearer__${auth.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setCourses({
          ...courses,
          courseID: "",
          studentID: "",
        });
        console.log(res);
        setCourses({ ...courses, loading: false, err: [] });
        navigate("/register");
      })
      .catch((err) => {
        console.log(err);
        setCourses({ ...courses, loading: false, err: "No Courses available" });
      });
  };

  const handleCourseChange = (e) => {
    const selectedCourseId = e.target.value;
    const selectedCourse = courses.results.find(course => course.id === selectedCourseId);
    if (selectedCourse) {
      const decryptedName = decryptData(selectedCourse.name, selectedCourse.iv);
      id = decryptedName;
      setCourses({
        ...courses,
        selectedCourseID: selectedCourse.id,
      });
    }
  };
  

  const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    setCourses({ ...courses, selectedSemester: selectedSemester });
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 21%, rgba(148,187,233,1) 46%)",
      }}
    >
      <Form
        style={{ width: " 50%" }}
        className="container  g-4 p-5"
        onSubmit={handleRegister}
      >
        <Heading />
        <Alertt />
        <Form.Group className="mb-3">
          <Form.Label>
            <h5>Choose Semester</h5>
          </Form.Label>
          <Form.Select onChange={handleSemesterChange}>
            <option>select</option>
            <option>Winter 2022</option>
            <option>Fall 2023</option>
            <option>Summer 2022</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            <h5>Course Name</h5>
          </Form.Label>
          <Col sm={10}>
            <Form.Select
              value={courses.selectedCourseId}
              onChange={(e) => {
            
                const selectedCourseId = e.target.value;
                console.log('====================================');
                console.log(selectedCourseId);
                console.log('====================================');
                id=selectedCourseId;
                const selectedCourse = courses.results.find(
                  (course) => course.id === selectedCourseId
                );
              }}
            >
              <option value="">Select a course</option>
              {Array.isArray(courses.results) &&
    courses.results.map((course) => {
      const decryptedName = decryptData(course.name, course.iv);

      return (
        <option key={course.id} value={course.id}>
          {decryptedName}
        </option>
      );
    })}
            </Form.Select>
          </Col>
        </Form.Group>
        <div className="mb-2">
          <Button variant="primary" size="lg" type="submit">
            Register
          </Button>
          <div className=" p-3"></div>
          <Button variant="secondary" size="lg" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <div className=" p-5"></div>
        </div>
      </Form>
    </div>
  );
}

export default RegisterForm;
