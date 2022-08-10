import '../style/Dashoard.css'
import map from '../img/mao.png'
import chart from '../img/barchart.png'

const Dashoard = () => {
  return (

    <div className="Frame27 ">
      <div className="Frame26 ">
        <div className="Frame25 ">
          <p className="company_info" >
            company info
          </p>
        </div>
        <div className="Rectangle2">
          <img src={chart} alt='' className="" />
        </div>
      </div>
      <div className="company_location ">
        <div className="Frame24  ">
          <p className='company_locations'>company locations</p>
        </div>
        <div className="">
          <img src={map} alt='' className="Mask_group"/>
        </div>
      </div>
    </div>


  );
};

export default Dashoard;