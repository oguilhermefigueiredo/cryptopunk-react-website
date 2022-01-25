import React, {useState, useEffect} from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
//import CollectionCard from './CollectionCard';

const Main = ({ selectedPunk, punkListData }) => {
const [activePunk, setActivePunk] = useState(punkListData[0]) 

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk])

  return (
  <div className='main'>
    <div className='mainContent'>
      <div className='punkHighlight'>
        <div className='punkContainer'>
        <img 
          className='selectedPunk'
          src={activePunk.image_url} 
         alt=''
        /> 
        </div>
      </div>
      
      <div className="rightDetails">
      <div className='punkDetails' style={{ color: '#fff' }}>
        <div className='title'><p className='colorTitle'>{activePunk.name}</p></div>
        <span className='itemNumber'>※{activePunk.token_id}</span>
      </div>
      <div className='owner'>
        <div className='ownerImageContainer'>
          <img 
          src={activePunk.image_url}
          alt=''
          />
        </div>
        <div className='ownerDetails'>
          <div className='ownerNameAndHand'>
            <div>0xd846dc501b017c3400b8e89f50c43f7b091bb501</div>
            <div className='ownerHandle'>@oguilhermefigueiredo</div>
          </div>
          <div className='ownerLink'>
            <img src={instagramLogo} alt='' />
          </div>
          <div className='ownerLink'>
            <img src={twitterLogo} alt='' />
          </div>
          <div className='ownerLink'>
            <img src={moreIcon} alt='' />
          </div>
        </div>  
      </div>      
    </div>
  </div>
  </div>
)}

export default Main;
