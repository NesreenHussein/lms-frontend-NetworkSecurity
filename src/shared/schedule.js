import React from "react"
import { Button } from "react-bootstrap"
export const Schedule = ()=>{
  return (
  <div class="container" >
    <div class="w-95 w-md-75 w-lg-60 w-xl-55 mx-auto mb-6 text-center">
      <h1 class="display-18 display-md-16 display-lg-14 mb-0" style={{color:"black"}}>Your Schedule</h1>
      <br/>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="schedule-table">
          <table class="table bg-white">
            <thead>
              <tr>
                <th/>
                <th>8 am</th>
                <th>10 am</th>
                <th>12 pm</th>
                <th>2 pm</th>
              </tr>
              </thead>
            <tbody>
              <tr>
                <td class="day">Sunday</td>
                  <td class="active">
                    <h4>Artificial Intelligence</h4>
                    <p>08 am - 10 am</p>
                <div class="hover">
                  <h4>Artificial Intelligence</h4>
                  <p>08 pm - 10 pm</p>
                  <span>Prof.Mary Noah</span>
                </div>
                  </td>
                  <td/>
                  <td class="active">
                    <h4>Introduction to Algorithms</h4>
                    <p>12 pm - 02 pm</p>
                <div class="hover">
                  <h4>Introduction to Algorithms</h4>
                    <p>12 pm - 2 pm</p>
                      <span>Prof. Helen Rechard</span>
                        </div>
                  </td>
                <td/>
              </tr>
              <tr>
                <td class="day">Monday</td>
                <td></td>
                <td class="active">
                  <h4>Data Structure</h4>
                  <p>10 am - 12 pm</p>
                  <div class="hover">
                    <h4>Data Structure</h4>
                    <p>10 pm - 12 pm</p>
                    <span>Prof. Liam</span>
                  </div>
                </td>
                <td/>
                <td/>
              </tr>
              <tr>
                <td class="day">Tuesday</td>
                <td/>
                <td/>
                <td/>
                <td class="active">
                  <h4>Operation Research</h4>
                  <p>02 pm - 04 pm</p>
                  <div class="hover">
                    <h4>Operation Research</h4>
                    <p>02 pm - 04 pm</p>
                    <span>Prof. Michael Sharon</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="day">Wednesday</td>
                <td/>
                <td class="active">
                  <h4>Software Engineering</h4>
                  <p>12 pm - 02 pm</p>
                  <div class="hover">
                    <h4>Software Engineering</h4>
                    <p>12 pm - 02 pm</p>
                    <span>Prof. James Robert</span>
                  </div>
                </td>
                <td/>
              </tr>
              <tr>
                <td class="day">Thursday</td>
                  <td class="active">
                    <h4>Managment Information System</h4>
                    <p>8 am - 10 am</p>
                    <div class="hover">
                      <h4>Managment Information System</h4>
                      <p>10 am - 12 pm</p>
                      <span>Prof. Angelou</span>
                    </div>
                </td>
                <td/>
                <td/>
                <td/>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-2 " >
        <Button variant="primary" size="lg" >
          Print schedule
        </Button>
        </div>
      </div>
    </div>
  </div>
  )
}