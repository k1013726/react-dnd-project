import '../style/Stacking.css'
import icon from '../img/Vector2.png'
import icon2 from '../img/Vector3.png'

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
      <div className='table_content BorderTest'>
        <div className='Frame3 BorderTest'>
          <div className='company_name2 BorderTest'>抬頭工作室有限公司</div>
          <div className='Frame8'>
            <p className='company_name2 BorderTest'>$56M</p>
            <p className='company_name2 BorderTest'>159.6%</p>
            <p className='EarnedFontStyle BorderTest'>$2.569</p>
          </div>
          <div className='BorderTest'></div>
        </div>

        <div className='Frame4 BorderTest'>
          <div className=' BorderTest'>抬頭工作室有限公司</div>
          <div className='Frame8'>
            <p className=' BorderTest'>$56M</p>
            <p className=' BorderTest'>159.6%</p>
            <p className=' BorderTest'>$2.569</p>
          </div>
          <div className='BorderTest'>
            <div className='Frame1'>
              <p className=''>聯絡公司</p>
            </div>
        
            <div className='Frame2 BorderTest'>
              <img src={icon2} alt=''/>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Stacking;