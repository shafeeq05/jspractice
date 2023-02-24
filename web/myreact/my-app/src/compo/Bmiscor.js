
function Bmiscor({bmino,bminame}){
    
    // const {bmino,bminame}=props
    
    return(
        <div className="text-center shadow rounded p-4">
            <div>your BMI score </div>
            <div className="row justyfy-content-center"> 
             <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmino}</div>
             </div>
             <div className="fs-3 fw-bold text-primary">{bminame}</div>
             </div>
    )
}
export default Bmiscor