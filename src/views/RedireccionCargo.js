import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth} from '../auth-context'


function RedireccionCargo() {
    const { cargo } = useAuth();
    const [timeLeft, setTimeLeft] = useState(5)
    console.log(cargo)
    let navigate = useNavigate();

    if(cargo === 3){
         // setTimeout may cause an error
        setTimeout(() => {
            navigate('/admin')
        }, 10)
    }

    else if (cargo===2){
         // setTimeout may cause an error
         setTimeout(() => {
            navigate('/gerente')
        }, 10)
    }

    else if (cargo===1){
        // setTimeout may cause an error
        setTimeout(() => {
           navigate('/laboratorio')
       }, 10)
   }

   else if (cargo===4){
    // setTimeout may cause an error
    setTimeout(() => {
       navigate('/bascula')
   }, 10)
}


    
    // setInterval(() => {
    //     setTimeLeft(timeLeft-1)
    //     }, 3000)
    
    
    return (
            <div className="redirect-body ">
                    <div className="redirect-main orange-bg">
                        {/* <p className="redirect-header">¡Bienvenido!</p> */}
                        
        
                        {/* <p className="manrope3 blanco">{`Redirigiendo a su panel de administración en ${timeLeft}`}</p> */}
                        
                    </div>
            </div>
    );
}

export default RedireccionCargo