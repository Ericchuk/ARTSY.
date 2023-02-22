import arrow from '../img/Vector (11).png';
import './cssfile/moreInfo.css';

export default function MoreInfo(){
    const datas = [
        {
            id:0,
            title: "Description",
        },
        {
            id:1,
            title: "Listings",
        },
        {
            id:2,
            title: "Status",
        },
    ]

    const data = datas.map((item) => {
        return(
            <div key={item.id}>
                <p>{item.title}</p>
                <img src={arrow} />
            </div>
        )
    })
    
    return(
        <section className="moreInfo">
            <aside>
                {data}
            </aside>
        </section>
    )
}