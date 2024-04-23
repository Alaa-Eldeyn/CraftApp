import img1 from '../../Assets/images/Group 15.png'
import img2 from '../../Assets/images/Group 2.png'
import img3 from '../../Assets/images/ai.png'
import img4 from '../../Assets/images/first-logo.png';
import style from '../Home/Home.module.css'


export default function Home(){
    return <>

        <div className={style.body}>
            <section className='pt-5 mt-5'>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-7 col-md-6 px-md-1 px-lg-5">
                            <div className="text">
                                <h2 className={style.head}>Elevate your style with <span className={style.span}>unique </span>personalized outfits</h2>
                                <p  className={style.content}>Transform your style with "Custom Craft", 
                                    using advanced design tools and AI features 
                                    to turn ordinary outfits into personalized 
                                    masterpieces.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6 px-md-1 px-lg-5">
                            <div className="img">
                                <img src={img1} className='w-100' alt="back ground"  />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className={`mt-5 ${style.section}`}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-5 col-md-6 px-md-1 px-lg-5">
                        <div className="img d-flex justify-content-center">
                            <img src={img2} className='w-md-75 w-100 p-5 ' alt="back ground"  />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-6 px-md-1 px-lg-5">
                        <div className={style.sec2}>
                            <h2 className={style.head}>Create Your moment</h2>
                            <p  className={style.content}>Effortlessly personalize your wardrobe with “Custom Craft” design tools, tailoring your style to reflect your unique taste, while transforming ideas into captivating visuals using our AI image generator for 
                            a personalized and immersive creative experience
                            </p>
                            <button type="button" className='btnn cursor  px-5  mb-5'>Customize Now</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>

            <section className='my-5 '>
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center ">
                    <div className="col-xl-6  col-md-7 px-md-1  ps-lg-5 ">
                        <div className="text">
                            <h2 className={style.head2}>AI 'Search for Similar'</h2>
                            <p  className={style.content}>Discover personalized styles effortlessly with our AI-driven 'Search for Similar' feature in [Custom Craft], 
                            enhancing your outfit customization experience.
                            </p>
                        </div>
                    </div>
                    <div className=" col-md-5 offset-lg-1 col-lg-4 ">
                        <div className="img d-flex justify-content-center">
                            <img src={img3} className='w-75  ' alt="back ground"  />
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>

            <section className={`pt-5 ${style.footer} ${style.section}`}>
                <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-4 ">
                        <div className="img">
                            <img src={img4}  alt="back ground"  />
                            <p className={style.contFooter}>Revolutionize your style with 
                                "Custom Craft" , using AI tools
                                to personalize ordinary outfits.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="text">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>

        </div>
    </>
}