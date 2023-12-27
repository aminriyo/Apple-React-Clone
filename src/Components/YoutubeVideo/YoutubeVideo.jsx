import React, { useEffect, useState } from 'react'
import "./YoutubeVideo.css"
function YoutubeVideo() {
    const [video, setVideo] = useState([]);
    useEffect(() => {
       fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCERmUOqngBaYPnIsp4Rg4E0_kGQbhIjr0
&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9
`)
           .then((res) => {
               return res.json()
               
           })
           .then((data) => {
               console.log(data)
               const youtubeVideos = data.items
               setVideo(youtubeVideos)
           })
           .catch((err) => {
            console.log("err")
        })
    }, []);
    console.log(video)
  return (
      <div>
         <div className="youtubeVideosWrapper">
              <div className="container">
    
                  <div className="row h-100 align-items-center justify-content-center text-center">
                      <div className='col-12'>
                          <div className='video-title bold'>Latest Videos</div>
                      </div>
                  </div>

                  <div className="row">
                      {video.map((singleV) => {
                          const Vid = `https://www.youtube.com/watch?v=${singleV.id.videoId}` 
                          return (
                      
                              <div className='col-sm-12 col-md-4'>

                                  <div className="singleVideoWrapper">
                                  
                                      
                                      {/* video thumbnails */}
                                      <div className="videothumbnails">
                                          <a href={Vid} target="_blank">
                                              <img src={singleV.snippet.thumbnails.high.url} alt="video img" />
                                          </a>
                                      </div>
                                  
                                      <div className="videoinfo">
                                          <div className="vidoeTitle">
                                              <a href={Vid} target="_blank">
                                                  
                                                {singleV.snippet.title}  
                                          </a>
                                          </div> 
                                          <div className="videoDesc">
                                              {singleV.snippet.description}   
                                          </div>

                                      </div>
                                  
                                  </div>  



                              </div>
                              
                          )
                      })
                          
                      }

</div>

</div>


         </div>

    </div>
  )
}

export default YoutubeVideo