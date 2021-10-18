import Image from 'next/image'
import About from './About';


export default function Who() {
    return (
       <div className='who'>
           <h2>who we are</h2>
           <div className='abouts'>
           <div className='aboutContainer'>
           <About src={'/../public/logan.jpg'} alt={'logan'} name={'j.logan affleck'} description={'bolalsdglk'} socials={'eyy'}/>

           <About src={'/../public/anjuli.jpg'} alt={'anjuli'} name={'anjuli waybright'} description={'bolalsdglk'} socials={'eyy'}/>
           </div>
           </div>
            
           

       </div>


    );
};