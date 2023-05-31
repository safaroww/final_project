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
import forest from '../assets/forest.png';
import ocean from '../assets/ocean.png';
import island from '../assets/island.png';
import hawaii from '../assets/hawaii.png';
import worldmap from '../assets/worldmap.png';
import { Search } from '../../../shared/components/search/Search';
import backgroundimg from '../assets/plane.png';

export const FlightDetailPage = () => {
  return (
    <>
      <div className="first-section">
        <div className="landing">
          <div className='backgroundimg'>
            <img src={backgroundimg} alt="" />
          </div>
          <Search />
        </div>
      </div>
      <Container maxWidth="lg">
        <div className="section" style={{'margin': '0px'}}>
          <div className="head-cards">
              <div className='section-title'>
                <h1>Let's go places together</h1>
                <span>Discover the latest offers and news and start planning your next trip with us.</span>
              </div>
              <div className='see-all'>
                <span>See All</span>
              </div>
          </div>
        </div>
      </Container>
          <img src={worldmap} className='map' alt="" />
      <Container maxWidth="lg">
        <div className="section">
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
        </div>
        <div className="section">
          <div className="head-cards">
            <div className='section-title'>
              <h1>Fall into travel</h1>
              <span>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</span>
            </div>
            <div className='see-all'>
              <span>See All</span>
            </div>
          </div>
          <div className='sec-4'>
            <Card  className='card'>
              <CardContent>
                <Typography variant="h5" component="div" className='title'>
                  Backpacking Sri Lanka
                </Typography>
                <Typography className='desc'>
                  Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
                </Typography>
                
                <Button size="small" className='btn-card'>Book Flight</Button>
              </CardContent>
            </Card>
            <div className="gallery">
              <div className='grid-item'><img src={forest} alt="gallery" /></div>
              <div className='grid-item'><img src={ocean} alt="gallery" /></div>
              <div className='grid-item'><img src={island} alt="gallery" /></div>
              <div className='grid-item'><img src={hawaii} alt="gallery" /></div>

            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
