import { useState } from 'react';
import './App.css';
import Bmilist from './compo/Bmilist';
import Bmiscor from './compo/Bmiscor';
import Form from './compo/form';

function App() {
  const [bmi,setbmi]=useState("")
  const [bmiType,setbmitype] = useState("")
  const onForm=(w,h)=>{
    let b= calbmi(w,h);
    setbmi(b)
    setbmitype(weType(b))
    console.log(w,h);
  }
  const calbmi=(w,h)=>{
    return (w/(h*h)*10000).toFixed(3);
  }
  const weType=(x)=>{
    if(x<18){
      return 'under weight';
    }else if(x>18&&x<22){
      return 'normal';
    }else if(x>22){
      return 'overweght';
    }else {
      return 'in valid input'
    }
  }

  return(
    <>
    <div className='container'>
      <div className='row justyfy-content-center mt-5 mx-2'>
    <Form getdata={onForm}/>
    </div>
    <div className='row justyfy-content-center mt-5'>
      <div className='col-12 col-sm-6 mb-5'>
      <Bmiscor bmino={bmi} bminame={bmiType}/>
      <Bmilist/>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
