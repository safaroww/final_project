import './Tickets.scss';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';

interface TicketProps {
  imgSrc: string;
  title: string;
  price: number;
  rating: string;
}

export const Ticket = (props: TicketProps) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { imgSrc, title, price, rating } = props;
  return (
    <div className="ticket-box">
      <div className="company">
        <img src={imgSrc} alt="company" />
      </div>
      <div className="content">
        <div className="ticket-info">
          <div className="rating">
            <button>{rating}</button>
            <p>
              <span>Very Good</span> 54 reviews
            </p>
          </div>
          <div className="ticket-price">
            <p>
              starting from <span>${price}</span>
            </p>
          </div>
        </div>
        <div className="time">
          <Checkbox {...label} defaultChecked />
          <p>{title}</p>
          <p>non stop</p>
          <p>2h 28m</p>
        </div>
        <div className="route">
          <p>Emirates</p>
          <p>EWR-BNA</p>
        </div>
        <div className="time">
          <Checkbox {...label} defaultChecked />
          <p>{title}</p>
          <p>non stop</p>
          <p>2h 28m</p>
        </div>
        <div className="route">
          <p>Emirates</p>
          <p>EWR-BNA</p>
        </div>
        <div className="long-line"></div>
        <div className="detail-view">
          <div className="like">
            <FavoriteBorderIcon />
          </div>
          <Stack sx={{ width: '82%' }}>
            <Button variant="contained" size="large" type="submit">
              View deals
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};
