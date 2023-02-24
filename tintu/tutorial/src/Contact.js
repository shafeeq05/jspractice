
function Con(param){
    console.log(param.name);
    console.log(typeof param.id);
    
    let text;
    return(
        <>
        <h1>enter {param.name}</h1>
        <input type={param.type}/>
        <button >Click me</button>
        <p>{text}</p>
        </>  
    );
}
export default Con;