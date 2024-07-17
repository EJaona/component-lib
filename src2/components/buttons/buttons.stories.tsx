import React from 'react';
import { Button } from './Button';
import { Icon } from '../dynamicIcon';

const meta = {
  title: 'Buttons',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Main = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center bg-gray-300 ">
      <div className="flex justify-center items-center bg-dark-grey w-1/3 p-10 rounded-3xl">
        <Button className="text-white p-5 rounded-3xl text-2xl flex justify-center items-center gap-2">
          <p>LogIn</p>
          <Icon name="user-account" />
        </Button>
      </div>

      <div className="flex justify-center items-center bg-slate-400 w-1/3 p-10 rounded-3xl">
        <Button className="text-white text-3xl p-5 rounded-3xl flex justify-center items-center gap-2">
          <p>Add To Cart</p>
          <Icon name="cart-add" />
        </Button>
      </div>

      <div className="flex justify-center items-center bg-gray-500 w-1/3 p-10 rounded-3xl">
        <Button className="text-white text-3xl p-5 rounded-3xl flex justify-center items-center gap-2">
          <p>Subscribe</p>
          <Icon name="youtube" className="text-red-500 bg-white rounded-md" />
        </Button>
      </div>
    </div>
  );
};

export const Glass = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-10 justify-center items-center bg-gray-300 ">
      <div className="flex justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg')] bg-cover w-1/3 p-10 rounded-3xl">
        <Button
          glass
          glassblurr="lg"
          className="text-white px-10 py-5 rounded-3xl text-2xl flex justify-center items-center gap-2"
        >
          <p>LogIn</p>
          <Icon name="user-account" />
        </Button>
      </div>

      <div className="flex justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876_960_720.jpg')] bg-cover w-1/3 p-10 rounded-3xl">
        <Button
          glass
          glassblurr="sm"
          className="text-white text-3xl p-5 rounded-3xl flex justify-center items-center gap-2"
        >
          <p>Add To Cart</p>
          <Icon name="cart-add" />
        </Button>
      </div>

      <div className="flex justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_960_720.jpg')] bg-cover w-1/3 p-10 rounded-3xl">
        <Button
          glass
          glassblurr="md"
          className="text-white text-3xl p-5 rounded-3xl flex justify-center items-center gap-2"
        >
          <p>Subscribe</p>
          <Icon name="youtube" className="text-red-500 bg-white rounded-md" />
        </Button>
      </div>
    </div>
  );
};

export const Secondary = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <form action="#" className="flex flex-col p-10 gap-10"></form>
    </div>
  );
};
