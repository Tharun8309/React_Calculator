import React from 'react'

const SmallButton = ({text,color,onclickhandler}) => {
 
    if(color=="orange")
    return <button onClick={onclickhandler} className="py-4 rounded-lg bg-orange-500 text-white hover:bg-orange-600">{text}</button>;
    else
    if(color=="grey")
    return <button onClick={onclickhandler} className="py-4 rounded-lg bg-gray-100 hover:bg-gray-200">{text}</button>;
  
}
export default SmallButton;

