import style from '../Avatar/Avatar.module.css';
import image1 from '../../Assets/images/logo.png';
export default function Avatar(){
    return <>
      <div className=" offset-lg-1 d-none d-sm-none  d-md-block col-md-5">
        <img src={image1} alt="background " className={style.image} />
      </div>
    </>
}