const Display = ({textoshow})=>
{
return  <input
      type="text"
      className="w-full text-right text-2xl font-mono p-4 rounded-lg bg-gray-100 mb-4"
      placeholder={textoshow}
      disabled
    />;
}
export default Display;