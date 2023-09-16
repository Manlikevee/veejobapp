import React from 'react'
import { Link } from 'gatsby'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Linkify from 'react-linkify';
import ScrollableFeed from 'react-scrollable-feed';





function TextWithHashtags({ text }) {
  // Use regular expression to find hashtags and replace them with anchor tags
  const processedText = text.split(/(#\w+)/g).map((segment, index) => {
    if (segment.startsWith('#')) {
      const hashtag = segment.substring(1); // Remove the '#'
      return (
        <Link key={index} to={`#${hashtag}`}>
          {segment}
        </Link>
      );
    }
    return segment;
  });

  return <div>{processedText}</div>;
}

const Modalbx = ({ show, closeModal,modaldata, LikeJob, newcomment, CommentJob, handleCommentTextInputChange, Mycommenttext }) => {
  return (
    <div>

{modaldata? (<div className="blogcardpopup"> 
<div className='close' onClick={closeModal}>X</div>
 
<div className={`bcardpop ${!modaldata.mypost?.image ? 'bcardtextonly' : ''}`}> 
   
   {modaldata.mypost?.image? (   <div className="bcardimg">
      <div className="bcardimgcontainer">
      <LazyLoadImage
            effect="blur"
              src={modaldata.mypost.image}
              alt=""
            />
      </div>
    </div>) : ('') }
 
   
    <div className="bcardcomment"> 
      <div className="socialmediapostcard">
        <div className="postcardheader">
          <div className="postcardprofilephoto">
            <img
              src="https://plus.unsplash.com/premium_photo-1670588892214-19d7d31e4293?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </div>
          <div className="postcarddetails">
            <div className="postcardname">@{modaldata?.mypost.user.username} </div>
            <div className="postcardtimeago"> 20 de janeiro </div>
          </div>
        </div>
        <div className="postcardbody">
        <TextWithHashtags  text= {modaldata?.mypost?.message}  />
      
        </div>
        <div className="posthistory">
          <div className="postdata">
            <span> {modaldata?.mypost?.likes.length } </span>Likes
          </div>{" "}
          <div className="postdata">
          {modaldata?.mypost?.testj.length }<span>Comments</span>
          </div>
        </div>
        <div className="postcardbuttons">
          <div className="postcardline" />
          <div className="myactionbuttons">
            <div className="mypostbn">
              <button onClick={() => LikeJob(modaldata?.mypost?.messageid)} >
                <span className="material-symbols-outlined activated">
                  favorite
                </span>{" "}
                Like
              </button>
            </div>
            <div className="mypostbn">
              <button>
                <span className="material-symbols-outlined">chat</span>
                Comment
              </button>
            </div>
            <div className="mypostbn">
              <button>
                <span className="material-symbols-outlined">share</span>
                Share
              </button>
            </div>
          </div>
          <div className="postcardline" />
        </div>
      </div>
      <ScrollableFeed>
      <div className="commenthistory">
     {modaldata?.mypost?.testj.map((data, index) => (
       <div className="commentflex" key={data.commentid}>
       <div className="commentinitials">vs</div>
       <div className="commentbox">
       <h4>{data.sender}</h4>
       <Linkify>     {data.message} </Linkify>
       </div>
     </div>

     ))  }
       

      </div>
      </ScrollableFeed>
      <div className="comments">
        <div className="commentdata">
        <div className="commentinput">
        <input type="text" placeholder="Leave A Commment" 
           value={Mycommenttext}
          onChange={handleCommentTextInputChange}
        />{" "}
     
     {newcomment ? (<button onClick={() => CommentJob(modaldata?.mypost?.messageid)}>
          
     <span className="send ">
              <div className="circle">
              <span class="material-symbols-outlined zmdi loading-icon zmdi-mail-send">
              cached
</span>
</div>
</span>

        </button> )
     : (<button onClick={() => CommentJob(modaldata?.mypost?.messageid)}>
          
          <span className="material-symbols-outlined">send</span>
        </button>) }
   
     
      </div>
        </div>
      </div>
    </div>
  </div>
</div>) : ('LOADING') }



    </div>
  )
}

export default Modalbx