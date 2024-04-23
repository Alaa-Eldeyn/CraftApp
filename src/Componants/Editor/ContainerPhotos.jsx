import { useContext } from "react"
import { ViewContext } from "../../Context/ViewContext"

export default function ContainerPhotos(){
    let { images } = useContext(ViewContext)


    return (
        <>
        <div  style={{position:'absolute' , top:'20%' , left :'25%', bottom:'20%', right:'20%' 
        , width:'50%' , height :'70%'}}>
        <div className="w-50 h-25">
        {images.map((image, index) => (
            <img src={image.url} alt={image.name} style={{ width: '100%', height: '100%' }} />
        ))}
        </div>
        </div>
        
        </>
    )
}