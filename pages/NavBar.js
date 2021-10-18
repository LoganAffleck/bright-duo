import Image from 'next/image'


export default function navBar() {
    return (
        <div className='navBar'>
            <a href='brightduo.studio' className='navLogoLink'> 
            <Image src='/../public/logo.svg'
                   alt='logo of brightduo studio'
                   width={40}
                   height={40}
            />
            <p className='navText'>Bright Duo</p>
            </a>
            
            <div className='menu'>
                <Image src='/../public/hamburger.svg'
                       alt='hamburger button'
                       width={30}
                       height={30}
                />
            </div>

        </div>
    );
};