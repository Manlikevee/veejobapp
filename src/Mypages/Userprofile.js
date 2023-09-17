import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout'
import {  handleLogin, isLoggedIn, getUser , logout}  from '../service/auth'
import { Link } from 'gatsby'
import { toast } from 'react-toastify';
import axiosInstance from '../service/axiosinterceptor';



const Userprofile = () => {
  const [initialFetchCompleted, setInitialFetchCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState('');
  const [Usersname, setUsersname] = useState();

  useEffect(() => {
    let initialFetchCompleted = false;
  
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/userprofile');
        // Handle the response as needed
       

        if (!initialFetchCompleted) {
          toast.success('successfully fetched');
        } 
        
      
  
        setInitialFetchCompleted(true)
        setResponseData(response.data);
        console.log(response.data);
        setLoading(false);
  
        // Set initialFetchCompleted to true once the initial fetch is successful
        if (!initialFetchCompleted) {
          initialFetchCompleted = true;
        }
      } catch (error) {
        // Handle errors
        console.error('GET request error', error);
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error('An error occurred while Loading Your Data');
        }
        setLoading(false);
      }
    };
  
    const intervalId = setInterval(() => {
      if (initialFetchCompleted) {
        fetchData();
      } else {
        console.log('Waiting');
      }
    }, 20000);
  
    // Fetch data initially
    fetchData();
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <Layout>

{loading ? ( <>Loading.......</> ) : (   
  <>
{responseData ? (
  <div>
  <div className="wrapper detail-page">
<div className="main-container">
  <div style={{ lineHeight: "normal", width: "100%" }}>
    <div className="adminprofile">
      <div className="shareintotwo">
        <div className="share1">
          <div className="tpadm">
            <div className="profiendedit">
              <div className="profilepho">
                <img
                  src={responseData.userprofile.avatar}
                  alt=""
                />
              </div>
              <br />
              <div className="nam"> {responseData.userprofile.user.first_name + '' + responseData.userprofile.user.last_name}</div>
              <div className="rolee">Admin</div>
              <div className="state">Lagos, Nigeria</div>
              <div className="emai">  {getUser().email} </div>
              <div className="phon">{responseData.userprofile.phonenumber}</div>
            </div>
          </div>
          <div className="btadm">
            CV
            <div className="btnrl">
              <Link to= ''
                className="btn accept"
                style={{
                  width: "100%",
                  padding: 8,
                  border: "none",
                  borderRadius: 4
                }}
              >
                Download
              </Link>
            </div>
          </div>
          <div className="btadm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <div className="btnrl">
              <button className="btn accept">Accept</button>
              <button className="btn decline">Decline</button>
            </div>
          </div>
        </div>
        <div className="share2">
          <div className="tpsds">
            <div className="fif">
              <div className="to">Biography</div>
              <div
                className="overview-text-subheader fls"
              >
                <br />
      

      {responseData.userprofile.bio}

              </div>
            </div>
          </div>
          <div className="to"> Work experience</div>

          {responseData.workexp.map((activityData, index) => (
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

          {/* <div className="tpsds">
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
                        Risk Consulting Director{" "}
                        <span>(Financial Services)</span>
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
                      <div className="jsector">ARM Insurance</div>
                      <div className="jlocation">Lagos,Nigeria</div>
                    </div>
                    <div className="timeblock">
                      <div className="jfrom">Jun 2016 —</div>
                      <div className="jto">July 2021</div>
                      <div className="jperiod">7 yrs 3 months</div>
                    </div>
                    <div className="jobdescription overview-text-subheader">
                      Work with clients and web studios as freelancer. Work in
                      next areas: eCommerce web projects; creative landing
                      pages; iOS and Android apps; corporate web sites and
                      corporate identity sometimes. We are looking for a
                      user-interface/user-experience (UI/UX) designer able to
                      understand our business requirements and any technical
                      limitations, as well as be responsible for conceiving
                      and conducting user research, interviews and surveys,
                      and translating them into sitemaps, user flows, customer
                      journey maps, wire-frames, mock-ups and prototypes. The
                      UI/UX designer will also be expected to design the
                      overall functionality of the product, and in order to
                      ensure a great user experience, iterate upon it in
                      accordance with user-testing. We are looking for a
                      user-interface/user-experience (UI/UX) designer able to
                      understand our business requirements and any technical
                      limitations, as well as be responsible for conceiving
                      and conducting user research, interviews and surveys,
                      and translating them into sitemaps, user flows, customer
                      journey maps, wire-frames, mock-ups and prototypes. The
                      UI/UX designer will also be expected to design the
                      overall functionality of the product, and in order to
                      ensure a great user experience, iterate upon it in
                      accordance with user-testing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="to"> Education</div>

          {responseData.edu.map((activityData, index) => (
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
              <div className="to">Employment Information</div>
              <div className="fl">
                <div className="bt">
                  Job Title: <span>Access Bank</span>{" "}
                </div>
                <div className="bt">
                Job Sector: <span>0774369899</span>
                </div>
                <div className="bt">
                Company Name: <span>Odah Victor Ebube</span>
                </div>
         
              </div>
            </div>
          </div>
          <div className="tpsds">
            <div className="fif">
              <div className="to">Plan Information</div>
              <div className="fl">
                <div className="bt">
                  Plan Name: <span>Access Bank</span>{" "}
                </div>
          
                <div className="bt">
                 Start Date: <span>13-4-2023</span>
                </div>
                <div className="bt">
                  Expiry Date: <span>13-9-2023</span>
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
              <div className="to">More Information</div>
              <br />
              <div className="lst">
                Profile Status: <span className="stat">{responseData.userprofile.profile_status}</span>
              </div>
              <div className="lrs">
                <div className="lr">
                  <div className="lr1">Gender</div>
                  <div className="lr2"> {responseData.userprofile.gender} </div>
                </div>
                <div className="lr">
                  <div className="lr1">Security Lock</div>
                  <div className="lr2"> {responseData.userprofile.security_lock}</div>
                </div>
                <div className="lr">
                  <div className="lr1">Profile Id</div>
                  <div className="lr2"> {responseData.userprofile.accountnumber}</div>
                </div>
                <div className="lr">
                  <div className="lr1">country </div>
                  <div className="lr2">{responseData.userprofile.country}</div>
                </div>
                <div className="lr">
                  <div className="lr1">city </div>
                  <div className="lr2"> {responseData.userprofile.city}</div>
                </div>
                <div className="lr">
                  <div className="lr1">Form Of Id</div>
                  <div className="lr2"> {responseData.userprofile.form_of_id}</div>
                </div>
              </div>
            </div>
            <div className="didid">
              <h2 className="timeline-title to">Notification History</h2>
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
      </div>
    </div>
  </div>
</div>
</div>


  </div>
) : ('An error Occured') }


  </>
) }

    </Layout>
  )
}

export default Userprofile