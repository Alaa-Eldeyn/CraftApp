
import Avatar from '../Avatar/Avatar';
import FormRegisteration from './FormRegisteration/FormRegisteration';


export default function Register() {
  return <>
  <div className="container">
    <div className="row py-5 d-flex justify-content-center  align-items-center">
      <Avatar/>
      <FormRegisteration/>
    </div>
  </div>
  </>
  ;
}

