import { useState } from 'react';

const App = () => {
  const [buttonText, setButtonText] = useState<string>('Login');
  return (
    <>
      <h1>MovieFlix</h1>
      <button className='btn' onClick={() => setButtonText('Logout')}>
        {buttonText}
      </button>
    </>
  );
};
export default App;
