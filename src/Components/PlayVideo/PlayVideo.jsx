import React, { useEffect, useState } from 'react';
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useParams } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const PlayVideo = () => {

    const {videoId} = useParams();

    const [ apiData, setApiData] = useState(null);
    const [ channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        try{
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();

            // console.log("video",data.items[0]);
            setApiData(data.items[0]);
        }
        catch(err){

        }
    }

    const fetchChannelData = async () => {
        try{
            const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();

            // console.log("channel",data);

            setChannelData(data.items[0]);

            const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

            const res2 = await fetch(commentUrl);
            const data2 = await res2.json();

            // console.log("comment data", data2.items);
            setCommentData(data2.items);
        }
        catch(err){
            console.log("channel error",err.messaage);
        }
    }

    useEffect(()=>{
        fetchVideoData()
    },[videoId]);

    useEffect(()=>{
        fetchChannelData();
    },[apiData]);

  return (
    <div className='play-video'>
        
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>
            {apiData ? apiData.snippet.title:"Title Here"}
        </h3>
        <div className="play-video-info">
            <p>
                {apiData?value_converter(apiData.statistics.viewCount) : "16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"6 days ago"}
            </p>
            <div className="">
                <span>
                    <img src={like} alt="" />
                    {apiData? value_converter(apiData.statistics.likeCount) :"8K"}
                </span>
                <span>
                    <img src={dislike} alt="" />
                    1K
                </span>
                <span>
                    <img src={share} alt="" />
                    Share
                </span>
                <span>
                    <img src={save} alt="" />
                    Save
                </span>
            </div>
        </div>

        <hr />

        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div className="">
                <p>
                    {apiData?apiData.snippet.channelTitle:""}
                </p>
                <span>
                    {channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers
                </span>
            </div>
            <button>
                Subscribe
            </button>
        </div>

        <div className="vid-description">
            <p>
                {apiData?apiData.snippet.description.slice(0,250):"description here"}
            </p>
            <hr />

            <h4>
                {apiData?value_converter(apiData.statistics.commentCount):"150"} comments
            </h4>

            {
                commentData.map((item,i) => (
                    <div className="comment" key={i}>
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div className="">
                            <h3>
                                {item.snippet.topLevelComment.snippet.authorDisplayName}
                                <span>
                                    {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}
                                </span>
                            </h3>
                            <p>
                                {item.snippet.topLevelComment.snippet.textDisplay}
                            </p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>
                                    {value_converter(item.snippet.topLevelComment.snippet.likeCount)}
                                </span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                ))
            }
            
            

        </div>


    </div>
  )
}

export default PlayVideo