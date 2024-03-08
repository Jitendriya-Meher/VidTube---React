import React from 'react';
import "./PlayVideo.css";
import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video} controls autoPlay muted loop></video>
        <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam incidunt excepturi!
        </h3>
        <div className="play-video-info">
            <p>
                1234 Views &bull; 2day ago
            </p>
            <div className="">
                <span>
                    <img src={like} alt="" />
                    125
                </span>
                <span>
                    <img src={dislike} alt="" />
                    125
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
            <img src={jack} alt="" />
            <div className="">
                <p>
                    Lorem, ipsum dolor.
                </p>
                <span>
                    1M Subscribers
                </span>
            </div>
            <button>
                Subscribe
            </button>
        </div>

        <div className="vid-description">
            <p>
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptates autem obcaecati veritatis modi totam quisquam iste voluptatum sunt qui.
            </p>

            <hr />

            <h4>
                130 comments
            </h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>
                        Jack Richer
                        <span>
                            1 day ago
                        </span>
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, atque, assumenda dolorem ipsa totam maiores quis vero praesentium quisquam quae expedita libero omnis, facere quasi obcaecati consequuntur. Minus, et dolorum!
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>
                            244
                        </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>
                        Jack Richer
                        <span>
                            1 day ago
                        </span>
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, atque, assumenda dolorem ipsa totam maiores quis vero praesentium quisquam quae expedita libero omnis, facere quasi obcaecati consequuntur. Minus, et dolorum!
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>
                            244
                        </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>
                        Jack Richer
                        <span>
                            1 day ago
                        </span>
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, atque, assumenda dolorem ipsa totam maiores quis vero praesentium quisquam quae expedita libero omnis, facere quasi obcaecati consequuntur. Minus, et dolorum!
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>
                            244
                        </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>
                        Jack Richer
                        <span>
                            1 day ago
                        </span>
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, atque, assumenda dolorem ipsa totam maiores quis vero praesentium quisquam quae expedita libero omnis, facere quasi obcaecati consequuntur. Minus, et dolorum!
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>
                            244
                        </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3>
                        Jack Richer
                        <span>
                            1 day ago
                        </span>
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, atque, assumenda dolorem ipsa totam maiores quis vero praesentium quisquam quae expedita libero omnis, facere quasi obcaecati consequuntur. Minus, et dolorum!
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>
                            244
                        </span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default PlayVideo