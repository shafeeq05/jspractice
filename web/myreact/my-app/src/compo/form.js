import { useState } from "react"

 function Form({getdata}){
   const [Weight,setWeight]=useState("");
   const [Hight,setHight]=useState("");
   const[alert,setAlert]=useState(false)
   const onSubmit=(e)=>{
    e.preventDefault();
    if(isNaN(Weight)||isNaN(Hight)){
        console.log("not a number");
        setAlert(true);
    }else
    setAlert(false)
    getdata(Weight,Hight)
    // console.log((Weight/(Hight*Hight))*10000)
   }
  
//    (alert)?alertmsg=alertmsg=<div className="alert alert-danger" role="alert">plz enter valid data</div>:alertmsg=''

    
    return(
       
            <div className="col-sm-4 shadow-rounded-px-5">
                
            <h1 className="text-center pt-3 text-secondary h2">BMI Calculartor</h1>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col col-sm-6">
                        <div className="my-3">
                            <label className="form-label" >Weight(kg) : </label>
                            <input type="text" value={Weight} onChange={(e)=>{setWeight(e.target.value);console.log(e.target.value)}} required  className="form-control"></input>

                        </div>
                    </div>
                    <div className="col col-sm-6">
                        <div className="my-3">
                            <label className="form-label" >Hight(cm) : </label>
                            <input type="text" value={Hight} onChange={(e)=>{setHight(e.target.value);console.log(e.target.value);}} required className="form-control" ></input>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary my-3"  value="Get BMI"></input>
            </form>
                {alert&&<div className="alert alert-danger" role="alert">plz enter valid data</div> }
            </div>
        
    )
}
export default Form