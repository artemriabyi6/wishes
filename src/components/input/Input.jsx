import { useRef} from "react";

const Input = ({setPlans, plans, adults, setAdults, mode, setItemToLocalStorage, getItemFromLocalStorage}) => {

    const inputRef = useRef(null)

   



   



    const logger = (mode) => {
        if(inputRef.current.value && mode) {
            setAdults([...adults, inputRef.current.value ])
            
           
            console.log('Adults: ',adults)
        } else if(inputRef.current.value && !mode) {
            setPlans([...plans, inputRef.current.value ])
            
        }
        else {
            return
        }

        inputRef.current.value = ''
    }

    return ( 
        <div className="input-box">
         <input ref={inputRef} type="text" className="input" placeholder="Type something..."/>
         <button className="add-btn" onClick={() => logger(mode)}>Add task</button>
        </div>
     );
}
 
export default Input;