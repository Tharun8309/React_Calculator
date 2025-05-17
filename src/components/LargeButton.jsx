import React from 'react'

const LargeButton = ({text,onclickhandler}) => {
  return (
     <button onClick={onclickhandler} className="py-4 rounded-lg bg-orange-500 text-white hover:bg-orange-600 col-span-2">{text}</button>
  );
}

export default LargeButton