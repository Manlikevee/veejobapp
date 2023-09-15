import React, { useState, useEffect } from 'react';
import { getUser } from '../../service/auth'
import { Link } from 'gatsby'
import TawkToChat from '../Utility/TawkToChat';

const Home = ({responseData,timeOfDay, Usersname}) => {
  const [activityDataList, setActivityDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messagedata, setmessageData] = useState([]);
  const [newmessagedata, setnewmessagedata] = useState([]);
  
  useEffect(() => {
    setActivityDataList(responseData.jobserialized);
    setmessageData(responseData.usecase)
    setnewmessagedata(responseData.allmessages)
    setLoading(false);
  });


  return (
    <div>
      <TawkToChat/>
<div className="wrapper detail-page">
  <div className="main-content">
    <br />
    <div className="toptextdata">Good {timeOfDay} {getUser().username}</div>
    <div className="assenttext">Here is what we have for you today</div>
    <div className="dashboardintroduction">
      <div className="dashboarddatacard">
        <div className="dbicons submit">
          <span className="material-symbols-outlined">data_table</span>
        </div>
        <div className="dbtextdata">
          <div className="dbtitle">30</div>
          <div className="dbsubtext">Submitted application</div>
        </div>
      </div>
      <div className="dashboarddatacard rolematch">
        <div className="dbicons match">
          <span className="material-symbols-outlined">mediation</span>
        </div>
        <div className="dbtextdata">
          <div className="dbtitle">30</div>
          <div className="dbsubtext">Role Match</div>
        </div>
      </div>
      
      
      <Link  to='/app/Saves' className="dashboarddatacard bookmark">
        <div className="dbicons mysave">
          <span className="material-symbols-outlined">bookmarks</span>
        </div>
        <div className="dbtextdata">
          <div className="dbtitle">30</div>
          <div className="dbsubtext">Saved application</div>
        </div>
      </Link>
   
   
    </div>
    <br />
    <br />
    <br />
    <div className="veedbflex">
      <div className="dbflexsideone">
        <div className="job-card-title dbd">
          Job Alerts
          <div className="containerflex">
            <div className="jmini">Monitor artist sales, reviews, etc.</div>
            <div className="forminput">
              <input
                type="email"
                placeholder="Search for Job"
                name="username"
                id="id_username"
              />
            </div>
          </div>
        </div>
        <div className="jobssection">
          <div className="dbjobscard">
            <div className="cardcolumntop">
              <div className="dbcompanylogo">
                <img
                  src="https://nigerialogos.com/logos/omenka/omenka.svg"
                  alt=""
                />
              </div>
              <div className="dbcompanylocation">
                <div className="spanicon">
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
                <div className="local">Abuja, Nigeria</div>
              </div>
            </div>
            <div className="cardcolumntitle">
              <div className="dbjobservice">Financial Services</div>
              <div className="dbjobtitle">Risk Consulting Director</div>
            </div>
            <div className="cardcolumnbody">
              <div className="job-card-subtitle bigs">
                victo Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Porro, ipsum est veniam pariatur tempora modi molestias mollitia
                deleniti distinctio minima voluptatibus alias dolore corrupti
                molestiae. Nobis facere dolorem tempora accusamus modi, commodi
                sit amet eos voluptates soluta provident facilis ab suscipit!
                Explicabo sequi quo amet dolor, quam nesciunt facere error!
              </div>
            </div>
            <div className="dbtags">
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">
                  Full Time
                </button>
                <button className="search-buttons detail-button">
                  Min. 1 Year
                </button>
                <button className="search-buttons detail-button">
                  Senior Level
                </button>
              </div>
            </div>
          </div>
          <div className="dbjobscard">
            <div className="cardcolumntop">
              <div className="dbcompanylogo">
                <img
                  src="https://nigerialogos.com/logos/seedbuilders/seedbuilders.png"
                  alt=""
                />
              </div>
              <div className="dbcompanylocation">
                <div className="spanicon">
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
                <div className="local">Abuja, Nigeria</div>
              </div>
            </div>
            <div className="cardcolumntitle">
              <div className="dbjobservice">Financial Services</div>
              <div className="dbjobtitle">Risk Consulting Director</div>
            </div>
            <div className="cardcolumnbody">
              <div className="job-card-subtitle bigs">
                victo Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Porro, ipsum est veniam pariatur tempora modi molestias mollitia
                deleniti distinctio minima voluptatibus alias dolore corrupti
                molestiae. Nobis facere dolorem tempora accusamus modi, commodi
                sit amet eos voluptates soluta provident facilis ab suscipit!
                Explicabo sequi quo amet dolor, quam nesciunt facere error!
              </div>
            </div>
            <div className="dbtags">
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">
                  Full Time
                </button>
                <button className="search-buttons detail-button">
                  Min. 1 Year
                </button>
                <button className="search-buttons detail-button">
                  Senior Level
                </button>
              </div>
            </div>
          </div>

          <>
                {activityDataList?.length > 0 ? (
                  activityDataList.map((activityData, index) => (
          <div className="dbjobscard">
            <div className="cardcolumntop">
              <div className="dbcompanylogo">
                <img
                  src="https://nigerialogos.com/logos/serah_kassim/serah_kassim.png"
                  alt=""
                />
              </div>
              <div className="dbcompanylocation">
                <div className="spanicon">
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
                <div className="local">{activityData.joblocation}</div>
              </div>
            </div>
            <div className="cardcolumntitle">
              <div className="dbjobservice">{activityData.jobcategory}</div>
              <div className="dbjobtitle">{activityData.jobtitle}</div>
            </div>
            <div className="cardcolumnbody">
              <div className="job-card-subtitle bigs">
            {activityData.jobdescription}
              </div>
            </div>
            <div className="dbtags">
              <div className="job-detail-buttons">
                <button className="search-buttons detail-button">
                 {activityData.jobemploymenttype}
                </button>
                <button className="search-buttons detail-button">
                  Min. {activityData.jobminimumexperience} Year
                </button>
                <button className="search-buttons detail-button">
                  {activityData.workinglevel}
                </button>
              </div>
            </div>
          </div>   ))
           ) : '' }
</>

        </div>
      </div>
      <div className="dbsideflextwo">
        <div className="messagingbox">
          <div className="msgtitle">
            <div className="job-card-title dbd">Messages</div>
            <div className="jmini">Discover Opportunities..</div>
          </div>
          <div className="messagingflow">
          {/* <>
          {messagedata.length > 0 ? (
                  messagedata.map((md, index) => (
         
          <Link to={`/app/Messaging/?messageid=${md.messageid}`} className="dbmessagingbox">
              <div className="messagingboxicon">
                <img
                  src="https://i.pinimg.com/564x/f8/25/2a/f8252af763f0bb3b53a0cb8477f80711.jpg"
                  alt=""
                />
              </div>
              <div className="dbmessagingtext">
                <div className="job-card-title">
                  {md.sender.username == Usersname ? (md.reciever.username) : (md.sender.username) }
                  </div>
                <div className="jmini">
                  victor odah ebube dbd d Lorem ipsum dolor sit.
                </div>
              </div>
            </Link>   ))
           ) : '' }
</> */}

<>
{newmessagedata?.length > 0 ? (
                  newmessagedata.map((md, index) => (
         
          <Link to={`/app/Messaging/?messageid=${md.messageid.messageid}`} className="dbmessagingbox">
              <div className="messagingboxicon">
              {md.messageid.sender.username == Usersname ? (
                <>                <img
                src={md.messageid.receiver_profile.avatar}
                alt=""
              />
             
                </>
                ) : ( <img
                  src={md.messageid.sender_profile.avatar}
                  alt=""
                />) }
             
           
              </div>
              <div className="dbmessagingtext">
                <div className="job-card-title">
                  {md.messageid.sender.username == Usersname ? (md.messageid.reciever.username) : (md.messageid.sender.username) }
                  </div>
                <div className="jmini">
                  {md.testj.length > 0 ? md.testj[md.testj.length - 1].message : ('Send a message now') }
               
                </div>
              </div>
            </Link>   ))
           ) : '' }
</>
            {/* <div className="dbmessagingbox">
              <div className="messagingboxicon">
                <img
                  src="https://i.pinimg.com/564x/37/ef/13/37ef13b5f1d38d72b01ff07675b4d8bd.jpg"
                  alt=""
                />
              </div>
              <div className="dbmessagingtext">
                <div className="job-card-title">Victor Odah</div>
                <div className="jmini">
                  victor odah ebube dbd d Lorem ipsum dolor sit.
                </div>
              </div>
            </div>
            <div className="dbmessagingbox">
              <div className="messagingboxicon">
                <img
                  src="https://i.pinimg.com/564x/00/29/93/002993ca60ccc2ad63e90d60c019163f.jpg"
                  alt=""
                />
              </div>
              <div className="dbmessagingtext">
                <div className="job-card-title">Victoria justice</div>
                <div className="jmini">
                  victor odah ebube dbd d Lorem ipsum dolor sit.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Home