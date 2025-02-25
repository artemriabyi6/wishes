import { Route, Routes } from "react-router-dom" 
import Plans from "./pages/Plans"
import Done from "./pages/Done"
// import Header from "./components/header/header"
import { useState, useEffect } from "react"

function App() {

   const setItemToLocalStorage = (key, array) => {
      const arrayToString = JSON.stringify(array)
      localStorage.setItem(key, arrayToString)
  }

  const getItemFromLocalStorage = (list) => {
    const storedItems = JSON.parse(localStorage.getItem(list))
    return storedItems
  }

  
  const [plans, setPlans] = useState(getItemFromLocalStorage('plans') || [])
  const [done, setDone] = useState(getItemFromLocalStorage('done') || [] )
  const [adults, setAdults] = useState(getItemFromLocalStorage('adults') || [])
  const [doneAdults, setDoneAdults] = useState(getItemFromLocalStorage('doneAdults') || [])
  const [mode, setMode] = useState(getItemFromLocalStorage('mode') || false)


  useEffect(() => {
  setItemToLocalStorage('mode', mode)
  },[mode])
 
 
  return (
    <div  className={mode ? 'main-block adults': 'main-block'}>
    <Routes>
        <Route path="/" element={<Plans 
        plans={plans} 
        setPlans={setPlans} 
        done={done} 
        setDone={setDone}
        adults={adults}
        setAdults={setAdults}
        doneAdults={doneAdults}
        setDoneAdults={setDoneAdults}
        mode={mode}
        setMode={setMode}
        setItemToLocalStorage={setItemToLocalStorage}
        getItemFromLocalStorage={getItemFromLocalStorage}
        />}
        />

        <Route path="/done" element={<Done 
        plans={plans}
        setPlans={setPlans}
        done={done}
        setDone={setDone}
        adults={adults}
        setAdults={setAdults}
        doneAdults={doneAdults}
        setDoneAdults={setDoneAdults}
        mode={mode}
        setMode={setMode}
        setItemToLocalStorage={setItemToLocalStorage}
        getItemFromLocalStorage={getItemFromLocalStorage}
        />}
       />
      </Routes>
    </div>
  )
}

export default App
