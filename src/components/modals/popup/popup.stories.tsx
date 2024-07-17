import { Popup } from '.';
import React, { useEffect, useRef } from 'react';
import { Primary } from '../../buttons/Primary';

const meta = {
  title: 'Popup',
  component: Popup,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Main = () => {
  const testRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    testRef.current.showModal();
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Popup
        ref={testRef}
        backdrop
        blur="sm"
        opacity="md"
        className="rounded-md bg-gray-700 text-white shadow-button-up drop-shadow-scaled"
        close={() => testRef.current.close()}
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Popup>

      <Primary
        onClick={() => testRef.current.showModal()}
        className="text-white text-2xl px-5 py-2 bg-dark-grey"
      >
        Open Modal
      </Primary>
    </div>
  );
};

export const slideUp = () => {
  const testRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    testRef.current.showModal();
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Popup
        ref={testRef}
        variant="up"
        backdrop
        opacity="md"
        close={() => testRef.current.close()}
        className="bg-dark-grey text-white rounded-md"
      >
        <div className="text-2xl p-20 h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Popup>

      <Primary
        onClick={() => testRef.current.showModal()}
        className="text-white text-2xl px-5 py-2 rounded-md bg-dark-grey"
      >
        Open Modal
      </Primary>
    </div>
  );
};

export const slideRight = () => {
  const testRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    testRef.current.showModal();
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Popup
        ref={testRef}
        variant="right"
        backdrop
        opacity="md"
        close={() => testRef.current.close()}
        className="rounded-3xl text-white bg-gray-700"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Popup>

      <Primary
        onClick={() => testRef.current.showModal()}
        className="text-white text-2xl px-5 py-2 rounded-xl bg-dark-grey"
      >
        Open Modal
      </Primary>
    </div>
  );
};

export const slideLeft = () => {
  const testRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    testRef.current.showModal();
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Popup
        ref={testRef}
        variant="left"
        close={() => testRef.current.close()}
        className="text-white bg-dark-grey"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Popup>

      <Primary
        onClick={() => testRef.current.showModal()}
        className="text-white text-2xl px-5 py-2 rounded-3xl bg-dark-grey"
      >
        Open Modal
      </Primary>
    </div>
  );
};

export const scale = () => {
  const testRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    testRef.current.showModal();
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Popup
        ref={testRef}
        variant="scale"
        close={() => testRef.current.close()}
        className="text-white bg-dark-grey"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Popup>

      <Primary
        onClick={() => testRef.current.showModal()}
        className="text-white text-2xl px-5 py-2 rounded-xl bg-dark-grey"
      >
        Open Modal
      </Primary>
    </div>
  );
};

export const glass = () => {
  const testRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    testRef.current.showModal();
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Popup
        ref={testRef}
        variant="right"
        glass
        glassblurr="md"
        backdrop
        opacity="md"
        close={() => testRef.current.close()}
        className="rounded-3xl text-white"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Popup>

      <Primary
        glass
        glassblurr="md"
        onClick={() => testRef.current.showModal()}
        className="text-white text-2xl px-5 py-2 rounded-xl"
      >
        Open Modal
      </Primary>
    </div>
  );
};
