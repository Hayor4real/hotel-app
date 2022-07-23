import './mailList.css';

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, save money!</h1>
      <span className='mailDesc'>
        Sign up and we'll send the best deals to you
      </span>
      <div className='mailInputContainer'>
        <input type='text' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
      <div className='foot'>
        <input type='checkbox' />
        <span>Send me a link for the Free Booking.com app</span>
      </div>
    </div>
  );
};

export default MailList;
