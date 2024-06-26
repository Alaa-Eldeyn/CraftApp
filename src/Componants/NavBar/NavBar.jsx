import { NavLink, useNavigate } from "react-router-dom";
import img1 from '../../Assets/images/first-logo.png';
import img3 from '../../Assets/images/Group.png';
import img4 from '../../Assets/images/logout.png';
import img5 from '../../Assets/icons/brush.svg';
import img6 from '../../Assets/images/carbon_password.png';
import img7 from '../../Assets/images/pic.png';


import style from './NavBar.module.css';
import { useCallback, useContext } from "react";
import { userToken } from "../../Context/TokenContext";
import Swal from "sweetalert2";
import { useDropzone } from "react-dropzone";


export default function NavBar(){
    let {token , setToken ,setPic ,pic}= useContext(userToken) 
    let nav = useNavigate()

    function LogOut(){
        localStorage.removeItem('UserToken' )
        localStorage.removeItem('pic' )
        setToken(null)
        nav('/login')

        Swal.fire({
            title: "Deleted!",
            text: "You are logged out !",
            icon: "success"
        });
    }
    
    function Design(){
        nav('/myDesign')
    }
    function Change(){
        nav("/changePass")
    }

        const onDrop = useCallback((acceptedFiles) => {
    
            const selectedPhotos = acceptedFiles.map(file => ({
                url: URL.createObjectURL(file),
            
            }));
            localStorage.setItem('pic' , selectedPhotos[0].url ) 
            console.log(selectedPhotos[0].url);
            

        }, []);
        
            setPic(localStorage.getItem('pic'))

        const { getRootProps } = useDropzone({ onDrop, accept: 'image/*', multiple: true });

// alert -----------------------------
        function ShowAlert(){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: " #d33",
                cancelButtonColor: "#5B8F9A",
                confirmButtonText: "Log out !"
                }).then((result) => {
                if (result.isConfirmed) {
                    LogOut()
                }
                });
        }
// alert -----------------------------

    return <>
    <nav className={`navbar navbar-expand-lg fixed-top ${style.navbg}`}>
    
        <div className="container">
            <NavLink className="navbar-brand" to=""><img src={img1} alt="logo page" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  d-lg-flex justify-content-between" id="navbarSupportedContent">

            {(token !=null ) ? <ul className="navbar-nav m-auto ps-lg-5 mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="customize" >Customize</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="contact" >Contact Us</NavLink>
                </li>

            </ul> : ""}

            {token ==null ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link btnn px-3" to="/login">Login</NavLink>
                </li>
            </ul> 
            :<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to='/Account' role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                        
                    {img3 && <img src={localStorage.getItem('pic')!= null ? pic : img3} className={style.image} 
                    alt="pic" style={{height:"35px" ,width:'35px',border:'1px solid #2E2E2E' , borderRadius:"50%"}} /> } My account
                    </NavLink>

                    <ul className={`${style.input} dropdown-menu `}>
                        <li><span className="dropdown-item cursor" onClick={Design}>
                        <img src={img5} className={`me-3 ${style.image}`} alt="design"/>My Design</span></li>
                        <li><span className="dropdown-item cursor" onClick={Change}>
                        <img src={img6} className={`me-3 ${style.image}`} alt="password"/>Change Password</span></li>
                        <li {...getRootProps()}><span className="dropdown-item cursor"  >
                        <img src={img7} className={`me-3 ${style.image}`} alt="password"/>Edit Pic Profile</span></li>
                        
                        <li><span className="dropdown-item cursor" onClick={ShowAlert}>
                        <img src={img4} className={`me-3 ${style.image}`} alt="logout"/>Sign Out</span></li>

                    </ul>
                </li>
            </ul>}
            
            </div>
        </div>

    </nav>
    </>
};


