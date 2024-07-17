import { Dialog } from '.';
import React, { useEffect, useState } from 'react';
import { Button } from '../../buttons/Button';

const meta = {
  title: 'Popup',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Main = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // if(isOpen){
    //   testRef.current.showModal()
    // }else{
    //   testRef.current.close()
    // }
    // open()
  }, []);

  // const testRef = useRef<HTMLDialogElement>(null)
  // const open = () => testRef.current.showModal()
  const close = () => setIsOpen(false);
  // const close = () => testRef.current.close()1

  return (
    <div className='z-[50] flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Dialog
        // ref={ testRef }
        isOpen={isOpen}
        backdrop
        blur="sm"
        opacity="md"
        className="rounded-md bg-gray-700 text-white shadow-button-up drop-shadow-scaled"
        onClose={() => close()}
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Dialog>

      <Button
        onClick={() => setIsOpen(true)}
        className="text-white text-2xl px-5 py-2 bg-dark-grey"
      >
        Open Modal
      </Button>
      {/* <Primary onClick={() => open()} className='text-white text-2xl px-5 py-2 bg-dark-grey'>Open Modal</Primary> */}
    </div>
  );
};

export const slideUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Dialog
        open={isOpen}
        variant="up"
        backdrop
        opacity="md"
        onClose={() => setIsOpen(false)}
        className="bg-dark-grey text-white rounded-md"
      >
        <div className="text-2xl p-20 h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Dialog>

      <Button
        onClick={() => setIsOpen(true)}
        className="text-white text-2xl px-5 py-2 rounded-md bg-dark-grey"
      >
        Open Modal
      </Button>
    </div>
  );
};

export const slideRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Dialog
        open={isOpen}
        variant="right"
        backdrop
        opacity="md"
        onClose={() => setIsOpen(false)}
        className="rounded-3xl text-white bg-gray-700"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Dialog>

      <Button
        onClick={() => setIsOpen(true)}
        className="text-white text-2xl px-5 py-2 rounded-xl bg-dark-grey"
      >
        Open Modal
      </Button>
    </div>
  );
};

export const slideLeft = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Dialog
        open={isOpen}
        variant="left"
        onClose={() => setIsOpen(false)}
        className="text-white bg-dark-grey"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Dialog>

      <Button
        onClick={() => setIsOpen(true)}
        className="text-white text-2xl px-5 py-2 rounded-3xl bg-dark-grey"
      >
        Open Modal
      </Button>
    </div>
  );
};

export const scale = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Dialog
        open={isOpen}
        variant="scale"
        onClose={() => setIsOpen(false)}
        className="text-white bg-dark-grey"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Dialog>

      <Button
        onClick={() => setIsOpen(true)}
        className="text-white text-2xl px-5 py-2 rounded-xl bg-dark-grey"
      >
        Open Modal
      </Button>
    </div>
  );
};

export const glass = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Dialog
        open={isOpen}
        variant="right"
        glass
        glassblurr="md"
        backdrop
        opacity="md"
        onClose={() => setIsOpen(false)}
        className="rounded-3xl text-white"
      >
        <div className="text-2xl p-20 flex flex-col h-full w-full">
          Click anywhere outside of the modal to close
        </div>
      </Dialog>

      <Button
        glass
        onClick={() => setIsOpen(true)}
        className="text-white text-2xl px-5 py-2 rounded-xl"
      >
        Open Modal
      </Button>
    </div>
  );
};
