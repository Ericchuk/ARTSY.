import efoImage from '../img/Ellipse 62.png';
import madamImage from '../img/Ellipse 63.png';
import bomaImage from '../img/Ellipse 64.png';
import ellaImage from '../img/Ellipse 65.png';
import edogo from '../img/Ellipse 52.png';
import ellaFlynn from '../img/Ellipse 48.png';
import uncleLuca from '../img/Ellipse 46.png';
import opeyemi from '../img/Ellipse 47.png';
import celestina from '../img/Ellipse 49.png';
import samy from '../img/Ellipse 63.png';
import lovei from '../img/Vector (21).png';
import loveii from '../img/Vector (22).png';
import loveiii from '../img/Vector (23).png';
import loveiv from '../img/Vector (24).png';
import lovev from '../img/Vector (25).png';
import lovevi from '../img/Vector (26).png';
import lovevii from '../img/Vector (27).png';
import './cssfile/liveStreamComment.css'


export default function LiveStreamComment(){
    const comments = [
        {
            id:0,
            name:"Efo phynn",
            comment:"Tight bid",
            img:efoImage,
        },
        
        {
            id:1,
            name:"Madam Benson",
            comment:"God abeg",
            img:madamImage,
        },
        {
            id:2,
            name:"boma jango",
            comment:"0.900 eth",
            img:bomaImage,
        },
        {
            id:3,
            name:"Ella Flynn",
            comment:"Love thissss!",
            img:ellaImage,
        },
        {
            id:4,
            name:"Flynn Parker",
            comment:"movement",
            img:edogo,
        },
        {
            id:5,
            name:"Ella Flynn",
            comment:"Tight bid",
            img:ellaFlynn,
        },
        {
            id:6,
            name:"Uncle Luca",
            comment:"instant bid",
            img:uncleLuca,
        },
        {
            id:7,
            name:"Opeyemi Tiwalope",
            comment:"$45.00",
            img:opeyemi,
        },
        {
            id:8,
            name:"Celestina Quin",
            comment:"gm frens! ready to bid",
            img:celestina,
        },
        {
            id:9,
            name:"Samy Ellen",
            comment:"i love this. $20.00 for me",
            img:samy,
        },
    ]


    // return a mapped array of each data 

    const comment = comments.map((each) => {
        return(
            <div className="live-stream-comment-container" key={each.id}>
                <img src={each.img} alt={each.name} />
                <div>
                    <h4>{each.name}</h4>
                    <p>{each.comment}</p>
                </div>
            </div>
        )
    })

    // create an array of images 
    const loves = [
        {
            id:0,
            img:lovevii,
        },
        {
            id:1,
            img:lovevi,
        },
        {
            id:2,
            img:lovev,
        },
        {
            id:3,
            img:loveiv,
        },
        {
            id:4,
            img:loveiii,
        },
        {
            id:5,
            img:loveii,
        },
        {
            id:6,
            img:lovei,
        },
    ]   

    // map through the arrray of images and return a img tag

    const love = loves.map((each) => {
        return(
            <img src={each.img} alt="love" key={each.id} />
        )
    })

    return(
        <section className="live-stream-comment">
            <aside>{comment}</aside>
            <aside className='love'>{love}</aside>
        </section>
    )
}