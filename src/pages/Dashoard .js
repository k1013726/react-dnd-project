import '../style/Dashoard.css'
import map from  '../img/mao.png'

const Dashoard = () => {
  return (
    
    <div className="DivContainer ">
      <div className="DivContainer2">
        <div className="borderTest Fontsytle">company info</div>
        <div className="borderTest Mapstyle">2</div>
      </div>
      <div className="DivContainer2">
        <div className="borderTest Fontsytle">company locations</div>
        <div className="borderTest"><img src={map} alt='' className="Mapstyle"></img></div>
      </div>
    </div>


  );
};

export default Dashoard;