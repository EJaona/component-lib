import { Icon } from '.';
import React from 'react';


const meta = {
  title: 'Icons',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
  },
} 

export default meta


export const Main = () => {
  
  return(
    <div className='grid grid-cols-5 place-content-evenly place-items-center w-screen h-screen bg-main-gradient text-6xl'>
      <Icon name='react' />
      <Icon name='nodejs' />
      <Icon name='tailwind-css' />
      <Icon name='python' />
      <Icon name='linkedin' />
      <Icon name='facebook' />
      <Icon name='github' />
      <Icon name='twitter' />
      <Icon name='instagram' />
      <Icon name='docker' />
      <Icon name='go-lang' />
      <Icon name='unity' />
      <Icon name='slack' />
      <Icon name='wifi' />
      <Icon name='gmail' />
      <Icon name='heroku' />
      <Icon name='netlify' />
      <Icon name='java' />
      <Icon name='aws' />
      <Icon name='tiktok' />
      <Icon name='dropbox' />
      <Icon name='cat' />
      <Icon name='cart-add' />
      <Icon name='accessibility' />
      <Icon name='alarm' />
      <Icon name='airbnb' />
      <Icon name='angular' />
      <Icon name='car' />
      <Icon name='adobe' />
      <Icon name='camera' />
      <Icon name='django' />
      <Icon name='library' />
      <Icon name='opera' />
      <Icon name='error-alt' />
      <Icon name='paypal' />
      <Icon name='laptop' />
      <Icon name='sushi' />
      <Icon name='skype' />
      <Icon name='php' />
      <Icon name='youtube' />
      <Icon name='calculator' />
      <Icon name='amazon' />
      <Icon name='ambulance' />
      <Icon name='hash' />
      <Icon name='hdd' />
    </div>
  )
}
