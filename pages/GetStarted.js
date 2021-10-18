import Image from 'next/image'



export default function GetStarted() {
    return (
       <div className='getStarted'>
           <h2>get started</h2>
            <form>
                <label>name</label>
                <input htmlFor='name'></input>
                <label>email</label>
                <input htmlFor='name'></input>
                <label>phone</label>
                <input htmlFor='name'></input>
                <label>your project</label>
                <input htmlFor='name'></input>
            </form>

       </div>


    );
};