import './Landing.scss';
import { Search } from '../../shared/components/search/Search';
import backgroundimg from './assets/Rectangle 31.png';
import { NineGrid } from './components/NineGrid/NineGrid';

export const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="texts">
          <div className="first">Helping Others</div>
          <div className="sec">Live & Travel</div>
          <div className="third">Special offers to suit your plan</div>
        </div>

        <div>
          <img src={backgroundimg} alt="" />
        </div>

        <Search />

        <NineGrid />
      </div>
    </>
  );
};
