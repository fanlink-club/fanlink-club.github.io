import hungergames from './images/hunger-games.png';
import heartstopper from './images/heartstopper.png';
import kpop from './images/kpop.png';
import '../App.css';
export default function Explore() {
    return (
		<div>
          <h1> EXPLORE FANLINKS</h1>
          <div id="clubs">
            <div className="club-card">
              <img src={hungergames} alt=""></img>
              The Hunger Games and Dystopian YA
            </div>
            <div className="club-card">
              <img src={heartstopper} alt=""></img>
              Heartstopper and Queer YA
            </div>
            <div className="club-card">
              <img src={kpop} alt=""></img>
              KPOP
            </div>
          </div>
        </div>
    )

}