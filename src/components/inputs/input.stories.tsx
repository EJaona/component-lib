
import { LabeledInput, LabeledTextArea } from '.';
import React from 'react';



const meta = {
  title: 'Input',
  component: LabeledInput,
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Input = () => {

  return(<div className='flex gap-10 bg-gray-300 justify-center items-center'>
    <div className=" h-screen flex flex-col gap-10 justify-center items-center ">
      <form className='p-10 flex flex-col bg-slate-500 rounded-lg'>
        <LabeledInput required variant='rounded' radius='lg' name='rounded1' type='text' className=' text-white'/>          
      </form>
      
      <form className='p-10 flex flex-col  bg-gray-500 rounded-lg'>
        <LabeledInput  variant='standard' name='standard1' type='email' className=' text-white' />
      </form>
      
      <form className='p-10 flex flex-col bg-dark-grey rounded-lg'>
        <LabeledInput required variant='underline' name='underline1' type='phone' className=' text-white'/>
      </form>
    </div>

    <form className='p-10 gap-10 flex flex-col h-2/3 bg-slate-500 rounded-lg  justify-center items-center'>
      <LabeledInput required variant='rounded' radius='lg' name='rounded' type='text' className=' text-white'/>          
      <LabeledInput  variant='standard' name='standard' type='email' className='text-white' />
      <LabeledInput required variant='underline' name='underline' type='phone' className='text-white'/>
    </form>
    </div>
  )
}

export const GlassInput = () => {

  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>

      <form className='h-2/3 w-1/3 p-10 flex flex-col gap-10 bg-white/[.07] backdrop-blur-lg backdrop-brightness-75 rounded-lg'>
        <LabeledInput required glass variant='rounded' radius='lg' name='rounded' type='text' className='text-white'/>
        <LabeledInput  glass variant='standard' name='standard' type='email' className='text-white'/>
        <LabeledInput required glass variant='underline' name='underline' type='phone' className='text-white'/>
      </form>
    </div>
  )
}

export const TextArea = () => {

  return(
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-300">
      <form className='flex flex-col p-10 gap-10 bg-slate-500'>
        <LabeledTextArea variant='rounded' required radius='lg' name='rounded' rows={4} className=''/>
      </form>

      <form className='flex flex-col p-10 gap-10  bg-gray-500'>
        <LabeledTextArea variant='underline' name='underline' rows={4} className=''/>
      </form>

      <form className='flex flex-col p-10 gap-10 bg-dark-grey'>
        <LabeledTextArea variant='standard' required name='standard' rows={4} className=''/>
      </form>
    </div>
  )
}

export const GlassTextArea = () => {

  return(
    <div className='flex items-center justify-center w-screen h-screen bg-[url("https://images.pexels.com/photos/3750777/pexels-photo-3750777.jpeg?")] bg-cover'>
      <form className='flex flex-col p-10 gap-10 bg-white/[.07] backdrop-blur-lg backdrop-brightness-75 rounded-lg'>
        <LabeledTextArea glass variant='rounded' required radius='lg' name='rounded' rows={4} className=''/>
        <LabeledTextArea glass variant='standard' required name='standard' rows={4} className=''/>
        <LabeledTextArea glass variant='underline' name='underline' rows={4} className=''/>
      </form>
    </div>
  )
}

