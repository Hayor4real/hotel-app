import './searchItem2.css';

const SearchItem2 = () => {
  return (
    <>
      <div className='searchItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1'
          alt=''
          className='siImg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>wittelsbacherstrasse Street Apartments</h1>
          <span className='siDistance'>200m from center</span>
          <span className='siTaxiOp'>
            Free airport taxi from berlin airport
          </span>
          <span className='siSubtitle'>
            student Apartment with Air conditioning with comfortability
          </span>
          <span className='siFeatures'>
            Entire studio • 3 bathroom • 21m² 1 full bed
          </span>
          <span className='siCancelOp'>Free cancellation at any time </span>
          <span className='siCancelOpSubtitle'>
            You can cancel later, so look in this great price today and also
            great offers in berlin
          </span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>15.6</button>
          </div>
          <div className='siDetailTexts'>
            <span className='siPrice'>€600</span>
            <span className='siTaxOp'>Includes taxes and fees included</span>
            <button className='siCheckButton'>See availability</button>
          </div>
        </div>
      </div>

      <div className='searchItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt=''
          className='siImg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Gontard Street Apartments</h1>
          <span className='siDistance'>300m from center</span>
          <span className='siTaxiOp'>
            Free airport taxi from berlin airport
          </span>
          <span className='siSubtitle'>
            student Apartment with Air conditioning with comfortability
          </span>
          <span className='siFeatures'>
            Entire studio • 3 bathroom • 21m² 1 full bed
          </span>
          <span className='siCancelOp'>Free cancellation at any time </span>
          <span className='siCancelOpSubtitle'>
            You can cancel later, so look in this great price today and also
            great offers in berlin
          </span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>18.6</button>
          </div>
          <div className='siDetailTexts'>
            <span className='siPrice'>€500</span>
            <span className='siTaxOp'>Includes taxes and fees included</span>
            <button className='siCheckButton'>See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem2;
