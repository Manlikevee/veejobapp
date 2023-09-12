import React, { useState, useEffect } from 'react';

const Applicationdata = ({responsedata}) => {

    const  [userProfileData, setUserProfileData] = useState([]);
    const  [jobdetail, setJobdetail] = useState([]);
    const [workExp, setworkExp] = useState([])
    const [education, setEducation] = useState([])

    useEffect(() => {
        setEducation(responsedata.education_detail);
        setJobdetail(responsedata.job_detail);
        setworkExp(responsedata.work_experience);
        setUserProfileData(responsedata.userprofile);
        // Check if responseData contains the arrays and set them to state if they exist

      }, []);


  return (
    <>
              <div className="applicationpage">
        <div className="wrapper detail-page">
          <div className="main-container">
            <div className='gp' style={{ lineHeight: "normal", width: "100%" }}>
              <div className="tpsds casa">
                <div className="fif">
                  <div className="overview-text-subheader fls">
                    <div className="globeheader">
                      <div className="globea usercompanylogo">
                        <img src="https://nigerialogos.com/logos/seedbuilders/seedbuilders.png" alt="" />
                      </div>
                      <div className="globebody" style={{ width: "100%" }}>
                        <div className="globetopflex">
                          <div className="jtitle">
                        {jobdetail.jobtitle} <span>( {jobdetail.jobservice} )</span>
                          </div>
                        </div>
                        <div className="secloc">
                          <div className="jsector">{jobdetail.jobemploymenttype}</div>
                          <div className="jlocation">Lagos,Nigeria</div>
                        </div>
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="adminprofile">
                <div className="shareintotwo">
                  <div className="share2">
                    <div className="tpsds">
                      <div className="fif">
                        <div className="overview-text-subheader fls">
                          <div className="globeheader sx">
                            <div className="globea ppoto">
                              <img
                                src={userProfileData.avatar}
                                alt=""
                              />
                            </div>
                            <div className="globebody" style={{ width: "100%" }}>
                              <div className="mynameis">{responsedata.userprofile.user?.first_name + '' + userProfileData.user?.strokeLinecap_name }</div>
                              <div className="flexdata">
                                <div className="fldatacontent">
                                  <div className="flexcontenttitle">Email</div>
                                  <div className="flexcontentbody">
                                  {userProfileData.user?.email}
                                  </div>
                                </div>
                                <div className="fldatacontent">
                                  <div className="flexcontenttitle">Phone Number</div>
                                  <div className="flexcontentbody">
                                    {userProfileData.phonenumber}
                                  </div>
                                </div>
                                <div className="fldatacontent">
                                  <div className="flexcontenttitle">Country</div>
                                  <div className="flexcontentbody">
                                  {userProfileData.country}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tpsds">
                      <div className="fif">
                        <div className="to">Biography</div>
                        <div
                          className="overview-text-subheader fls"
                   
                          id="biography"
                  
                        >
                          <br />
                        
                          {userProfileData.bio}

                        </div>
                      </div>
                    </div>

              
                    <div className="to"> Work experience</div>
              
                    {workExp.map((activityData, index) => (
                    <div className="tpsds">
                      <div className="fif">
                        <div className="to">work experience</div>
                        <div className="overview-text-subheader fls">
                          <br />
                          <div className="globeheader">
                            <div className="globea">
                              <div className="globe">
                                <svg
                                  width={32}
                                  height={33}
                                  viewBox="0 0 32 33"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.9998 29.6589C23.3636 29.6589 29.3332 23.6893 29.3332 16.3255C29.3332 8.96172 23.3636 2.99219 15.9998 2.99219C8.63604 2.99219 2.6665 8.96172 2.6665 16.3255C2.6665 23.6893 8.63604 29.6589 15.9998 29.6589Z"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M2.6665 16.3257H29.3332"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15.9998 2.99219C19.3349 6.64332 21.2302 11.3816 21.3332 16.3255C21.2302 21.2695 19.3349 26.0077 15.9998 29.6589C12.6648 26.0077 10.7695 21.2695 10.6665 16.3255C10.7695 11.3816 12.6648 6.64332 15.9998 2.99219V2.99219Z"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="globebody">
                              <div className="globetopflex">
                                <div className="jtitle">
                                {activityData.jobtitle}{" "}
                                  <span>({activityData.jobservice})</span>
                                </div>
                                <div className="flexx2">
                                  <div className="edit">
                                    <svg
                                      style={{ width: 25 }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ionicon"
                                      viewBox="0 0 512 512"
                                    >
                                      <title>Create</title>
                                      <path
                                        d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                      <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
                                    </svg>
                                  </div>
                                  <div className="edit">
                                    <svg
                                      style={{ width: 25 }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ionicon"
                                      viewBox="0 0 512 512"
                                    >
                                      <title>Trash</title>
                                      <path
                                        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M80 112h352"
                                      />
                                      <path
                                        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="secloc">
                                <div className="jsector">{activityData.jobsector}</div>
                                <div className="jlocation">Lagos,Nigeria</div>
                              </div>
                              <div className="timeblock">
                                <div className="jfrom">{activityData.jobstart} —</div>
                                <div className="jto">{activityData.jobend}</div>
                                <div className="jperiod">7 yrs 3 months</div>
                              </div>
                              <div className="jobdescription overview-text-subheader">
                               
{activityData.jobdescription}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>     ))}

                    <div className="to"> Education</div>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                  .worl img {\n                    width: 164px;\n                    object-fit: cover;\n                    border-radius: 67%;\n                    max-width: 91px;\n                    height: 95px;\n                  }\n                "
                      }}
                    />

{education.map((activityData, index) => (
                    <div className="tpsds">
                      <div className="fif">
                        <div className="to">Educational Background</div>
                        <div className="overview-text-subheader fls">
                          <br />
                          <div className="globeheader">
                            <div className="globea">
                              <div className="worl">
                                <img
                                  src={activityData.university.logourl}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="globebody">
                              <div className="globetopflex">
                                <div className="jtitle">
                            {activityData.university.institution}
                                  <span>({activityData.university.Type})</span>
                                </div>
                                <div className="flexx2">
                                  <div className="edit">
                                    <svg
                                      style={{ width: 25 }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ionicon"
                                      viewBox="0 0 512 512"
                                    >
                                      <title>Create</title>
                                      <path
                                        d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                      <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
                                    </svg>
                                  </div>
                                  <div className="edit">
                                    <svg
                                      style={{ width: 25 }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="ionicon"
                                      viewBox="0 0 512 512"
                                    >
                                      <title>Trash</title>
                                      <path
                                        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit={10}
                                        strokeWidth={32}
                                        d="M80 112h352"
                                      />
                                      <path
                                        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="secloc">
                                <div className="jsector">{activityData.course}</div>
                                <div className="jlocation">{activityData.degree}</div>
                              </div>
                              <div className="timeblock">
                                <div className="jfrom">{activityData.start_date}—</div>
                                <div className="jto">{activityData.finish_date}</div>
                                <div className="jperiod">7 yrs 3 months</div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>            ))}



                    

                    <div className="to">Area Of Experties</div>
                    <div className="tpsds">
                      <div className="fif">
                        <div className="to">Area Of Experties</div>
                        <div className="overview-text-subheader fls">
                          <br />
                          <div className="flexwrapcontainer">
                            <div className="flexwrapbox">Change =</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Manage</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                            <div className="flexwrapbox">Change Management</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tpsds">
                      <div className="fif">
                        <div className="to">Account Information</div>
                        <div className="fl">
                          <div className="bt">
                            Bank Name: <span>Access Bank</span>{" "}
                          </div>
                          <div className="bt">
                            Account Number: <span>0774369899</span>
                          </div>
                          <div className="bt">
                            Account Name: <span>Odah Victor Ebube</span>
                          </div>
                          <div className="bt">
                            Bank Code: <span>044</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tpsds">
                      <div className="fif">
                        <div className="to">Account Information</div>
                        <div className="fl">
                          <div className="bt">
                            Bank Name: <span>Access Bank</span>{" "}
                          </div>
                          <div className="bt">
                            Account Number: <span>0774369899</span>
                          </div>
                          <div className="bt">
                            Account Name: <span>Odah Victor Ebube</span>
                          </div>
                          <div className="bt">
                            Bank Code: <span>044</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="andas">
                      <div className="didid">
                        <div className="to">Loan Information</div>
                        <br />
                        <div className="lst">
                          Loan Status: <span className="stat">Pending</span>
                        </div>
                        <div className="lrs">
                          <div className="lr">
                            <div className="lr1">Loan Amount</div>
                            <div className="lr2"> 200,000 </div>
                          </div>
                          <div className="lr">
                            <div className="lr1">Tenor</div>
                            <div className="lr2"> 30 days</div>
                          </div>
                          <div className="lr">
                            <div className="lr1">Interest Amount</div>
                            <div className="lr2"> 30,000</div>
                          </div>
                          <div className="lr">
                            <div className="lr1">Repayment Date</div>
                            <div className="lr2">12-2-2023</div>
                          </div>
                          <div className="lr">
                            <div className="lr1">Repayment Source</div>
                            <div className="lr2"> Salary</div>
                          </div>
                          <div className="lr">
                            <div className="lr1">Loan Type</div>
                            <div className="lr2">Tenor Loan</div>
                          </div>
                        </div>
                      </div>
                      <div className="didid">
                        <h2 className="timeline-title to">Investment History</h2>
                        <div className="timelines">
                          <div className="timeline education">
                            <div className="timeline-items">
                              <div className="timeline-item">
                                <h3>Master of Science in information</h3>
                                <div className="location">Dublin </div>
                              </div>
                              <div className="timeline-item">
                                <h3>Master of Science in information</h3>
                                <div className="location">Dublin </div>
                              </div>
                              <div className="timeline-item">
                                <h3>Master of Science in information</h3>
                                <div className="location">Dublin </div>
                              </div>
                              <div className="timeline-item">
                                <h3>Bachelor of electrical engineering</h3>
                                <div className="location">
                                  North Maharashtra University, Jalgaon, India
                                </div>
                              </div>
                              <div className="timeline-item">
                                <h3>Boys town public school</h3>
                                <div className="location">
                                  Dublin Business School, Dublin, Ireland
                                </div>
                              </div>
                              <div className="timeline-item">
                                <h3>Boys town public school</h3>
                                <div className="location">
                                  Dublin Business School, Dublin, Ireland
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="share1">
                    <div className="btadm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      <div className="btnrl">
                        <button className="btn accept">Accept</button>
                        <button className="btn decline">Decline</button>
                      </div>
                    </div>
                    <div className="search-type">
                      <div className="job-time">
                        <div className="job-time-title">Type of Employment</div>
                        <div className="job-wrapper">
                          <div className="type-container">
                            <input
                              type="checkbox"
                              id="job1"
                              className="job-style"
                              defaultChecked=""
                      
                              checked
                              readOnly
                            />
                            <label htmlFor="job1">{jobdetail.jobemploymenttype}</label>
                          </div>
                        </div>
                      </div>
                      <div className="job-time">
                        <div className="job-time-title">Seniority Level</div>
                        <div className="job-wrapper">
                          <div className="type-container">
                            <input
                              type="checkbox"
                              id="job10"
                              className="job-style"
                              defaultChecked=""
                              checked
                              readOnly
                            />
                            <label htmlFor="job10">{jobdetail.workinglevel}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="search-type">
                      <div className="job-time">
                        <div className="job-time-title">Role Details</div>
                        <div className="job-wrapper">
                          <div className="type-container">
                            <input
                              type="checkbox"
                              id="job1"
                              className="job-style"
                              defaultChecked=""
                              checked
                              readOnly
                            />
                            <label htmlFor="job1">Salary Range</label>
                            <span className="job-number">${jobdetail.jobsalaryrange ? (jobdetail.jobsalaryrange) : ('120,000')}</span>
                          </div>
                          <div className="type-container">
                            <input type="checkbox" id="job2" className="job-style"        checked
                              readOnly/>
                            <label htmlFor="job2">Applications</label>
                            <span className="job-number">43</span>
                          </div>
                        </div>
                      </div>
                    </div>
           
                    <div className="btadm">
                      CV
                      <div className="btnrl">
                        <button
                          className="btn accept"
                          style={{
                            width: "100%",
                            padding: 8,
                            border: "none",
                            borderRadius: 4
                          }}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Applicationdata