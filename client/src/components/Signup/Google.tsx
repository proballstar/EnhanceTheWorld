import { NextRouter } from 'next/router';
import { Dispatch } from 'react';

interface GoogleRegisterProps {
    google: any;
    router: NextRouter;
    setMessage: Dispatch<JSX.Element> | any
}

export default function GoogleRegister(props: GoogleRegisterProps) {
    
    async function handleGoogle() {
    try {
      await props.google('signup')
      props.router.push('/auth/events/all')
    } catch (error) {
      props.setMessage(<div>
        {error.code ? error.code : JSON.stringify(error)}
      </div>)
    }
  }
    
    return (
        <button onClick={() => handleGoogle()} className='bg-blue-400 text-white px-4 py-2 rounded-md shadow-md' type="submit">
          Google
        </button>
    )
}