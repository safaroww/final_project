import React from 'react'
import './HotelBookingDetail.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Img from './media/Frame 186.png';
import Img2 from './media/download 1.png';
import { ReactComponent as VisaSVG } from './media/Visa.svg';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
export const HotelBookingDetail = () => {

  

  return (
    <>
      <div className="booking__detail">
        <div className="booking__detail__path">
          <p className='font-14'>Turkey</p>
          <ChevronRightIcon className='font-14' />
          <p className='font-14'>Istanbul</p>
          <ChevronRightIcon className='font-14' />
          <p className='font-14 current__path'>CVK Park Bosphorus Hotel Istanbul</p>
        </div>
        <div className="booking__detail__wrapper">
          <div className="booking__detail__options ">
            <div className="booking__detail__box hotel__room__option">
              <div className="hotel__room__detail">
                <p className="hotel__room font-24 font-bold main-font">Superior room - 1 double bed or 2 twin beds</p>
                <p className="hotel__room__price font-32 font-bold">$<span>240</span><span className='price__per__day font-14 font'>/night</span></p>
              </div>
              <div className="hotel__detail">
                <img src={Img2} alt="" className="hotel__logo" />
                <div className="hotel__info">
                  <p className="hotel__name font-semibold font-24">CVK Park Bosphorus Hotel Istanbul</p>
                  <p className="hotel__add font-14 font-medium"><LocationOnIcon className='loc__ico'/> Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                </div>
              </div>
              <div className="hotel__date__detail">
                <div className="hdd__checkin">
                  <p className="check__date font-semibold font-20"><span>Thursday</span>, <span>Dec 8</span></p>
                  <p className='font-medium font-14'>Check-in</p>
                </div>
                <div className="hdd__middle">
                  <span></span>
                  <ApartmentIcon className="ap__ico"/>
                  <span></span>
                </div>
                <div className="hdd__checkout">
                  <p className="check__date font-semibold font-20"><span>Friday</span>, <span>Dec 9</span></p>
                  <p className='font-medium font-14'>Check-out</p>
                </div>
              </div>
            </div>
            <div className="booking__detail__box booking__detail__payment">
              <form action="">
                <div className="payment__method active__payment">
                  <div className="payment__method__label">
                    <p style={{margin:'0 0 8px 0'}} className='font-bold main-font font-16' >Pay in full</p>
                    <p className='second-font font-14'>Pay the total and you are all set</p>
                  </div>
                  <input className='payment__radio' type="radio" name='payment'/>
                </div>
                <div className="payment__method">
                  <div className="payment__method__label">
                    <p style={{margin:'0 0 8px 0'}} className='font-bold main-font font-16' >Pay part now, part later</p>
                    <p className='second-font font-14'>Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.
 </p>
                    <a className='payment__moreinfo second-font font-medium font-12' href="">More info</a>
                  </div>
                  <input className='payment__radio' type="radio" name='payment'/>
                </div>
                
              </form>
            </div>
            <div className="booking__detail__box booking__detail__payment">
            <form action="">
                <div className="payment__method active__payment">
                  <div className="payment__method__label__card">
                    <VisaSVG style={{margin:'0 32px 0 0'}} />
                    <span className='font-bold main-font font-16' >**** 4321</span>
                    <span className='second-font font-14'>02/27</span>
                  </div>
                  <input className='payment__radio' type="radio" name='payment'/>
                </div>
                
              </form>
              <div className="add__new__card__section">
                <ControlPointIcon className='plusbtn'/>
                <p className='font-medium second-font font-12'>Add a new card</p>
              </div>
            </div>
          </div>
          <div className="booking__detail__total">
            <div className="booking__detail__box booking__total">
              <div className="booking__total__minidetail">
                <div className="btm__img">
                  <img src={Img} alt="" />
                </div>
                <div className="btm__details">
                  <p className="hotel__name second-font font-16 font-medium">CVK Park Bosphorus...</p>
                  <p className="hotel__room__detail second-font font-20 font-semibold">Superior room - 1 double bed or 2 twin beds</p>
                  <div className="hotel__rating">
                    <div className="hotel__rating__number font-12 second-font font-medium">4.2</div>
                    <p className="hotel__rating__word second-font font-12 font-bold">Very Good</p>
                    <p className="hotel__rating__review font-12 second-font font-semibold"><span>54</span>reviews</p>
                  </div>
                </div>
              </div>
              <div className="booking__total__ad">
                <p className='second-font font-16 font-semibold'>Your booking is protected by <span className='font-bold'>golobe</span></p>
              </div>
              <div className="booking__total__prices">
                <p className="btp__header font-16 font-bold ">Price Details</p>
                <div className="btp__basefare">
                  <p className='font-medium font-16'>Base Fare</p>
                  <p className='font-semibold font-16'>$<span>240</span></p>
                </div>
                <div className="btp__discount">
                  <p className='font-medium font-16'>Discount</p>
                  <p className='font-semibold font-16'>$<span>0</span></p>
                </div>
                <div className="btp__taxes">
                <p className='font-medium font-16'>Taxes</p>
                  <p className='font-semibold font-16'>$<span>20</span></p>
                </div>
                <div className="btp__service">
                <p className='font-medium font-16'>Service Fee</p>
                  <p className='font-semibold font-16'>$<span>5</span></p>
                </div>
                <div className="btp__total">
                  <p className='font-medium font-16'>Total</p>
                  <p className='font-semibold font-16'>$<span>265</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}


