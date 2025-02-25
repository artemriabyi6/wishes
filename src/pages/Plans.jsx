import {  } from "react";
import Input from "../components/input/Input";
import Header from "../components/header/header";
import List from "../components/List";


const Plans = (props) => {

 
//  useEffect(() => {
//         const storedPlans = JSON.parse(localStorage.getItem('plans'))
//         props.setPlans(storedPlans)
//  }, [])


    

    return (
         <>
        
        
            <Header   mode={props.mode} setMode={props.setMode}/>   
        
            <Input  plans={props.plans} 
                    setPlans={props.setPlans} 
                    done={props.done} 
                    setDone={props.setDone}
                    adults={props.adults}
                    setAdults={props.setAdults}
                    doneAdults={props.doneAdults}
                    setDoneAdults={props.setDoneAdults}
                    mode={props.mode}
                    setMode={props.setMode}
                    setItemToLocalStorage={props.setItemToLocalStorage}
                    getItemFromLocalStorage={props.getItemFromLocalStorage}
                    />

                    
            <List  plans={props.plans} 
                    setPlans={props.setPlans} 
                    done={props.done} 
                    setDone={props.setDone}
                    adults={props.adults}
                    setAdults={props.setAdults}
                    doneAdults={props.doneAdults}
                    setDoneAdults={props.setDoneAdults}
                    mode={props.mode}
                    setMode={props.setMode}
                    setItemToLocalStorage={props.setItemToLocalStorage}
                    getItemFromLocalStorage={props.getItemFromLocalStorage}
                    />

                
         </> 
        );
}
 
export default Plans;