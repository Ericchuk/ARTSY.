import eyes from '../img/Vector (20).png';
import close from '../img/Vector (3).png';
import './cssfile/livePageHeader.css';

export default function LivePageHeader(){
    console.log(window.location.pathname)
    return(
        <section className="live-stream-header">
            <div className="live-stream-container">
                <h3>Tag: Lost or Wither</h3>
                <div className="live-stream-indicators">
                    <span>Live</span>
                    <span className='eyes-container'><img src={eyes} alt="views"/>295</span>
                    <img src={close} alt="close" />
                </div>
            </div>
        </section>
    )
}