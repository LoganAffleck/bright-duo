import Image from 'next/image'
import About from './About';

let logan = { 
    src: '/../public/logan.jpg',
    alt: 'a picture of logan affleck',
    staffName: 'j. logan affleck',
    description: 'Logan is a visual designer and fullstack developer. Additionally, he has shown excellence in customer communications and management of high-risk customer-facing scenarios through his Stevie Award-winning work at Google Fiber, Vacasa, and Builder.io.',
    socials: {
        github: 'https://github.com/LoganAffleck',
        linkedin: 'https://www.linkedin.com/in/j-logan-affleck/',
        twitter: 'https://twitter.com/loganwaffleck',
        twitch: 'https://www.twitch.tv/loganwaffle',
        instagram:'https://www.instagram.com/affleck.logan/'
    }
}

let anjuli = { 
    src: '/../public/anjuli.jpg',
    alt: 'a picture of anjuli waybright',
    staffName: 'anjuli waybright',
    description: 'Anjuli is a business strategist and social media marketer. She has managed government and luxury experiences, and loves to build and maintain online presence. Anjuli ',
    socials: {
        linkedin: '',
        twitter: '',
        instagram:'',
        facebook: ''
    }
}


export default function Who() {
    return (
       <div className='who'>
           <h2 className='whoTitle'>who we are</h2>
           <div className='abouts'>
           <div className='aboutContainer'>
           <About src={'/../public/logan.jpg'} alt={'logan'} name={'j.logan affleck'} description={'bolalsdglk'} socials={'eyy'}/>

           <About src={'/../public/anjuli.jpg'} alt={'anjuli'} name={'anjuli waybright'} description={'bolalsdglk'} socials={'eyy'}/>
           </div>
           </div>
            
           

       </div>


    );
};