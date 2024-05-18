import image from '../../Assets/images/notFound.png'
import style from './NotFound.module.css'
import Animation from '../NotFound/Animation/Animation'
import { Link } from 'react-router-dom'
export default function NotFound(){
    return <>
        <div className="p-5">
        <div className={`${style.border} container `}>
            <div className="row">
                <div className="col text-center">
                    <p className={style.oops}>Oops!</p>
                    <div className={style.custom}>
                        <img src={image} className={style.image}  alt=" Not Found logo" />
                    </div>
                    <p className={style.page}> <Animation/></p>
                    <Link to='/' className={`colorBtn ${style.link}`}>
                        <button className={` mb-5 colorBtn mainBg ${style.button}`}>
                            <i className="fa-solid fa-arrow-left "></i>
                        Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    </>
}