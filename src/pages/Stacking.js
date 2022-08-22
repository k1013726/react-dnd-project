import '../style/Stacking.css'
import icon from '../img/Vector2.png'
// import icon2 from '../img/Vector3.png'

const Stacking = () => {
  return (
    <div className='Frame14 BorderTest'>
      <div className='head BorderTest'>
        <div className='INFORMATIONA'>
          INFORMATIONA
        </div>
      </div>
      <div className='table_head BorderTest'>
        <div className='company_name BorderTest'>company name</div>
        <div className='Frame15 BorderTest'>
          <div className='wordcolor'>liquidity <img src={icon} alt='' /></div>
          <div className='wordcolor'>Reward <img src={icon} alt='' /></div>
          <div className='wordcolor'>Earned</div>

        </div>

      </div>
      <div className="Frame3 BorderTest">
        <div className="WordStyle BorderTest">抬頭工作室有限公司</div>
        <div className="Frame8 WordStyle2">
            <div>$ 56 M</div>
            <div>159.6 %</div>
            <div>$2.569</div>
        </div>
        <div className="Frame4">
            <div className="Frame1 WordStyle3">聯繫公司</div>
            <div className="Frame2"></div>
        </div>
    </div>

    </div>
  );
};

export default Stacking;