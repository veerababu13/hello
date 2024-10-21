import { useState } from "react";

function BasicPagenation () {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
      ];
      const [currentPage,setCurrentPage] = useState(2);
const itemsPerPage = 3;
const indexOfLastItem = currentPage * itemsPerPage;
const fristIndex = indexOfLastItem - itemsPerPage;
const currentItems = items.slice(fristIndex,indexOfLastItem);



const totalPages = Math.ceil(items.length/itemsPerPage);
console.log("hello", totalPages)

console.log(fristIndex)
console.log(indexOfLastItem)
console.log(currentItems);


const paginate = (number) => setCurrentPage(number)

const nextPage = () =>{
    if(currentPage < totalPages) {
        setCurrentPage(currentPage+ 1)
    }
}

const previousPage = () => {
    if(currentPage > 1) {
        setCurrentPage(currentPage - 1);
    }
}
      return (
        <div className="bg-blue-200 min-h-screen p-4 w-full ">
            <div className="grid grid-cols-1 mx-auto gap-6 justify-center items-center">
                {currentItems.map(item => (
                    <div key={item.id} className="bg-white">
                    <p>{item.name}</p>
                </div>))}
            </div>
           <div className="text-center">
            <button className="bg-blue-700 px-4 py-2 rounded-xl me-2" onClick={previousPage} disabled={currentPage === 1}>previous</button>
          {Array.from({length:totalPages},(_,index) => (
            <button className="bg-black text-white px-2 me-1 mr-2 " onClick={() => paginate(index+1)}>{index+1}</button>
          ))}
              <button className="bg-blue-700 px-4 py-2 rounded-xl me-2" onClick={nextPage} disabled={currentPage === totalPages}>next</button>

           </div>

        </div>
      )
}
export default BasicPagenation;

