import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ( { value, text }) => {
    const stars = [];
    const valueFloor = Math.floor(value);
    const isHalfStar = (value-valueFloor >= 0.5) ? true : false;
    for ( let i=0; i<valueFloor; i++) stars.push(<FaStar />);
    if (isHalfStar) stars.push(< FaStarHalfAlt />)
    let regStarCount = 5 - (valueFloor + (isHalfStar ? 1 : 0));
    for (let rem=0; rem < regStarCount; rem++) { stars.push(<FaRegStar/>) }
  return (
    <div className='rating'>
        <span>
            {stars}
            <span className='rating-text'>{text && text}</span>
        </span>
    </div>
  )
}

export default Rating