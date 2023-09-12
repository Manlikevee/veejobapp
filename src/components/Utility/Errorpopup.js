import { Link } from 'gatsby'
import React from 'react'

const Errorpopup = () => {
  return (
    <div className="loading-over2" style={{ display: "block" }}>
    <div className="popup">
      <Link to='/app/Alljobs' id="close2">×</Link>
      <br />
      <div className="secoact">
        <div className="logoac">
          <div className="ccccaaa">
            <div className="canclb">
            <span class="material-symbols-outlined">
priority_high
</span>

            </div>
          </div>
        </div>
        <div className="logomen"> Error</div>
        <div className="logobod">
        We could not process your request. Please try again later.
        </div>
        <div className="logobtn">
          {/*                    <a href="" type="button"  class="arwbtn"> Proceed </a>*/}
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Errorpopup