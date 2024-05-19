import style from "../Cutomize/Customize.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export default function Cutomize() {
  
  function getItems(){
    return axios.get(`http://customcrafttt.somee.com/api/Item/GetItems`)
  }

  let {data , isLoading } = useQuery('Items', getItems , {
    refetchOnMount:false,
    // refetchInterval: 30000
  })

  return (
    
    <>
    {isLoading ? <div className="position-fixed w-100 h-100 top-0 bottom-0 justify-content-center align-items-center"
    style={{backgroundColor:"rgba(49, 49, 49, 0.415)"}}>
      <span class="loader"></span></div> : <>
    <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-5 py-3">Choose a Blank</h1>
            <div className="row g-3">
              {data?.data?.map((data, index) => (
                <Link 
                  key={index}
                  className="col-xl-3 col-lg-4 col-md-6 cursor colorText"
                  to={`/customize/${data.name}`
                }
                >
                  
                  <div className={style.item}>
                    <div
                      className={` w-100 p-3 d-flex justify-content-center rounded-5 ${style.ground}`}
                    >
                      <img src={data.pictureUrl} className={style.photo} alt={data.name} />
                    </div>

                    <div className={style.bg}></div>
                    <p className={style.text}>{data.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>}
      

    </>
  );
}
