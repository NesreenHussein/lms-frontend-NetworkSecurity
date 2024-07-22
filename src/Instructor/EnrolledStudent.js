import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Schedule } from "../shared/schedule";
import { decryptData } from "../helper/encryptionAndDecryption";

import { getAuthUser } from "../helper/Storage";
const auth = getAuthUser();

const Heading = () => {
  return (
    <div className="heading">
      <h2>Your Registered Courses</h2>
    </div>
  );
};

const EnrolledStudents = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState({
    loading: true,
    results: [],
    err: null,
  });

  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseName, setSelectedCourseName] = useState(""); // State for Selected Course Name
  const [selectedCourseID, setSelectedCourseID] = useState(""); // State for Selected Course ID
  const [instructor, setInstructor] = useState({
    loading: false,
    results: [], // Ensure results is initialized as an empty array
    err: null,
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/listCourse", {
        // headers: {
        //   authorization: `Bearer__${auth.token}`,
        //   "Content-Type": "application/json",
        // },
      })
      .then((resp) => {
        setCourses({
          loading: false,
          results: resp.data || [],
          err: null,
        });
      })
      .catch((err) => {
        setCourses({
          loading: false,
          results: [],
          err: "Something went wrong, please try again later!",
        });
        console.log(err);
      });
  }, []);

  const listInstructors = (courseId) => { // Accept courseId parameter
    setInstructor({ ...instructor, loading: true });
    axios
      .get(`http://localhost:4000/instructor/list/${courseId}`, { // Use courseId instead of selectedCourseID
        headers: {
          authorization: `Bearer__${auth.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        console.log('====================================');
        console.log(courseId); // Use courseId instead of selectedCourseID
        console.log('====================================');
        console.log(resp.data);
        setInstructor({
          loading: false,
          results: resp.data || [], // Assuming data structure has a 'results' key
          err: null,
        });
      })
      .catch((err) => {
        console.log('====================================');
        console.log(courseId); // Use courseId instead of selectedCourseID
        console.log('====================================');
        setInstructor({
          loading: false,
          results: [],
          err: "Something went wrong, please try again later!",
        });
        console.log(err);
      });
  };
  

  const handleCourseChange = (event) => {
    const selectedCourseId = event.target.value;
    const selectedCourseName =
      event.target.options[event.target.selectedIndex].text;
    setSelectedCourse(selectedCourseId);
    setSelectedCourseName(selectedCourseName);
    listInstructors(selectedCourseId); // Pass the selectedCourseId directly to listInstructors
  };
  

  

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 14%, rgba(148,187,233,1) 42%)",
      }}
    >
      <div className="container bn-3 p-3">
        <Heading />
        <div>
          <Table striped bordered hover size="lg">
            <thead style={{ background: "rgb(134, 212, 245)" }}>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
  {instructor.loading ? (
    <tr>
      <td colSpan="3">Loading...</td>
    </tr>
  ) : instructor.results.length === 0 ? (
    <tr>
      <td colSpan="3">No data available</td>
    </tr>
  ) : (
    instructor.results.map((inst, key) => {
  const decryptedName = decryptData(inst.student_name, inst.iv);
  const decryptedNameCourse = decryptData(inst.course_name, inst.course_iv);
  console.log('Decrypted Name:', decryptedName); // Add this line for debugging

  return (
    <tr key={key} style={{ background: "white" }}>
      <td>{inst.id}</td>
      <td>{decryptedName}</td>
      <td>{decryptedNameCourse || "No course selected"}</td>
    </tr>
  );
})

  )}
</tbody>

          </Table>
        </div>
        <div>
          <Form>
            <Form.Group controlId="courseSelect">
              <Form.Label>COURSE NAME:</Form.Label>
              <Form.Select value={selectedCourse} onChange={handleCourseChange}>
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
            </Form.Group>
            <Button
              className="btn btn-dark w-100"
              variant="primary"
              onClick={listInstructors}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="g-3 p-5">
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default EnrolledStudents;
