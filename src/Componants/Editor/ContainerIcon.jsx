import { useContext } from "react"
import { ViewContext } from "../../Context/ViewContext"

export default function ContainerIcon(){
    let { svg , colorBtn} = useContext(ViewContext)
    const newSvg = svg.replace(/fill=".*?"/g, `fill="${colorBtn}"`)
  const styles = {
    SvgColor: {
      svg: {
        path: {
          fill: '#5b8f9a',
        },
      },
    },
  };
    return (
        <>
        <div  style={{position:'absolute' , top:'20%' , left :'25%', bottom:'20%', right:'20%' 
        , width:'50%' , height :'70%'}}>
            <div className={styles.SvgColor}
            
                style={{ width: "80px", height: "80px" , cursor:'pointer' }}
                dangerouslySetInnerHTML={{ __html: newSvg }}
                // اريد تلونها
            ></div>
        </div>
        </>
    )
}

