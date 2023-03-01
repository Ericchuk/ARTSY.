import footerImage from "../img/Rectangle 299.png";
import footerImageDesktop from "../img/Rectangle 299 (7).png";
import footerImageDesktop1 from "../img/Rectangle 301.png";
import footerImageDesktop2 from "../img/Rectangle 300.png";
import { useState,useEffect } from "react";
import './cssfile/topCreator.css'

export default function TopCreators(){
    const [id, setId] = useState(0)

    const [changePicture] = useState([
     {id:0, img:footerImageDesktop},
     {id:1, img:footerImageDesktop1},
     {id:2, img:footerImageDesktop2}
    ])
 
     useEffect(() => {
      const interval = setInterval(() => {

        if(id === 2){
          setId(0)
        }else{
          setId(id + 1)
        }
        
      }, 3000)
      // clearing the interval
      return () => clearInterval(interval);
     }, [id])


    return(
        <aside className="footer-aside-1">
        <div>
          <h2>TOP CREATORS OF THE WEEK</h2>
          <ul>
            {window.innerWidth > 699 ? (
              <div className="indicator-container">
                <div className="indicator"></div>
              </div>
            ) : (
              ""
            )}
            <ul>
              <li>Editorials</li>
              <li>Fashion</li>
              <li>Life</li>
              <li>Blueprint</li>
            </ul>
          </ul>
        </div>

        <p>
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <h3>CIRCA</h3>
        <h2 className="numb">1985</h2>
        {window.innerWidth < 699 ? <img src={footerImage} alt="monalisa" /> : <img src={changePicture[id].img} alt="monalisa" className={changePicture[id].id === id ? "top-creator-image current" : "top-creator-image"}/>} 
      </aside>
    )
}