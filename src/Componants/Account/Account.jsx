
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputText';
// import { useState } from 'react';
        
// export default function Account(){
//     const [UploadImge , setUploadImge] = useState('')
//     const [display , setDisplay] = useState(false)

//     return <>
//         <img src="" alt="Img profile " 
//         style={{width: '200px' , 
//         height:'200px' ,
//         borderRadius:'50%' ,
//         objectFit:'cover' ,
//     border:'1px solid green '}}
//         />

//         <InputText 
//         type='file'
//         accept='/image/*'
//         onChange={(e)=>{
//             const file = e.target.files[0];
//             if(file && file.type.substring(0,5) === 'image'){
//                 setUploadImge(file)
//             }
//             else {
//                 setUploadImge(null)
//             }
//         }}
        
//         />
//     </>
// }