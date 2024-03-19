import React from 'react';
import ButtonCheckout from './buttonCheckout';

const Checkout = () => {
  return (
    <div className="grid-cols-1 w-full md:w-m h-auto md:h-m box-border border-2 rounded-xl mx-auto md:mx-0 md:flex md:flex-col md:justify-center">

      <div className='ml-9 mt-4'>
        <p className='text-lg font-semibold'>Alamat</p>
        <input
          className="w-full md:w-sm h-s rounded-lg px-4 text-base bg-input focus:outline-none"
          id="alamat"
          type="text"
          placeholder="Masukkan alamat"
        />
      </div>

      <hr className='separator w-full md:w-sm mt-4 mx-auto' />

      <div className='flex justify-between text-lg mx-9 mt-4 font-semibold'>
        <p>Total Item</p>
        <p>2</p>
      </div>

      <hr className='separator w-full md:w-sm mt-4 mx-auto' />
      
      <div className='flex justify-between text-lg mx-9 mt-4 font-semibold'>
        <p>Subtotal</p>
        <p className='text-checkout'>$392,409</p>
      </div>

      <ButtonCheckout/>

    </div>
  );
}

export default Checkout;
