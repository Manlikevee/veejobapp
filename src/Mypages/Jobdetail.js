import React, { useEffect,  useState } from "react";
import Layout from '../components/Layout/Layout'
import { toast } from 'react-toastify';
import axiosInstance from '../service/axiosinterceptor'
import { getUser } from "../service/auth";
import { Link } from "gatsby";

const Jobdetail = () => {
  const [isloading, setisloading] = useState(true);
  const [myresponsed, setmuresponsed] = useState('');
  const [responsedata, setresponsedata] = useState('');
  const [Usersname, setUsersname] = useState();
  const randomimages = [
    {
      
    }
  ]

  useEffect(() => {
    // Get the loanReference query parameter from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const mmmm = queryParams.get('jobid');
    setmuresponsed(mmmm);
    const myres = mmmm
    if (myres) {
    axiosInstance.get(`/userjobssinglepage/${myres}/`)
      .then(response => {
        console.log(response.data);
        toast.success('fetched data')
        setresponsedata(response.data);
        setUsersname(getUser().username)
        setisloading(false);
      })
      .catch(error => {
        toast.error('Error fetching profile data')
        console.error("Error fetching profile data:", error);
        setisloading(false);
      });

    }
    else{
      alert('no ref')
    }
  }, []);

  return (
    <div>
        <Layout>

        {isloading ?  ( <>Loading.......</> ) : (  
          
          <div className="wrapper detail-page">
  <div className="search-menu">
    <div className="search-bar">
      <input type="text" className="search-box" autofocus="" />
    </div>
    <div className="search-location">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-map-pin"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
      Londontowne, MD
    </div>
    <div className="search-job">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-briefcase"
      >
        <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
      <input type="text" placeholder="Job Type" />
    </div>
    <div className="search-salary">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth=".4"
      >
        <path
          d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z"
          stroke="currentColor"
        />
        <path
          d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z"
          stroke="currentColor"
        />
        <path
          d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z"
          stroke="currentColor"
        />
        <path
          d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z"
          stroke="currentColor"
        />
      </svg>
      <input type="text" placeholder="Salary Range" />
    </div>
    <button className="search-button">Find Job</button>
  </div>
  <div className="main-container">
    <div className="searched-jobs">
      <div className="searched-bar">
        <div className="searched-show">Showing 46 Jobs</div>
        <div className="searched-sort">
          Sort by: <span className="post-time">Newest Post </span>
          <span className="menu-icon">▼</span>
        </div>
      </div>
      <div className="job-overview">
        <div className="job-overview-cards">
          <div className="job-overview-card">
            <div className="job-card overview-card">
              <div className="overview-wrapper">
                <svg
                  viewBox="0 -13 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: "#2e2882" }}
                >
                  <g fill="#feb0a5">
                    <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                    <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                  </g>
                  <path
                    d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                    fill="#feb0a5"
                  />
                </svg>
                <div className="overview-detail">
                  <div className="job-card-title">UI / UX Designer</div>
                  <div className="job-card-subtitle">
                    2972 Westheimer Rd. Santa Ana.
                  </div>
                </div>
                <svg
                  className="heart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                </svg>
              </div>
              <div className="job-overview-buttons">
                <div className="search-buttons time-button">Full Time</div>
                <div className="search-buttons level-button">Senior Level</div>
                <div className="job-stat">New</div>
                <div className="job-day">4d</div>
              </div>
            </div>
          </div>
          <div className="job-overview-card">
            <div className="job-card overview-card">
              <div className="overview-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: "#fe5b5f" }}
                >
                  <path
                    d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z"
                    fill="#fff"
                  />
                </svg>
                <div className="overview-detail">
                  <div className="job-card-title">UI Developer</div>
                  <div className="job-card-subtitle">
                    1725 Preston Rd. Inglewood.
                  </div>
                </div>
                <svg
                  className="heart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                </svg>
              </div>
              <div className="job-overview-buttons">
                <div className="search-buttons time-button">Full Time</div>
                <div className="search-buttons level-button">Senior Level</div>
                <div className="job-stat">New</div>
                <div className="job-day">4d</div>
              </div>
            </div>
          </div>
          <div className="job-overview-card">
            <div className="job-card overview-card">
              <div className="overview-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: "#5c6bc0" }}
                >
                  <g fill="#fff">
                    <path d="M3.6 21.2h14.2l-.6-2.2 5.8 5V2.5C23 1 21.8 0 20.4 0H3.6A2.6 2.6 0 001 2.5v16.2c0 1.4 1.2 2.5 2.6 2.5zM14 5.7zM6.5 7C8.3 5.6 10 5.7 10 5.7l.2.1c-2.3.6-3.3 1.6-3.3 1.6.1 0 4.6-2.7 10.1 0 0 0-1-1-3.1-1.5l.2-.2c.3 0 1.8 0 3.5 1.3 0 0 1.8 3.1 1.8 7 0 0-1.1 1.6-4 1.7l-.7-1a4 4 0 002.2-1.4c-3.2 2-6 1.7-9.3.3h-.1l-.4-.2s.6 1 2.2 1.4l-.8 1c-2.8 0-3.8-1.8-3.8-1.8 0-3.9 1.8-7 1.8-7z" />
                    <path d="M14.3 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7zM9.7 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7z" />
                  </g>
                </svg>
                <div className="overview-detail">
                  <div className="job-card-title">User Interface Designer</div>
                  <div className="job-card-subtitle">
                    2972 Westheimer Rd. Santa Ana.
                  </div>
                </div>
                <svg
                  className="heart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                </svg>
              </div>
              <div className="job-overview-buttons">
                <div className="search-buttons time-button">Full Time</div>
                <div className="search-buttons level-button">Senior Level</div>
                <div className="job-stat">New</div>
                <div className="job-day">4d</div>
              </div>
            </div>
          </div>
          <div className="job-overview-card">
            <div className="job-card overview-card">
              <div className="overview-wrapper">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ backgroundColor: "#5c6bc0" }}
                >
                  <g fill="#fff">
                    <path d="M3.6 21.2h14.2l-.6-2.2 5.8 5V2.5C23 1 21.8 0 20.4 0H3.6A2.6 2.6 0 001 2.5v16.2c0 1.4 1.2 2.5 2.6 2.5zM14 5.7zM6.5 7C8.3 5.6 10 5.7 10 5.7l.2.1c-2.3.6-3.3 1.6-3.3 1.6.1 0 4.6-2.7 10.1 0 0 0-1-1-3.1-1.5l.2-.2c.3 0 1.8 0 3.5 1.3 0 0 1.8 3.1 1.8 7 0 0-1.1 1.6-4 1.7l-.7-1a4 4 0 002.2-1.4c-3.2 2-6 1.7-9.3.3h-.1l-.4-.2s.6 1 2.2 1.4l-.8 1c-2.8 0-3.8-1.8-3.8-1.8 0-3.9 1.8-7 1.8-7z" />
                    <path d="M14.3 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7zM9.7 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7z" />
                  </g>
                </svg>
                <div className="overview-detail">
                  <div className="job-card-title">User Interface Designer</div>
                  <div className="job-card-subtitle">
                    2972 Westheimer Rd. Santa Ana.
                  </div>
                </div>
                <svg
                  className="heart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                </svg>
              </div>
              <div className="job-overview-buttons">
                <div className="search-buttons time-button">Full Time</div>
                <div className="search-buttons level-button">Senior Level</div>
                <div className="job-stat">New</div>
                <div className="job-day">4d</div>
              </div>
            </div>
          </div>
        </div>
        <div className="job-explain">
          <img
            className="job-bg"
            alt=""
            src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            style={{ background: "rgb(46, 40, 130)" }}
          />
          <div className="job-logos">
            <svg
              viewBox="0 -13 512 512"
              xmlns="http://www.w3.org/2000/svg"
              style={{ backgroundColor: "#2e2882" }}
            >
              <g fill="#feb0a5">
                <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
              </g>
              <path
                d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                fill="#feb0a5"
              />
            </svg>
          </div>
          <div className="job-explain-content">
            <div className="job-title-wrapper">
              <div className="job-card-title">    { responsedata?.jobcard?.jobtitle }</div>
              <div className="job-action">
                <svg
                  className="heart"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-share-2"
                >
                  <circle cx={18} cy={5} r={3} />
                  <circle cx={6} cy={12} r={3} />
                  <circle cx={18} cy={19} r={3} />
                  <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
                </svg>
                <Link 
                to={`/app/Applications/?jobreference=${responsedata?.jobcard?.id}`}
                className="applybutton"
                  style={{
                    padding: 8,
                    color: "white",
                    borderRadius: 5,
                    marginInline: 9,
                    fontSize: 14,
                  }}
                >
                  apply
                </Link>
              </div>
            </div>
            <div className="job-subtitle-wrapper">
              <div className="company-name">
                Patreon <span className="comp-location">  { responsedata?.jobcard?.joblocation }.</span>
              </div>
              <div className="posted">
                Posted 8 days ago
                <span className="app-number">98 Application</span>
              </div>
            </div>
            <div className="explain-bar">
              <div className="explain-contents">
                <div className="explain-title">Experience</div>
                <div className="explain-subtitle">Minimum {responsedata?.jobcard?.jobminimumexperience} Year</div>
              </div>
              <div className="explain-contents">
                <div className="explain-title">Work Level</div>
                <div className="explain-subtitle">{responsedata?.jobcard?.workinglevel}</div>
              </div>
              <div className="explain-contents">
                <div className="explain-title">Employee Type</div>
                <div className="explain-subtitle">Full Time {responsedata?.jobcard?.jobemploymenttype}  Job</div>
              </div>
              <div className="explain-contents">
                <div className="explain-title">Offer Salary</div>
                <div className="explain-subtitle">$2150.0 / Month</div>
              </div>
            </div>
            <div className="overview-text">
              <div className="overview-text-header">Overview</div>
              <div className="overview-text-subheader">
                { responsedata?.jobcard?.jobdescription }
              </div>
            </div>
            {/* <div className="overview-text">
              <div className="overview-text-header">Job Description</div>
              <div className="overview-text-item">
                3+ years working as a product designer.
              </div>
              <div className="overview-text-item">
                A portfolio that highlights your approach to problem solving, as
                well as you skills in UI.
              </div>
              <div className="overview-text-item">
                Experience conducting research and building out smooth flows.
              </div>
              <div className="overview-text-item">
                Excellent communication skills with a well-defined design
                process.
              </div>
              <div className="overview-text-item">
                Familiarity with design tools like Sketch and Figma
              </div>
              <div className="overview-text-item">
                Up-level our overall design and bring consistency to end-user
                facing properties
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)  }

 
</Layout>
    </div>
  )
}

export default Jobdetail