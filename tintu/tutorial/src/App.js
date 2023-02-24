import logo from './logo.svg';
import { Heade,foot } from './Sha';
import Con from './Contact';

import './App.css';

function App() {
    let sty = {backgroundColor:"#1735422"}
    return (
        <div>
        <p>{hello()}</p>
         <h1> <Heade/></h1>
         <Con name="email" type="password"/>
         <Con id={5} name="phone" click/>
         
         

        </div>
    );
}
function hello(){
    let x= 19
    return <h4>{x>18?"youreligible":"not eligible"}</h4>;
}

export default App;
