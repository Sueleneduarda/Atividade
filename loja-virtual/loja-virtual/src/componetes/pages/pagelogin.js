import './pagelogin.css';
import{Link} from 'react-router-dom';
import Login from '../Complogin/complogin1';
import Input1 from '../Complogin/complogin2';
import Input2 from '../Complogin/complogin3';
import Button from '../Complogin/complogin4';


function Pagelogin() {
  return (
    <div className="containerMain" >

    <div className = "Container">

    <div className ="Login">
      < Login name = "Login" /></div> 

    <div className = "usuario" >
      <h2>Username</h2>
      <Input1 name="Username" />
      <h2>Password</h2>
      <Input2 name="Password" />
      </div >

    <div className="Button">
      <Button name="Login" />

    
    </div>
 
    
    </div>
    </div>
  );
}




export default Pagelogin;
