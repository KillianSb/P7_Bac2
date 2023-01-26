import StarFull from "../../assets/images/star_rate-24px 2.svg";
import StarEmpty from "../../assets/images/star_rate-24px 5.svg";

function Star({ratings,index}) {
    const totalStar = 5;
    const activeStar = ratings
  return (
    <span className="IntelContainerRating" key={index}>
        {[...new Array(totalStar)].map((arr, index) => {
        return index < activeStar ? <img src={StarFull} key={index} alt="Full Star"/> : <img src={StarEmpty} key={index} alt="Empty Star" />;
      })}
    </span>
  )
}

export default Star