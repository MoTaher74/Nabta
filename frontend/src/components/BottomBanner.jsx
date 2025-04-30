import { assets } from "../assets/assets";
import { features } from "../assets/assets";


const BottomBanner = () => {

    const renderFeatureIcons = features.map((feat,idx)=>(
        <div className="flex items-center gap-4 mt-2" key={idx}>
        <img src={feat.icon} alt={feat.title} className="md:w-11 w-9"/>
        <div >

        <h4 className="text-lg md:text-xl font-semibold">{feat.title}</h4>
        <p className="text-gray-500/70 text-xs md:text-sm">{feat.description}</p>
        </div>
          
 
      </div>
    ))
    return (
        <div className="relative mt-26"> 
        <img src={assets.bottom_banner_image} alt="banner bottom" className="w-full hidden md:block"/>     
        <img src={assets.bottom_banner_image_sm} alt="banner bottom" className="w-full md:hidden"/>

        <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
            <div>

            <h1 className="text-2xl md:text-3xl font-semibold mb-5 text-primary">Why We Are the Best ?</h1>
            {renderFeatureIcons}
            </div>

        </div>
     
        </div>
    )
}

export default BottomBanner;