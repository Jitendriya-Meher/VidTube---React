import React, { useEffect, useState } from 'react';
import "./Recommended.css";
import { Link, useParams } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';

const Recommended = () => {

    const {categoryId,videoId} = useParams();

    const [ apiData, setApiData ] = useState([]);

    const fetchData = async () => {
        try{
            const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=45&videoCategoryId=${categoryId}&key=${API_KEY}`;
            const res = await fetch(url);
            const data = await res.json();

            console.log('resc',data.items);

            setApiData(data.items);
        }
        catch(err){

        }
    }

    useEffect(()=>{
        fetchData();
    },[categoryId,videoId]);

  return (
    <div className='recommended'>

        

        {
            apiData.map((item,i) => (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={i}>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vid-info">
                        <h4>
                            {item.snippet.title}
                        </h4>
                        <p>
                            {item.snippet.channelTitle}
                        </p>
                        <p>
                            {value_converter(item.statistics.viewCount)} views
                        </p>
                    </div>
                </Link>
            ))
        }
       

    </div>
  )
}

export default Recommended