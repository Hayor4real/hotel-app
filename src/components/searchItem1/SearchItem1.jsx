import './searchItem1.css';

const SearchItem1 = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o='
        alt=''
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>konigsallee Street Apartments</h1>
        <span className='siDistance'>200m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          student Apartment with Air conditioning
        </span>
        <span className='siFeatures'>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className='siCancelOp'>Free cancellation at any time </span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today and also great
          offers
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>12.6</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>€400</span>
          <span className='siTaxOp'>Includes taxes and fees included</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem1;
