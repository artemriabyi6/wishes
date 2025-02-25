
// const PaginationComponent = ({ page, setPage, totalPages }) => {
//   const changePage = (index) => {
//     if (index >= 1 && index <= totalPages) {
//       setPage(index);
//     }
//   };

//   return (
//     <div>
//       {[...Array(totalPages)].map((_, index) => (
//         <button className="mr-5 bg-black px-2 py-1 text-amber-50 rounded-md cursor-pointer" key={index} onClick={() => changePage(index + 1)}>
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default PaginationComponent;

const PaginationComponent = ({ page, setPage, totalPages }) => {
    const changePage = (index) => {
      if (index >= 1 && index <= totalPages) {
        setPage(index);
      }
    };
  
    return (
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={`mr-5 px-2 py-1 rounded-md cursor-pointer ${
              page === index + 1 ? "bg-purple-700 text-white" : "bg-purple-900 text-amber-50"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default PaginationComponent;
  
