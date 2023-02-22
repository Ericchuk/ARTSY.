import {useState} from 'react';
import './cssfile/counter.css';

export default function Counter(){
    const [count, setCount] = useState(1);

    function increaecountNum(){
        setCount(count + 1)
    }

    function decreaecountNum(){
        if(count === 1){
            return
        }else{
            setCount(count - 1)
        }
    }
    return(
        <section className="counter">
            <p onClick={decreaecountNum}>-</p>
            <p>{count}</p>
            <p onClick={increaecountNum}>+</p>
        </section>
    )
}