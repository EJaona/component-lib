import { Toast } from '.';
import React, { useEffect, useState } from 'react';
import { Primary } from '../buttons/Primary';

const meta = {
  title: 'Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Main = () => {
  const [message, setIsMessage] = useState<string | null>();

  useEffect(() => {
    setIsMessage('This is an example toast message displayed');
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-300">
      <Toast
        message={message}
        close={() => setIsMessage(null)}
        className="bg-dark-grey text-white rounded-lg"
      />

      <Primary
        onClick={() =>
          setIsMessage('This is an example toast message displayed')
        }
        className="p-3 rounded-lg"
      >
        Open Toast
      </Primary>
    </div>
  );
};

export const Glass = () => {
  const [message, setIsMessage] = useState<string | null>();

  useEffect(() => {
    setIsMessage('This is an example toast message displayed');
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Toast
        message={message}
        close={() => setIsMessage(null)}
        glass
        glassblurr="md"
        className="text-white rounded-lg"
      />

      <Primary
        glass
        glassblurr="md"
        onClick={() =>
          setIsMessage('This is an example toast message displayed')
        }
        className="p-3 rounded-lg text-white"
      >
        Open Toast
      </Primary>
    </div>
  );
};
