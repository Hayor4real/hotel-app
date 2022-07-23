import './searchItem.css';

const SearchItem = () => {
  return (
    <>
      <div className='searchItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
          alt=''
          className='siImg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Memelweg Street Apartments</h1>
          <span className='siDistance'>500m from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>
            Studio Apartment with Air conditioning
          </span>
          <span className='siFeatures'>
            Entire studio • 1 bathroom • 25m² 1 full bed
          </span>
          <span className='siCancelOp'>Free cancellation </span>
          <span className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className='siDetailTexts'>
            <span className='siPrice'>€200</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
          </div>
        </div>
      </div>

      <div className='searchItem'>
        <img
          src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg'
          alt=''
          className='siImg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Markstrasse Street Apartments</h1>
          <span className='siDistance'>300m from center</span>
          <span className='siTaxiOp'>Free airport taxi with no charges</span>
          <span className='siSubtitle'>
            professional Apartment with Air conditioning
          </span>
          <span className='siFeatures'>
            Entire studio • 2 bathroom • 21m² 1 full bed
          </span>
          <span className='siCancelOp'>Free cancellation </span>
          <span className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>9.1</button>
          </div>
          <div className='siDetailTexts'>
            <span className='siPrice'>€250</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
