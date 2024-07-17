import { Drawer } from '.';
import React, { useEffect, useState } from 'react';
import { Button } from '../../buttons/Button';

const meta = {
  title: 'Drawer',
  component: Drawer,
  argTypes: {
    removeOverlay: { control: 'boolean' },
    overlayNone: { exists: true },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Top = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Drawer
        variant="top"
        isOpen={isOpen}
        backdrop
        blur="lg"
        closeDrawer={() => setIsOpen(false)}
        className=" w-full h-1/3 bg-gray-300 drop-shadow-standard"
      >
        <div className="text-5xl bg-main-gradient bg-clip-text text-transparent">
          Click anywhere outside of the drawer to close
        </div>
      </Drawer>

      <Button
        className="bg-gray-300 p-3 rounded-xl"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </Button>
    </div>
  );
};

export const Right = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Drawer
        isOpen={isOpen}
        variant="right"
        backdrop
        opacity="lg"
        closeDrawer={() => setIsOpen(false)}
        className="w-1/3 h-full text-white text-2xl p-10 flex flex-col bg-dark-grey"
      >
        <div className="text-5xl bg-main-gradient bg-clip-text text-transparent">
          Click anywhere outside of the drawer to close
        </div>
      </Drawer>

      <Button
        className="text-white bg-dark-grey text-xl rounded-3xl px-5 py-2"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </Button>
    </div>
  );
};

export const Bottom = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Drawer
        isOpen={isOpen}
        variant="bottom"
        backdrop
        blur="md"
        opacity="md"
        closeDrawer={() => setIsOpen(false)}
        className="h-1/4 w-full text-white text-2xl bg-dark-grey"
      >
        <div className="text-5xl bg-main-gradient bg-clip-text text-transparent">
          Click anywhere outside of the drawer to close
        </div>
      </Drawer>

      <Button
        className="text-white bg-dark-grey text-xl rounded-2xl px-5 py-2"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </Button>
    </div>
  );
};

export const Left = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Drawer
        variant="left"
        backdrop
        isOpen={isOpen}
        closeDrawer={() => setIsOpen(false)}
        className="h-full w-1/3 bg-gray-300 text-white text-2xl flex flex-col justify-center items-center"
      >
        <div className="text-5xl bg-main-gradient bg-clip-text text-transparent drop-shadow-underline p-10">
          Click anywhere outside of the drawer to close
        </div>
      </Drawer>

      <Button
        className="text-xl px-5 py-2 bg-gray-300 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </Button>
    </div>
  );
};

export const Glass = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <Drawer
        isOpen={isOpen}
        variant="right"
        glass
        glassblurr="lg"
        backdrop
        opacity="sm"
        closeDrawer={() => setIsOpen(false)}
        className="w-1/3 h-full text-white text-2xl p-10 flex flex-col"
      >
        <div className="text-5xl bg-main-gradient bg-clip-text text-transparent w-full h-full">
          Click anywhere outside of the drawer to close
        </div>
      </Drawer>

      <Button
        glass
        glassblurr="sm"
        className="text-white text-xl rounded-3xl px-5 py-2"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </Button>
    </div>
  );
};
