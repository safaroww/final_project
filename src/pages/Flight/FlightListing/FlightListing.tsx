import './FlightListing.scss';
import { Autocomplete, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Ticket } from './component/FlightTickets/Tickets';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Dubai from './assets/Dubai.png';
import Ehtihad from './assets/Ehtihad.png';
import Emirates from './assets/Emirates.png';
import Menu from './assets/menu.svg';
import Qatar from './assets/Qatar.png';
import React from 'react';
import Search from './assets/Search.svg';
import Select from './assets/select.svg';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

const marks = [
  {
    value: 50,
    label: '$50',
  },
  {
    value: 1200,
    label: '$1200',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export const FlightListing = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => console.log(data);
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
      <div className="selects">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={visit}
          sx={{ width: 320 }}
          renderInput={(params) => <TextField {...params} label="From - To" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={trip}
          sx={{ width: 140 }}
          renderInput={(params) => <TextField {...params} label="Trip" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={depart}
          sx={{ width: 320 }}
          renderInput={(params) => <TextField {...params} label="Depart - Return" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={pass}
          sx={{ width: 320 }}
          renderInput={(params) => <TextField {...params} label="Passenger - Class" />}
        />
        <button className="search-icon">
          <img src={Search} alt="icon" />
        </button>
      </div>
      <div className="main">
        <div className="filter">
          <h2>Filters</h2>
          <p>Price</p>
          <form style={{ width: '300px' }} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="price"
              control={control}
              defaultValue={[50, 1200]}
              render={({ field: { value, onChange } }) => (
                <Slider
                  value={value}
                  onChange={(_, value) => {
                    onChange(value);
                  }}
                  valueLabelDisplay="auto"
                  max={1200}
                  min={50}
                  marks={marks}
                />
              )}
            />
            <button type="submit" className="button">
              Filter
            </button>
          </form>
          <div className="border"></div>
          <div className="rating">
            <p>Rating</p>
            <div className="rating-box">
              <button className="ratings">0+</button>
              <button className="ratings">1+</button>
              <button className="ratings">2+</button>
              <button className="ratings">3+</button>
              <button className="ratings">4+</button>
            </div>
          </div>
          <div className="border"></div>
          <div className="airline">
            <p>Airlines</p>
            <div className="airlines">
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>Emirated</p>
              </div>
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>Fly Dubai</p>
              </div>
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>Qatar</p>
              </div>
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>Ehtihad</p>
              </div>
            </div>
          </div>
          <div className="border"></div>
          <div className="airline">
            <p>Trips</p>
            <div className="airlines">
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>Round trip</p>
              </div>
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>On way</p>
              </div>
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>Multi-City</p>
              </div>
              <div className="box">
                <Checkbox {...label} defaultChecked />
                <p>My dates are flexible</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="buttons">
            <button className="flight-buttons">
              Cheapest
              <p className="price">$99 . 2h 18m</p>
            </button>
            <div className="line"></div>
            <button className="flight-buttons">
              Best
              <p className="price">$99 . 2h 18m</p>
            </button>
            <div className="line"></div>
            <button className="flight-buttons">
              Quickest
              <p className="price">$99 . 2h 18m</p>
            </button>
            <div className="line"></div>
            <button className="other-sort">
              <img src={Menu} alt="icon" />
              <p>Other sort</p>
            </button>
          </div>
          <div className="place">
            <p className="showing-places">
              Showing 4 of <span>257 places</span>
            </p>
            <p className="sorts">
              Sort by <span>Recommended</span>
              <img src={Select} alt="" />
            </p>
          </div>
          <Ticket imgSrc={Emirates} title={'12:00 pm - 01:28 pm'} price={250} rating={'4.2'} />
          <Ticket imgSrc={Dubai} title={'06:00 pm - 09:00 pm'} price={500} rating={'4.0'} />
          <Ticket imgSrc={Qatar} title={'01:00 am - 04:00 am'} price={920} rating={'3.5'} />
          <Ticket imgSrc={Ehtihad} title={'10:00 pm - 01:28 pm'} price={1000} rating={'4.1'} />
          <Stack sx={{ width: '100%', marginTop: '24px' }}>
            <Button variant="contained" size="large" color="secondary" type="submit">
              Show more results
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
};

const visit = [{ label: 'Lahore - Karachi' }, { label: 'Baku - Istanbul' }, { label: 'Moscow - Paris' }];
const trip = [{ label: 'Return' }];
const depart = [{ label: '07 Nov 22 - 13 Nov 22' }];
const pass = [{ label: '1 Passenger, Economy' }];
