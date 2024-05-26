import style from './Ai.module.css'
import img1 from '../../../Assets/images/shein.png'
import img2 from '../../../Assets/images/bing.png'
import img3 from '../../../Assets/images/googleLens.png'
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
        </>
    )
}
