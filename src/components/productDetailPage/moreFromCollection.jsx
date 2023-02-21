import arrowRight from '../img/Vector (16).png';
import diamond from '../img/Vector (14).png';
import Sassy from '../img/Rectangle 254.png';
import bougie from '../img/Rectangle 256.png';
import lost from '../img/Rectangle 258.png';
import circa from '../img/Rectangle 260.png';
import Fav from '../img/Vector (15).png';

export default function MoreFromCollection() {
  const caroData = [
    {
      id: 0,
      img: Sassy,
      title: "Sassy",
      price: "3.20",
      fav:  false,
    },
    {
      id: 1,
      img: bougie,
      title: "Bougie",
      price: "7.20",
      fav: false,
    },
    {
      id: 2,
      img: lost,
      title: "lost",
      price: "9.20",
      fav: false,
    },
    {
      id: 3,
      img: circa,
      title: "Circa '95",
      price: "3.20",
      fav: false,
    },
  ];

  const caroDataCollection = caroData.map((item) => {
    return (
      <div key={item.id}>
        <img src={Fav} alt="favourite" />
        <img src={item.img} alt={item.title} />
        <div>
          <p>{item.title}</p>
          <div>
            <img src={diamond} alt="diamond" />
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="moreFromCollection">
      <h3>More from this collection</h3>
      <aside>{caroDataCollection}</aside>
      <div className="buttons">
        <div className='img-container'>
            <img src={arrowRight} alt="prev" className='arrowLeft'/>
        </div>
        <div className='img-container'>
            <img src={arrowRight} alt="next"/>
        </div>
        
      </div>
    </section>
  );
}
