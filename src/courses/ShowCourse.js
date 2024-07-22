import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Schedule } from "../shared/schedule";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";
import { decryptData } from '../helper/encryptionAndDecryption';

  const auth = getAuthUser();




const Heading = () => {
  return (
    <div className="heading">
      <h2>Your Registered Courses</h2>
    </div>
  );
};

const ShowCourse = () => {
  
  const navigate = useNavigate();

 
  const [grades, setcourses] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setcourses({ ...grades, loading: true });
    axios
      .get(`http://localhost:4000/student/listGrades/${auth.id}`,{
        headers: {
          authorization:`Bearer__${auth.token}`,
          "Content-Type": "application/json",
        },
      }
)

      .then((resp) => {
        console.log(resp);
        setcourses({
          ...grades,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setcourses({
          ...grades,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, []);
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(238,174,202,1) 14%, rgba(148,187,233,1) 42%)",
      }}
    >
      <div className="container bn-3 p-3">
        <Heading />
       
        <div className=" p-3"></div>
       

        <>
          <div>
            <Table striped bordered hover size="lg">
              <thead style={{ background: "rgb(134, 212, 245)" }}>
                <tr>
                 
                  <th>Course ID</th>
                  <th>Course name</th>
                  <th>grades</th>
                </tr>
              </thead>
              {grades.results.map((inst, key) => {
              const decryptedName = decryptData(inst.name, inst.iv);

                  return (
                    <tr key={key} style={{ background: "white" }}>
                      <td>{inst.courseID}</td>
                      <td>{decryptedName}</td>
                      <td>{inst.grades}</td>
                    </tr>
                  );
                })}
            </Table>
          </div>
        </>

        <div>
        
          <form
          
          >
        
          </form>
        </div>

        <div className="g-3 p-5">
          <Schedule />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ShowCourse;
