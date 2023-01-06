import React from 'react'

const BottomButton = ({text}) => {
  return (
    <input
      type="submit"
      value={text}
      class="bg-custom-color-1 w-full rounded-lg py-6 text-xl text-black font-bold hover:bg-custom-color-2 "
    />
  );
}

export default BottomButton