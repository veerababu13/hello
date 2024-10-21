import { useState } from "react";

function Employee(props) {

const {user, delet} = props;

    console.log(props);
    const[confirmDelete,setConfirmDelete] = useState(false);

    const showModal =  () => {
        setConfirmDelete(true);
    }

    const deletee = (id) => {
    delet(id);
    setConfirmDelete(false);

    }

    return(
        <div>
            <div className="flex gap-7 justify-between">
               <div>
               <p>{user.Id}</p>
                <p>{user.name}</p>
                <p>{user.company}</p>
                <p>{user.gender}</p>
               </div>
               <div className="text-right">
               <button onClick={showModal} className="bg-red-200 py-2 px-4 rounded-lg text-white">Delete</button>
               </div>



            </div>
          {confirmDelete && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center px-2">
              <div className="bg-white p-5 rounded shadow-md w-full max-w-md relative">
                 
                 <span>Do you want to delete this employee?</span>
                  <div className="text-center mt-2">
                      <button  className="bg-blue-700 text-white px-2 py-1 mx-2 rounded" onClick={() => setConfirmDelete(false)}>no</button>
                      <button onClick={() => deletee(user.Id)} className="bg-red-700 text-white px-2 py-1 rounded">Yes</button>
                  </div>
              </div>
          </div>
          )}
            

            </div>
            
            
        
    )
}
export default Employee;