import React from 'react'

const CustomButton = ({btnType, title, handleClick}) => {
  return (
    <button
    type={btnType}
    className={`font-epilougue font-semibold  text-[16px] leading-[26px] text-white min-h-[52px] rounded-[10px] $  {styles}`}
    onClick={handleClick}
    >

{title}      
    </button>
  )
}

export default CustomButton
