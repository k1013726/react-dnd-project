import '../style/Dashoard.css'
import map from '../img/map.png'
import chart from '../img/barchart.png'

const Dashoard = () => {
  return (
    <div className="DashoardFrame ">
      <div className="InfoFrame ">
        <div className='DashoardFont'>company info</div>
        <img src={chart} alt="" className></img>
      </div>
      <div className="InfoFrame ">
        <div className='DashoardFont'>company locations</div>
        <img src={map} alt=""></img>
      </div>
    </div>
  );
};

export default Dashoard;