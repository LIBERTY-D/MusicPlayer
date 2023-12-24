
import { useEffect, useRef, useState } from 'react'
import future from  "../assets/future-cover.jpeg"
import {FaPause,FaPlay,FaBars,FaFastForward } from "react-icons/fa"
import {HiMiniMagnifyingGlass } from "react-icons/hi2"
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { GrChapterPrevious } from "react-icons/gr";
import { CiRepeat } from "react-icons/ci";
import {music} from "../assets/musicArray"
import "../Styles/player.css"

function Player() {
  const[musicList,setMusicList] = useState([])
  const [autoPlay,setAutoplay] = useState(false)

  const[currentSong,setCurrentSong] = useState(0)
  const [isPlaying,setIsPlaying] = useState(false);
  let [nowTime,setNowTime] =  useState(0)
  const[lengthOfSong,setLengthOfSong] =useState(0)
  const audioTag =  useRef(null)
  const innerBarTag =  useRef(null)


  const handleDivClickFastForward = (event) => {
    const clickPosition = event.nativeEvent.offsetX;
    const totalWidth = event.currentTarget.clientWidth;
    const percentageClicked = clickPosition / totalWidth;
  

    const songDuration = audioTag.current.duration; 
    const newTime = songDuration * percentageClicked;
    audioTag.current.currentTime = newTime;
    setNowTime(newTime);
    
  };

  const handleFastForward = () => {

    const fastForwardDuration = 10; // in seconds
    const audio =  audioTag.current
    if(nowTime<lengthOfSong){;
      audio.currentTime+= fastForwardDuration
      setNowTime(nowTime+= fastForwardDuration)
    }
    
  };
  const  handleFastPrevious=()=>{
    const fastPrevious = 10;
    const audio =  audioTag.current
    if(nowTime!=0){;
      audio.currentTime-= fastPrevious
      setNowTime(nowTime-= fastPrevious)
    }
  }
  const handleRepeat= ()=>{
    const audio =  audioTag.current
    audio.currentTime = 0
  }

  const HandlPlay = ()=>{
    const element = audioTag?.current;
    if(element.paused){
      element.play()
      setIsPlaying(true)

    }else{
      element.pause()
      setIsPlaying(false)
    }
    setNowTime(element.currentTime)
    
  }
  const handlePreviousSong = ()=>{
    if(currentSong!=0){
      setCurrentSong(currentSong-1)
      setAutoplay(true)
    }
    
  }
  const handleNextSong = ()=>{
    if(currentSong <musicList.length-1){
      setCurrentSong(currentSong+1)
      setAutoplay(true)
    }
  }
 

useEffect(() => {
  setMusicList(music)
  const audio = audioTag.current;
  const handleTimeUpdate = () => {
    setNowTime(audio.currentTime);
  };

  const handleDurationChange = () => {
    setLengthOfSong(audio.duration);
  };

  audio.addEventListener('timeupdate', handleTimeUpdate);
  audio.addEventListener('durationchange', handleDurationChange);

  return () => {
    audio.removeEventListener('timeupdate', handleTimeUpdate);
    audio.removeEventListener('durationchange', handleDurationChange);
  };
}, []);


  return (
    <>
        <main className="player">
        {/*  header  */}
        <Header/>
        {/* cover image music */}
        <img src={future} alt="album art" className={`art ${isPlaying?"play":""}`}/>
       {/* music info */}
        <MusicInfo musicList={musicList} currentSong={currentSong}/>
        {/* player progress */}
         <PlayerProgress  handleDivClickFastForward={ handleDivClickFastForward} autoPlay={autoPlay} musicList={musicList} currentSong={currentSong} audioRef ={audioTag} innerBarTag={innerBarTag}  lengthOfSong={lengthOfSong} />
        {/*   controls */}
          <Controls  handleFastPrevious={ handleFastPrevious} handlePreviousSong={handlePreviousSong} handleNextSong={handleNextSong} handleRepeat={handleRepeat} handleFastForward={handleFastForward} isPlaying={isPlaying} HandlPlay={HandlPlay}  />
      
        <div className="bar"></div>
     
     </main>
  

    </>
  )
}


const Header =()=>{
  return <div className="music-header">
        <a href="#" className="button">
            <span className="player-actions"><FaBars/></span>
        </a>
        <p>Now Playing</p>
        <a href="#" className="button">
            <span className="player-actions"><HiMiniMagnifyingGlass/></span>
        </a>
      </div>
}


const Controls =  ({isPlaying,HandlPlay,handleFastForward,handleRepeat, handleNextSong,handlePreviousSong, handleFastPrevious})=>{
   return   <ul className="buttons">
      
        <a href="#" className="button button-medium" onClick={ handlePreviousSong}>
            <span className="player-actions"><MdOutlineSkipPrevious/></span>
        </a>
        <a href="#" className="button button-medium" onClick={handleFastPrevious} >
            <span className="player-actions"><GrChapterPrevious/></span>
        </a>
        
        <a href="#" className="button button-large" onClick={HandlPlay}>
            <span className="player-actions">{isPlaying?<FaPause/>:<FaPlay/>}</span>
        </a>
        <a href="#" className="button button-small" onClick={handleFastForward}>
            <span className="player-actions"><FaFastForward/></span>
        </a>
        <a href="#" className="button button-medium" onClick={handleNextSong}>
            <span className="player-actions"><MdSkipNext/></span>
        </a>
        <a href="#" className="button button-small" onClick={handleRepeat}>
            <span className="player-actions"> <CiRepeat/></span>
        </a>
</ul>
}


const MusicInfo=({musicList,currentSong})=>{
  const song =musicList!=null&& musicList[currentSong]
    return  <div className="info">
    <h1>{song?.artist}</h1>
    <p>{song?.title}</p>
  </div>
}


const PlayerProgress=({autoPlay,musicList,audioRef,innerBarTag,lengthOfSong,currentSong, handleDivClickFastForward})=>{

          const prog = (audioRef?.current?.currentTime/ lengthOfSong) * 100;
          const currentInMinutes = Math.floor(audioRef?.current?.currentTime/ 60);
          const currentInSeconds = Math.floor(audioRef?.current?.currentTime% 60);


         const durationInMinutes = Math.floor(lengthOfSong / 60);
          const durationInSeconds = Math.floor(lengthOfSong % 60);

        return   <div className="player-progress">
        <div className="player-progress-time">
      
            <p className="left">{`${currentInMinutes<10?"0"+currentInMinutes:currentInMinutes}`}:{currentInSeconds<10?"0"+currentInSeconds:currentInSeconds}</p>
            <p className="right">{`${durationInMinutes}:${durationInSeconds}`}</p>
        </div>
        <div className="player-progress-bar" ref={innerBarTag} onClick={handleDivClickFastForward} >
                <audio autoPlay={autoPlay} ref={audioRef}  src={musicList.length>0&&musicList[currentSong].song}></audio>
            <div className="player-progress-bar-inner" style={{width:`${prog}%`}}></div>
        </div>
      </div>
}
export  default Player