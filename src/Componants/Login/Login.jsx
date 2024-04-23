import FormLogin from './FormLogin/FormLogin';
import Avatar from '../Avatar/Avatar';


export default function Login() {
  return <>
  <div className="container">
    <div className="row py-5 d-flex justify-content-center  align-items-center">
      <Avatar/>
      <FormLogin/>
    </div>
  </div>
  </>
  ;
}