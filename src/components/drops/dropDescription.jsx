import { useState } from 'react';
import './cssfile/dropDescription.css';

export default function DropDescription(){
    const [notify, setNotify] = useState(false);

    function notifies(){
        setNotify(!notify)
    }
    return(
        <section className="drop-description">
            <h2>Upcoming drops</h2>
            <p>You may turn on notifications so that no drop will miss you.</p>
            {!notify ? <button onClick={notifies}>Notify me</button> : <button onClick={notifies}>Will be notified</button>}
        </section>
    )
}