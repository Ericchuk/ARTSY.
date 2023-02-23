import love from '../img/Vector (28).png';
import send from '../img/Vector (29).png';
import './cssfile/userComment.css';

export default function UserComment(){
    return(
        // create a section that enableusers drop comment on the live stream by appending what they wrote in the input or text area to the start array.
        <section className="user-comment">
            <div className="text-area-container">
                <input type="text" placeholder='Join conversation' />
                <img src={send} alt="send" />
            </div>
            <div className="love-container">
                <img src={love} alt="heart emoji" />
            </div>
        </section>
    )
}