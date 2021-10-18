import Image from 'next/image'


export default function About({src, alt, name, description, socials}) {
    return (
       <div className='about'>
           
           <Image className='aboutImage' src={src} alt={alt} height={100} width={100}/>
           
           <h3>{name}</h3>
           <p>{description}</p>
           <div>{socials}</div>
       </div>


    );
};