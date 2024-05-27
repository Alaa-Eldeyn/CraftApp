import style from './Ai.module.css'
import img1 from '../../../Assets/images/shein.png'
import img2 from '../../../Assets/images/bing.png'
import img3 from '../../../Assets/images/googleLens.png'
import img4 from '../../../Assets/images/link1.png'
import img5 from '../../../Assets/images/link2.png'
import img6 from '../../../Assets/images/link3.png'

import { Link } from 'react-router-dom'

export default function Similarity(){
    return (
        <>
        <p className={style.text}>Search for similar design with </p>
        <span style={{color:'#8E8E8E' , fontSize:'16px'}}>Discover personalized styles effortlessly</span>
        <div className=' w-100 d-flex justify-content-center align-items-center mt-3'>
            <Link to="https://m.shein.com/pdsearch/hoodie/?ici=s1%60DefaultSearch%60Dress%60_fb%60d0%60PagePreSearch&search_source=3&src_identifier=st%3D3%60sc%3DDress%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_pre_search1715444298219" target="_blank" rel="noopener noreferrer">
            <div style={{width:'40px' , height:'40px' , margin:'0px 10px'}}>
                <img className='w-100' src={img1} alt="logo"  />
            </div>
            </Link>
            <Link to="https://www.bing.com/visualsearch" target="_blank" rel="noopener noreferrer">
            <div className='d-flex align-items-center' style={{width:'40px'  , height:'40px' , margin:'0px 10px', backgroundColor:"#EDEDED" , borderRadius:"8px"}}>
                <img className='w-100' src={img2} alt="logo"  />
            </div>
            </Link>
            <Link to="https://lens.google.com" target="_blank" rel="noopener noreferrer">
            <div style={{width:'40px' , height:'40px' , margin:'0px 10px' , backgroundColor:"#EDEDED" , borderRadius:"8px"}}>
                <img className='w-100' src={img3} alt="logo"  />
            </div>
            </Link>
            </div>

        <span style={{color:'#8E8E8E' , fontSize:'16px'}} className='mt-2'>Or you can print your design using the following instagram stores</span>
        <div className=' w-100 d-flex justify-content-center align-items-center mt-3'>
            <Link to="https://www.instagram.com/direct/t/102436881156532/?hl=en&fbclid=IwZXh0bgNhZW0CMTAAAR2fCem7Rn8_ViHHtPXvmaA1_Oar2tAf54TztbAP4xoLziix2NdsiPtS1G4_aem_AZ2LF6MLtqAkZ9Ei8GS9eKSKlLH5PeD0motp5h_shASQzT7HFNYxp-dsi94UVzMceARv0M-zb9cn-gVVg2pb6HTt" target="_blank" rel="noopener noreferrer">
            <div style={{width:'40px' , height:'40px' , margin:'0px 10px'}}>
                <img className='w-100' src={img4} alt="logo"  />
            </div>
            </Link>
            <Link to="https://www.instagram.com/direct/t/102753431123691/?fbclid=IwZXh0bgNhZW0CMTAAAR0FZZd5GYklmX89GTD5yEHHMKY_Bl5d_AH1zeayQK0-tHjhKlFY5sOaYB4_aem_AZ3Ws1_P6blkLVFT0kboPCxFA2Rwh8UmuGRZAIwks7pneOSy-JV638VTaQAfuLVWZQPdvcNJMOT5PvWxOxwxplCQ" target="_blank" rel="noopener noreferrer">
            <div className='d-flex align-items-center' style={{width:'40px'  , height:'40px' , margin:'0px 10px', borderRadius:"8px"}}>
                <img className='w-100' src={img5} alt="logo"  />
            </div>
            </Link>
            <Link to="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F102984774433894%3Fhl%3Den%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1G6ZD36tL7oO-pYk0L1FCSTEhXpzcttkmZlD-LZFZz9M24iKNe1brzkew_aem_AZ1N4RoYZosSMhg4keKJnjkl1BqpkcZHyTNb5u0SOma1wghWOGaeu1equnh180wbWhycFhNWYk7K7onOZyuZnjgl&h=AT0UPyrcqkp1TkEmPo7Je5eBVI-FDsCRn54fJNzzzXYEBcP4GL1bTbUufX5J7X8dlTzeBYamDBKirNLsjEG8hGNqtzp9jz20MfSNHsvm7HPt1mnWFyYukmq31pSZL4QyfD55ew" target="_blank" rel="noopener noreferrer">
            <div style={{width:'40px' , height:'40px' , margin:'0px 10px' , borderRadius:"8px"}}>
                <img className='w-100' src={img6} alt="logo"  />
            </div>
            </Link>
        </div>
        </>
    )
}
