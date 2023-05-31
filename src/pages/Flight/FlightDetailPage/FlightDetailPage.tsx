import melbourne from '../assets/melbourne.png';
import paris from '../assets/paris.png';
import london from '../assets/london.png';
import columbia from '../assets/columbia.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import './FlightDetailPage.scss';

export const FlightDetailPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div className="head-cards">
          <div className='section-title'>
            <h1>Fall into travel</h1>
            <span>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</span>
          </div>
          <div className='see-all'>
            <span>See All</span>
          </div>
        </div>
        <div className='Cards'>
          <Card sx={{ width: 345, marginRight: '20px', borderRadius: '10px'}}>
            <CardActionArea>
              <CardMedia component="img" height="410" image={melbourne} alt="green iguana" style={{'position' : 'absolute'}} />
            </CardActionArea>
            <CardActions className='content'>
                <Typography  variant="h5" className='title'>
                  Melbourne
                </Typography>
                <div className='under'>
                  <Typography variant="body2" className='desc'>
                    An amazing journey
                  </Typography>
                  <Typography variant="body2" className='desc'>
                    700$
                  </Typography>
                </div>
              <Button size="small" color="primary" className='btn-card'>
                Book Flight
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 345, marginRight: '20px', borderRadius: '10px'}}>
            <CardActionArea>
              <CardMedia component="img" height="410" image={paris} alt="green iguana" style={{'position' : 'absolute'}} />
            </CardActionArea>
            <CardActions className='content'>
                <Typography  variant="h5" className='title'>
                  Paris
                </Typography>
                <div className='under'>
                  <Typography variant="body2" className='desc'>
                    A Paris Adventure
                  </Typography>
                  <Typography variant="body2" className='desc'>
                    600$
                  </Typography>
                </div>
              <Button size="small" color="primary" className='btn-card'>
                Book Flight
              </Button>
            </CardActions>
          </Card><Card sx={{ width: 345, marginRight: '20px', borderRadius: '10px'}}>
            <CardActionArea>
              <CardMedia component="img" height="410" image={london} alt="green iguana" style={{'position' : 'absolute'}} />
            </CardActionArea>
            <CardActions className='content'>
                <Typography  variant="h5" className='title'>
                  London
                </Typography>
                <div className='under'>
                  <Typography variant="body2" className='desc'>
                    London eye adventure
                  </Typography>
                  <Typography variant="body2" className='desc'>
                    350$
                  </Typography>
                </div>
              <Button size="small" color="primary" className='btn-card'>
                Book Flight
              </Button>
            </CardActions>
          </Card><Card sx={{ width: 345, marginRight: '20px', borderRadius: '10px'}}>
            <CardActionArea>
              <CardMedia component="img" height="410" image={columbia} alt="green iguana" style={{'position' : 'absolute'}} />
            </CardActionArea>
            <CardActions className='content'>
                <Typography  variant="h5" className='title'>
                  Columbia
                </Typography>
                <div className='under'>
                  <Typography variant="body2" className='desc'>
                    Amazing streets
                  </Typography>
                  <Typography variant="body2" className='desc'>
                    700$
                  </Typography>
                </div>
              <Button size="small" color="primary" className='btn-card'>
                Book Flight
              </Button>
            </CardActions>
          </Card>
        </div>
      </Container>
    </>
  );
};
