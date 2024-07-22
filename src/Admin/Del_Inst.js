import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { decryptData } from '../helper/encryptionAndDecryption';

import React, { useEffect, useState } from "react";
import axios from "axios";import { useNavigate } from "react-router-dom";

import { getAuthUser } from "../helper/Storage";
const auth = getAuthUser();
function RegisterForm() {
  const navigate = useNavigate();
  
  return (
    <div>

      <Form
        style={{ width: " 500%" }}
        className="container"
      >
       
        <Form.Group as={Row} className="mb-3">
        
        </Form.Group>

   
        <div className="mb-2">
          
          <Button variant="primary" onClick={() => navigate("/Add_Instructor")}>
            Add and Update
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Form>
    </div>
  );
}
const ShowInstructors = () => {
  const [instructor, setInstructor] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setInstructor({ ...instructor, loading: true });
    console.log("!!!!!!!!!!!!!!!!!!!!!!!");
    axios
      .get("http://localhost:4000/admin/listInstructor",{
        headers: {
          authorization:`Bearer__${auth.token}`,
          "Content-Type": "application/json",
        },
      }
)

      .then((resp) => {
        console.log(resp);
        console.log("1!!!!!!!!!!!!!!!!!!1");
        setInstructor({
          ...instructor,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setInstructor({
          ...instructor,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [instructor.reload]);

  function deleteUser(id) {
    axios
      .delete(`http://localhost:4000/admin/deleteInstructor/${id}`, {
        headers: {
          authorization:`Bearer__${auth.token}`,
          "Content-Type": "application/json",
        },
      }
)
      .then((resp) => {
        setInstructor({ ...instructor, reload: instructor.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ background: "lightgray" }}>
      <div className="container">
        <br />
        <h1>Show Instructors</h1>
        <br />
        <Table striped bordered hover size="lg">
          <thead
            style={{ background: "rgb(134, 212, 245)", borderRadius: "10px" }}
          >
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Password</th> */}
              <th>Phone</th>
           
              <th
                style={{
                  //   background: "rgb(185, 40, 40)",
                  color: "black",
                  //   borderRadius: "10px",
                }}
              >
                action
              </th>
          
            </tr>
          </thead>
          {instructor.results.map((Instructors, key) => {
              const decryptedName = decryptData(Instructors.name, Instructors.iv);
              
              const decryptedPhone = decryptData(Instructors.phone, Instructors.iv);
           
            return (
              <tr key={key} style={{ background: "white" }}>
                <td>{Instructors.id}</td>
                <td>{decryptedName}</td>
                <td>{Instructors.email}</td>
                <td>{decryptedPhone}</td>
               
                <td>
                  <button
                    style={{
                      background: "rgb(185, 40, 40)",
                      borderRadius: "10px",
                    }}
                    onClick={() => deleteUser(Instructors.id)}
                  >
                    delete
                  </button>
                </td>
              
              </tr>
            );
          })}
          <br />
          <RegisterForm> </RegisterForm>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Table>
      </div>
    </div>
  );
};

export default ShowInstructors;
