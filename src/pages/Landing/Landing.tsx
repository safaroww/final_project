import React from 'react'
import photo_1 from '../../media/Rectangle40.png'
import photo_2 from '../../media/Rectangle41.png'
import './Landing.scss'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import photo_3 from '../../media/Rectangle36.png'
import stars from '../../media/star.png'
import google from '../../media/google.png'

const Landing = () => {
  return (
    <>
      <div className='box-1'>
        <div className='Image-box'>
          <div className="image-container">
            <img src={photo_1} alt="" />
            <div className="overlay">Flights</div>
            <div className="overlay2">
              <span>
                Search Flights & Places Hire to our most popular destinations
              </span>
              <div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SendIcon style={{marginTop: '6px',  color: '#000'}} />}
                style={{ backgroundColor: "#8DD3BB", width: '144px', height: '48px', borderRadius: '5px'}}
              >
              <span style={{color: '#000', marginTop: '8px'}}>
                Send
              </span>
              </Button>
              </div>
              </div>
          </div>
          <div className="image-container">
            <img src={photo_2} alt="" />
            <div className="overlay">Hotels</div>
            <div className="overlay2">
              <span>
                Search hotels & Places Hire to our most popular destinations
              </span>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SendIcon style={{marginTop: '6px',  color: '#000'}} />}
                  style={{ backgroundColor: "#8DD3BB", width: '144px', height: '48px', borderRadius: '5px'}}
                >
                <span style={{color: '#000', marginTop: '8px'}}>
                  Send
                </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='box-2'>
        <div style={{marginRight: '50px', display: 'flex', flexDirection: "row"}}>
          <div style={{width: '425px', height: '584px', backgroundColor: "#8DD3BB", borderRadius: '20px', position: 'absolute', top: '74%', left: '11.5%'}}></div>
          <Card sx={{ maxWidth: 425 , maxHeight: 574, borderRadius: 5}}>
            <CardActionArea>
              
              <CardContent style={{margin: 'auto', backgroundColor: '#fff', height: '584px'}}>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'TradeGothicBold'}}>
                “A real sense of community, nurtured”
                </Typography>
                <Typography variant="body2" color="#112211" fontFamily={'Montserrat'} marginTop={'30px'} marginBottom={'10px'}>
                  Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...
                </Typography>
                <div style={{textAlign: 'right', fontFamily: "TradeGothicBold", width: '100%', fontWeight: '700', fontSize: '14px', lineHeight: '18px'}}>
                  View more
                </div>
                <div className='stars'>
                  <img src={stars} alt="" />
                </div>
                <div style={{fontFamily: "TradeGothicBold", width: '100%', fontWeight: '700', fontSize: '14px', lineHeight: '18px', marginTop: '15px'}}>
                  Oiga
                </div>
                <Typography variant="body2" color="#112211" fontFamily={'Montserrat'} marginTop={'5px'} marginBottom={'5px'} >
                Weave Studios – Kai Tak
                </Typography>
                <div className='Google' style={{marginBottom: '40px'}}>
                  <img src={google} alt="" />
                </div>

              <CardMedia
                component="img"
                height="140"
                image={photo_3}
                style={{width: '377px', height: '200px', margin: 'auto', marginBottom: '0',  backgroundColor: '#fff'}}
              />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div style={{marginRight: '50px', display: 'flex', flexDirection: "row"}}>
          <div style={{width: '425px', height: '584px', backgroundColor: "#8DD3BB", borderRadius: '20px', position: 'absolute', top: '74%', left: '37%'}}></div>
          <Card sx={{ maxWidth: 425 , maxHeight: 574, borderRadius: 5}}>
            <CardActionArea>
              
              <CardContent style={{margin: 'auto', backgroundColor: '#fff', height: '584px'}}>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'TradeGothicBold'}}>
                “A real sense of community, nurtured”
                </Typography>
                <Typography variant="body2" color="#112211" fontFamily={'Montserrat'} marginTop={'30px'} marginBottom={'10px'}>
                  Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...
                </Typography>
                <div style={{textAlign: 'right', fontFamily: "TradeGothicBold", width: '100%', fontWeight: '700', fontSize: '14px', lineHeight: '18px'}}>
                  View more
                </div>
                <div className='stars'>
                  <img src={stars} alt="" />
                </div>
                <div style={{fontFamily: "TradeGothicBold", width: '100%', fontWeight: '700', fontSize: '14px', lineHeight: '18px', marginTop: '15px'}}>
                  Oiga
                </div>
                <Typography variant="body2" color="#112211" fontFamily={'Montserrat'} marginTop={'5px'} marginBottom={'5px'} >
                Weave Studios – Kai Tak
                </Typography>
                <div className='Google' style={{marginBottom: '40px'}}>
                  <img src={google} alt="" />
                </div>

              <CardMedia
                component="img"
                height="140"
                image={photo_3}
                style={{width: '377px', height: '200px', margin: 'auto', marginBottom: '0',  backgroundColor: '#fff'}}
              />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div style={{marginRight: '50px', display: 'flex', flexDirection: "row"}}>
          <div style={{width: '425px', height: '584px', backgroundColor: "#8DD3BB", borderRadius: '20px', position: 'absolute', top: '74%', left: '62.5%'}}></div>
          <Card sx={{ maxWidth: 425 , maxHeight: 574, borderRadius: 5}}>
            <CardActionArea>
              
              <CardContent style={{margin: 'auto', backgroundColor: '#fff', height: '584px'}}>
                <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'TradeGothicBold'}}>
                “A real sense of community, nurtured”
                </Typography>
                <Typography variant="body2" color="#112211" fontFamily={'Montserrat'} marginTop={'30px'} marginBottom={'10px'}>
                  Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...
                </Typography>
                <div style={{textAlign: 'right', fontFamily: "TradeGothicBold", width: '100%', fontWeight: '700', fontSize: '14px', lineHeight: '18px'}}>
                  View more
                </div>
                <div className='stars'>
                  <img src={stars} alt="" />
                </div>
                <div style={{fontFamily: "TradeGothicBold", width: '100%', fontWeight: '700', fontSize: '14px', lineHeight: '18px', marginTop: '15px'}}>
                  Oiga
                </div>
                <Typography variant="body2" color="#112211" fontFamily={'Montserrat'} marginTop={'5px'} marginBottom={'5px'} >
                Weave Studios – Kai Tak
                </Typography>
                <div className='Google' style={{marginBottom: '40px'}}>
                  <img src={google} alt="" />
                </div>

              <CardMedia
                component="img"
                height="140"
                image={photo_3}
                style={{width: '377px', height: '200px', margin: 'auto', marginBottom: '0',  backgroundColor: '#fff'}}
              />
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Landing
