import { useContext } from "react"
import { ViewContext } from "../../Context/ViewContext"

export default function ContainerShapes(){
    let { svgShapes , colorShapes} = useContext(ViewContext)
    const newSvg = svgShapes.replace(/fill=".*?"/g, `fill="${colorShapes}"`)
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

            <div className={`${styles.SvgColor} cursor`}
            
                style={{ width: "80px", height: "80px"  }}
                dangerouslySetInnerHTML={{ __html: newSvg }}
                // اريد تلونها
            ></div>
        </div>
        </>
    )
}