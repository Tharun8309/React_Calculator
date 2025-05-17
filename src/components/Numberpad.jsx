import SmallButton from './SmallButton';
import LargeButton from './LargeButton';
import Display from './Display';

const Numberpad =({count,setCount})=>
{
    const onclickhandler =(text)=>
    {  
         console.log(text);
         console.log(count+text);
        setCount(count+text);
    }
 
 return(
 <>
 <Display textoshow={count}/>
 <div className="grid grid-cols-4 gap-4 text-lg font-semibold">
 <LargeButton text="C" onclickhandler={()=>setCount("")}/>
 <LargeButton text="/" onclickhandler={()=> onclickhandler("/")}/>
 <SmallButton text="7" color="grey" onclickhandler={()=> onclickhandler("7")}/>
 <SmallButton text="8" color="grey" onclickhandler={()=> onclickhandler("8")}/>
 <SmallButton text="9" color="grey" onclickhandler={()=> onclickhandler("9")}/>
 <SmallButton text="*" color="orange" onclickhandler={()=> onclickhandler("*")}/>
 <SmallButton text="4" color="grey" onclickhandler={()=> onclickhandler("4")}/>
 <SmallButton text="5" color="grey" onclickhandler={()=> onclickhandler("5")}/>
 <SmallButton text="6" color="grey" onclickhandler={()=> onclickhandler("6")}/>
 <SmallButton text="-" color="orange" onclickhandler={()=> onclickhandler("-")}/>
 <SmallButton text="1" color="grey" onclickhandler={()=> onclickhandler("1")}/>
 <SmallButton text="2" color="grey" onclickhandler={()=> onclickhandler("2")}/>
 <SmallButton text="3" color="grey" onclickhandler={()=> onclickhandler("3")}/>
 <SmallButton text="+" color="orange" onclickhandler={()=> onclickhandler("+")}/>
 <LargeButton text="0" onclickhandler={()=> onclickhandler("0")}/>
 <SmallButton text="." color="orange" onclickhandler={()=> onclickhandler(".")}/>
 <SmallButton text="=" color="orange" onclickhandler={()=> setCount(eval(count))}/>
 </div>
 </>
 );
}
export default Numberpad;