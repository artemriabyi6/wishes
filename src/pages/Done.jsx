// import { useEffect } from "react";
// import Header from "../components/header/header";
// import removeBtn from '../assets/remove.svg'
// // import condom from '../assets/condom.svg'

// const Done = (props) => {

//     useEffect(() => {

//         props.setItemToLocalStorage('doneAdults', props.doneAdults)

//     },[props.doneAdults])

//     useEffect(() => {

//         props.setItemToLocalStorage('done', props.done)

//     },[props.done])

//     const removeActivity = (index, setArray, array) => {
//         console.log(array)
//         setArray([...array.slice(0, index), ...array.slice(index + 1)]);
//     }

//     return (
//          <>
         
//         <Header  mode={props.mode} setMode={props.setMode}/>

//         {props.mode 
//         ?   props.doneAdults.map((item, index) => (
//             <div className="item-done flex w-xs bg-white p-2 justify-between mb-5 items-center" key={item}>
//             <p>{index + 1}. {item}</p>
//             <div>
//             {/* <button className="condom-svg"><img src={condom} alt="condom" /></button> */}
//             <button 
//             onClick={() => {removeActivity(index, props.setDoneAdults, props.doneAdults)}}
//             className="ml-5 cursor-pointer">
//              <img className="remove-btn ml-5" src={removeBtn} alt="remove" />
//             </button>
//             </div>
//           </div>
//        ))
//         :  props.done.map((item, index) => (
//             <div className="item-done flex w-xs bg-white p-2 justify-between mb-5" key={item}>
//             <p>{index + 1}. {item}</p>
//             <button 
//             onClick={() => {removeActivity(index, props.setDone, props.done)}}
//             className="ml-5 cursor-pointer">
//              <img className="remove-btn" src={removeBtn} alt="remove" />
//             </button>
//           </div>
//        ))
        
    
//         }
        
       
      
    
//          </> 
//         );
// }
 
// export default Done;


import { useEffect, useState } from "react";
import Header from "../components/header/header";
import PaginationComponent from "../components/pagination/Pagination";
import removeBtn from '../assets/remove.svg';

const Done = (props) => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.setItemToLocalStorage("doneAdults", props.doneAdults);
  }, [props.doneAdults]);

  useEffect(() => {
    props.setItemToLocalStorage("done", props.done);
  }, [props.done]);

  const removeActivity = (index, setArray, array) => {
    setArray([...array.slice(0, index), ...array.slice(index + 1)]);
  };

  // Вибір правильного масиву
  const data = props.mode ? props.doneAdults : props.done;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginationItems = data.slice(startIndex, endIndex);

  return (
    <>
      <Header mode={props.mode} setMode={props.setMode} />

      {paginationItems.map((item, index) => (
        <div className="item-done flex w-xs bg-white p-2 justify-between mb-5 items-center" key={startIndex + index}>
          <p>{startIndex + index + 1}. {item}</p>
          <button onClick={() => removeActivity(startIndex + index, props.mode ? props.setDoneAdults : props.setDone, data)} className="ml-5 cursor-pointer">
            <img className="remove-btn" src={removeBtn} alt="remove" />
          </button>
        </div>
      ))}

      {totalPages > 1 && <PaginationComponent page={page} setPage={setPage} totalPages={totalPages} />}
    </>
  );
};

export default Done;
