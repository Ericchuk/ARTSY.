import exploreArrow from "../img/Vector (10).png";

export default function Explore(){

    const datas = [
        {id:0, title: 'Explore marketplace', icon:exploreArrow},
        {id:1, title: 'See auctions', icon:exploreArrow}
    ]

    const dataEach = datas.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <img src={data.icon} alt={data.title} />
            </div>
        )
    })
    return(
        <section className="explore-section">
            {dataEach}
        </section>
    )
}