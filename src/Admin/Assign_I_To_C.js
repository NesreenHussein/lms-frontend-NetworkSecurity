import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAuthUser } from "../helper/Storage";
import { useNavigate } from "react-router-dom";

import { decryptData } from "../helper/encryptionAndDecryption";
const auth = getAuthUser();
var id
function RegisterForm({ onAssign }) {
  const navigate = useNavigate();

  const [courses, setCourses] = useState({
    instructor_id: "",
    selectedCourse: "",
    selectedCourseId: "", // New state to store the selected course
    results: [],
    err: [],
    loading: false,
  });

  // Fetch courses from the backend
  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/listCourse", {
        headers: {
          authorization: `Bearer__${auth.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        setCourses({
          ...courses,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setCourses({
          ...courses,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, []);

  const assignInstructor = (e) => {
    e.preventDefault();
    setCourses({ ...courses, loading: true, err: [] });

    axios
      .post(
        "http://localhost:4000/admin/AssignInstructor",
        {
          instructor_id: courses.instructor_id,
          course_id: id, // Use selectedCourse instead of name
        },
        {
          headers: {
            authorization: `Bearer__${auth.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => {
        setCourses({
          ...courses,
          instructor_id: "",
          selectedCourse: "", // Clear selected course
          loading: false,
          err: [],
          selectedCourseId: "", // Clear selected course ID
        });
        navigate("/AssigIns");
        if (onAssign) {
          // Call the onAssign callback with the assigned course
          onAssign({
            id: resp.data.id,
            name: resp.data.name,
            instructor_id: resp.data.instructor_id,
          });
        }
      })
      .catch((err) => {
        console.log('====================================');
        console.log(courses.selectedCourseId);
        console.log('====================================');
        setCourses({
          ...courses,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  };

  return (
    <div>
      <Form
        onSubmit={assignInstructor}
        style={{ width: "500%" }}
        className="container"
      >
        <div className="heading">
          <h1>Assign</h1>
        </div>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={6}>
            <h6>Instructor ID</h6>
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={courses.instructor_id}
              onChange={(e) =>
                setCourses({ ...courses, instructor_id: e.target.value })
              }
              type="text"
              placeholder="Instructor ID"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={6}>
            <h6>Course</h6>
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
    if (selectedCourse) {
      setCourses({
        ...courses,
        selectedCourseId,
        selectedCourse: decryptData(selectedCourse.name, selectedCourse.iv),
      });
    }
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
        <br />
        <div className="mb-2">
          <Button
            className="btn btn-success"
            variant="primary"
            type="submit"
            disabled={courses.loading}
          >
            {courses.loading ? "Submitting..." : "Submit"}
          </Button>
          <br />
          <br />
          <Button variant="secondary" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

const ShowCourses = () => {
  const [courses, setCourses] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  const [assignedCourse, setAssignedCourse] = useState(null); // State to store the assigned course

  useEffect(() => {
    setCourses({ ...courses, loading: true });
    axios
      .get("http://localhost:4000/admin/listCourse", {
        headers: {
          authorization: `Bearer__${auth.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        setCourses({
          ...courses,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setCourses({
          ...courses,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [courses.reload]);

  // Function to handle course assignment
  const handleAssignCourse = (course) => {
    setAssignedCourse(course); // Set the assigned course
    setCourses({ ...courses, reload: courses.reload + 1 }); // Trigger reloading the courses
  };

  return (
    <div style={{ background: "lightgray" }}>
      <div className="container">
        <br />
        <h1>Show Courses</h1>
        <br />
        <Table striped bordered hover size="lg">
          <thead style={{ background: "rgb(134, 212, 245)" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {courses.results.map((Course, key) => {
              const decryptedName = decryptData(Course.name, Course.iv);
              return (
                <tr key={key} style={{ background: "white" }}>
                  <td>{Course.id}</td>
                  <td>{decryptedName}</td>
                  <td>{Course.instructor_id}</td>
                </tr>
              );
            })}
            {/* Display the assigned course if it exists */}
            {assignedCourse && (
              <tr >
                <td>{assignedCourse.id}</td>
                <td>{assignedCourse.name}</td>
                <td>{assignedCourse.instructor_id}</td>
              </tr>
            )}
          </tbody>
        </Table>
        <RegisterForm onAssign={handleAssignCourse} />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ShowCourses;
// OMAR
