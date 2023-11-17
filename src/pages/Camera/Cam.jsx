import React, { useRef, useEffect, useState } from 'react'
import './cam.css'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import DocPopup from './DocPopup';

const Cam = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo =()=>{
        navigator.mediaDevices
        .getUserMedia({
            video : { width: 1920, height :1080}
        })
        .then(stream =>{
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch (err =>{
            console.error(err);
        })
    }
    const takePhoto =()=>{
        const width = 414;
        const height=width/(16/9);
        let video = videoRef.current;
        let photo= photoRef.current;

        photo.width=width;
        photo.height=height;

        let ctx = photo.getContext('2d');
        ctx.drawImage (video, 0, 0, width, height);
        setHasPhoto(true);
        }
        const closephoto =()=>{
            let photo= photoRef.current;
            let ctx = photo.getContext('2d');
            ctx.clearRect(0,0, photo.widh, photo.height);
            setHasPhoto(false);
        }

    useEffect(()=>{
        getVideo();
    }, [videoRef]);

  return (
    <div className='cam_container'>
        
        <div className='camera'>
            <video  className='video__container'ref={videoRef}></video>
            <button className='captureButton' onClick={takePhoto}>SNAP!</button>
        </div>
        <div className={'result '+ (hasPhoto ? 'hasPhoto' : ' ')}>
            <canvas className='canvas__container'ref={photoRef}></canvas>
            {/* <Link  to="/docattendance"><button  className='captureButton' onClick={closephoto}>CHECK!</button></Link> */}
            <DocPopup/>
        </div>
      
    </div>
  )
}

export default Cam