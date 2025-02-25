// import { useEffect } from "react"
// import PaginationComponent from "./pagination/Pagination"
// import fileBoardDoneBtn from '../assets/check-done.svg'
// import removeBtn from '../assets/remove.svg'

// const List = (props) => {

//    const itemsPerPage = 5
   
//     useEffect(() => {

//         props.setItemToLocalStorage('adults', props.adults)
        
//     },[props.adults])

//     useEffect(() => {

//         props.setItemToLocalStorage('plans', props.plans)

//     },[props.plans])

//     useEffect(() => {

//         props.setItemToLocalStorage('doneAdults', props.doneAdults)

//     },[props.doneAdults])

//     useEffect(() => {

//         props.setItemToLocalStorage('done', props.done)

//     },[props.done])

  

//     const doneActivity = (index, mode) => {
//         if(mode) {
//             props.setAdults([...props.adults.slice(0, index), ...props.adults.slice(index + 1)])
//             props.setDoneAdults([...props.doneAdults, props.adults[index]])
//         } else {
//             props.setPlans([...props.plans.slice(0, index), ...props.plans.slice(index + 1)]);
//             props.setDone([...props.done, props.plans[index]])
//         }
        
       
//     }

//     const removeActivity = (index, setArray, array) => {
//         setArray([...array.slice(0, index), ...array.slice(index + 1)]);
//     }

    
//     return ( 
//         <>
//         {props.mode 
//         ? 
//         props.adults.map((adult, index) => (
           
//             <div className="item flex w-xs bg-white p-2 justify-between mb-5 items-center rounded-md"  key={adult}>
//                 <p>{index + 1}. {adult}</p>
//                 <div>
//                      <button 
//                      onClick={() => {doneActivity(index, props.mode)}}  
//                      className=" cursor-pointer">
//                      <img className="done-btn" src={fileBoardDoneBtn} alt="Done" />
//                      </button>
//                      <button 
//                      onClick={() => {removeActivity(index, props.setAdults, props.adults)}}
//                      className=" ml-5 cursor-pointer">
//                      <img className="remove-btn" src={removeBtn} alt="remove" />
//                     </button>
//                 </div>
              
//               </div>
//         ))

       
//         : 
//         props.plans.map((plan, index) => (
           
//             <div className="item flex w-xs bg-white p-2 justify-between mb-5 items-center rounded-md" key={plan}>
//                 <p>{index + 1}. {plan}</p>
//                 <div>
//                      <button 
//                       onClick={() => {doneActivity(index)}}  
//                       className="cursor-pointer">
//                      <img className="done-btn" src={fileBoardDoneBtn} alt="Done" />
//                      </button>

//                      <button 
//                      onClick={() => {removeActivity(index, props.setPlans, props.plans)}}
//                      className="ml-5 cursor-pointer">
//                      <img className="remove-btn" src={removeBtn} alt="remove" />
//                     </button>
//                 </div>
              
//               </div>
//         ))
    
//         }

//         <PaginationComponent array={props.plans} itemsPerPage={itemsPerPage}/>

       
//         </>
//      );
// }
 
// export default List;

// import { useEffect, useState } from "react";
// import PaginationComponent from "./pagination/Pagination";
// import fileBoardDoneBtn from '../assets/check-done.svg';
// import removeBtn from '../assets/remove.svg';

// const List = (props) => {
//   const itemsPerPage = 5;
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     props.setItemToLocalStorage('adults', props.adults);
//   }, [props.adults]);

//   useEffect(() => {
//     props.setItemToLocalStorage('plans', props.plans);
//   }, [props.plans]);

//   useEffect(() => {
//     props.setItemToLocalStorage('doneAdults', props.doneAdults);
//   }, [props.doneAdults]);

//   useEffect(() => {
//     props.setItemToLocalStorage('done', props.done);
//   }, [props.done]);

//   const doneActivity = (index, mode) => {
//     if (mode) {
//       props.setAdults([...props.adults.slice(0, index), ...props.adults.slice(index + 1)]);
//       props.setDoneAdults([...props.doneAdults, props.adults[index]]);
//     } else {
//       props.setPlans([...props.plans.slice(0, index), ...props.plans.slice(index + 1)]);
//       props.setDone([...props.done, props.plans[index]]);
//     }
//   };

//   const removeActivity = (index, setArray, array) => {
//     setArray([...array.slice(0, index), ...array.slice(index + 1)]);
//   };

//   // Вибір правильного масиву
//   const data = props.mode ? props.adults : props.plans;
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginationItems = data.slice(startIndex, endIndex);

//   return (
//     <>
//       {paginationItems.map((item, index) => (
//         <div className="item flex w-xs bg-white p-2 justify-between mb-5 items-center rounded-md" key={index}>
//           <p>{startIndex + index + 1}. {item}</p>
//           <div>
//             <button onClick={() => doneActivity(startIndex + index, props.mode)} className="cursor-pointer">
//               <img className="done-btn" src={fileBoardDoneBtn} alt="Done" />
//             </button>
//             <button onClick={() => removeActivity(startIndex + index, props.setPlans, props.plans)} className="ml-5 cursor-pointer">
//               <img className="remove-btn" src={removeBtn} alt="remove" />
//             </button>
//           </div>
//         </div>
//       ))}

//       <PaginationComponent page={page} setPage={setPage} totalPages={totalPages} />
//     </>
//   );
// };

// export default List;


import { useEffect, useState } from "react";
import PaginationComponent from "./pagination/Pagination";
import fileBoardDoneBtn from '../assets/check-done.svg';
import removeBtn from '../assets/remove.svg';

const List = (props) => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.setItemToLocalStorage('adults', props.adults);
  }, [props.adults]);

  useEffect(() => {
    props.setItemToLocalStorage('plans', props.plans);
  }, [props.plans]);

  useEffect(() => {
    props.setItemToLocalStorage('doneAdults', props.doneAdults);
  }, [props.doneAdults]);

  useEffect(() => {
    props.setItemToLocalStorage('done', props.done);
  }, [props.done]);

  const doneActivity = (index, mode) => {
    if (mode) {
      props.setAdults([...props.adults.slice(0, index), ...props.adults.slice(index + 1)]);
      props.setDoneAdults([...props.doneAdults, props.adults[index]]);
    } else {
      props.setPlans([...props.plans.slice(0, index), ...props.plans.slice(index + 1)]);
      props.setDone([...props.done, props.plans[index]]);
    }
  };

  const removeActivity = (index) => {
    if (props.mode) {
      props.setAdults([...props.adults.slice(0, index), ...props.adults.slice(index + 1)]);
    } else {
      props.setPlans([...props.plans.slice(0, index), ...props.plans.slice(index + 1)]);
    }
  };

  // Вибір правильного масиву
  const data = props.mode ? props.adults : props.plans;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginationItems = data.slice(startIndex, endIndex);

  return (
    <>
      {paginationItems.map((item, index) => (
        <div className="item flex w-xs bg-white p-2 justify-between mb-5 items-center rounded-md" key={startIndex + index}>
          <p>{startIndex + index + 1}. {item}</p>
          <div>
            <button onClick={() => doneActivity(startIndex + index, props.mode)} className="cursor-pointer">
              <img className="done-btn" src={fileBoardDoneBtn} alt="Done" />
            </button>
            <button onClick={() => removeActivity(startIndex + index)} className="ml-5 cursor-pointer">
              <img className="remove-btn" src={removeBtn} alt="remove" />
            </button>
          </div>
        </div>
      ))}

      <PaginationComponent page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );
};

export default List;
