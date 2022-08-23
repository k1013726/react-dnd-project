import '../style/Stacking.css'
import info from '../img/info.svg'
import icon2 from '../img/ButtonUP.svg'

const Stacking = () => {
  return (
    <div className='StackingFrame '>
      <div className='HeadFrame '>INFORMATIONA</div>
      <div className='TableHead '>
        <div>company name</div>
        <div className='TableInfo'>
          <div>liquidity&thinsp; <img src={info} alt="" /></div>
          <div>Reward&thinsp; <img src={info} alt="" /></div>
          <div>Earned</div>
        </div>
        <div className='SpaceFrame'></div>
      </div>

      <div className='Frame'>
        <div className='CardFrame'>
          <div ><p>抬頭工作室有限公司</p></div>
          <div className='NumberFrame '>
            <div > $ 56 M</div>
            <div >159.6 %</div>
            <div className='EarnFont'>$2.569</div>
          </div>
          <div className='ButtonFrame '>
            <div className='CompanyFrame'>聯繫公司</div>
            <div><img src={icon2} alt="" /></div>
          </div>
        </div>
        {/* <div className='TypeFrame BoderTest'>asdasd</div>
        <div>asdasd</div> */}
      </div>



      <div className='CardFrame2 '>
        <div ><p>抬頭工作室有限公司</p></div>
        <div className='NumberFrame '>
          <div > $ 56 M</div>
          <div >159.6 %</div>
          <div className='EarnFont'>$2.569</div>
        </div>
        <div className='ButtonFrame '>
          <div className='CompanyFrame'>聯繫公司</div>
          <div><img src={icon2} alt="" /></div>
        </div>
      </div>

      <div className='CardFrame2 '>
        <div ><p>抬頭工作室有限公司</p></div>
        <div className='NumberFrame '>
          <div > $ 56 M</div>
          <div >159.6 %</div>
          <div className='EarnFont'>$2.569</div>
        </div>
        <div className='ButtonFrame '>
          <div className='CompanyFrame'>聯繫公司</div>
          <div><img src={icon2} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Stacking;