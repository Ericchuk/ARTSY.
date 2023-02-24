import eyo from "../img/Rectangle 268.png";
import ginger from "../img/Rectangle 268 (1).png";
import sink from "../img/Rectangle 272.png";
import warped from "../img/Rectangle 275.png";
import "./cssfile/drops.css";

export default function Drops() {
  const dropsArray = [
    {
      id: 0,
      img: eyo,
      name: "Eyo : eko for show",
      drop: "November 21 at 11 am WAT",
      live: false,
      timeRemaining: "06 hrs : 45 mins : 22 s",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creator: "Aliya Minat",
      btValue: 1,
    },
    {
      id: 1,
      img: ginger,
      name: "Ginger Suburbs",
      drop: "November 21 at 11 am WAT",
      live: true,
      timeRemaining: "02 hours ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creator: "Tina Benson",
      btValue: 2,
    },
    {
      id: 2,
      img: sink,
      name: "Sink",
      drop: "November 21 at 11 am WAT",
      live: "Ended",
      timeRemaining: "05 hours ago",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creator: "Aliya Minat",
      btValue: 3,
    },
    {
      id: 3,
      img: warped,
      name: "Warped '99",
      drop: "November 21 at 11 am WAT",
      live: "Ended",
      timeRemaining: "06 hrs : 45 mins : 22 s",
      description:
        "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creator: "Aliya Minat",
      btValue: 3,
    },
  ];

  // map through dropsArray
  const drops = dropsArray.map((drop) => {
    return (
      <div className="drop" key={drop.id}>
        <aside className="img-container">
          <img src={drop.img} alt="drop" />
          {drop.live === "Ended" ? (
            <p className="ended">Ended</p>
          ) : drop.live ? (
            <p className="live">live now</p>
          ) : (
            <p className="upcoming">upcoming</p>
          )}
          <div>
            {drop.live === "Ended" ? (
              <small>Auction ended</small>
            ) : drop.live ? (
              <small>Streaming Now</small>
            ) : (
              <small>Time remaining</small>
            )}
            <p>{drop.timeRemaining}</p>
          </div>
        </aside>

        <aside className="details-container">
          <p>{drop.drop}</p>
          <h2>{drop.name}</h2>

          <p className="description">{drop.description}</p>
          <p className="creator">
            <b>Creator : </b>
            <span>{drop.creator}</span>
          </p>
          <a href={drop.btValue}>
            {drop.btValue === 1
              ? "Get notified"
              : drop.btValue === 2
              ? "Join now"
              : "View"}
          </a>
        </aside>
      </div>
    );
  });

  return (
    <section className="drops">
      <aside>{drops}</aside>
    </section>
  );
}
