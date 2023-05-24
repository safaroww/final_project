import AddIcon from '@mui/icons-material/Add';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import BedIcon from '@mui/icons-material/Bed';
import TelegramIcon from '@mui/icons-material/Telegram';

import './Search.scss';
import { Autocomplete, Divider, Grid, TextField, Typography } from '@mui/material';

export const Search = () => {
  return (
    <div className="search">
      <Grid container alignItems="center">
        <Grid item className="plane">
          <AirplanemodeActiveIcon />
        </Grid>
        <Grid item className="plane_text">
          <Typography variant="body1">Flight</Typography>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item className="bed_icon">
          <BedIcon />
        </Grid>
        <Grid item className="bed_text">
          <Typography variant="body1">Stays</Typography>
        </Grid>
      </Grid>
      <div className="forms">
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
          renderInput={(params) => <TextField {...params} label="Depart- Return" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={pass}
          sx={{ width: 320 }}
          renderInput={(params) => <TextField {...params} label="Passenger - Class" />}
        />
      </div>

      <div className="buttons">
        <button className="button1">
          <AddIcon />
          <span className="promo">Add Promo Code</span>
        </button>

        <button className="button2">
          <TelegramIcon />
          <span className="promo">Show Flights</span>
        </button>
      </div>
    </div>
  );
};

const visit = [{ label: 'Lahore - Karachi' }, { label: 'Baku - Istanbul' }, { label: 'Moscow - Paris' }];

const trip = [{ label: 'Return' }];
const depart = [{ label: '07 Nov 22 - 13 Nov 22' }];
const pass = [{ label: '1 Passenger, Economy' }];
