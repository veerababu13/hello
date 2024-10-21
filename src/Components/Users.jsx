import { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import LoadingDots from "./LoadingDots";
import { useParams } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);
    const [searchByAge, setSearchByAge] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const totalRowsPerPage = 6;
    const [loading,setLoading] = useState(false)
    const useparams = useParams();

    const message = useparams.greeting;
    console.log(message);


    const getAllusers = () => {
        setLoading(true);
        axios.get('https://dummyjson.com/users').then(response => {
            setUsers(response.data.users);
        }).catch(error => {
            console.log(error);
        }).finally(() => setLoading(false))
    }

    useEffect(() => {
        getAllusers();
    }, []);

    const deleteUser = (id) => {
        const filter = users.filter(user => user.id !== id);
        setUsers(filter);
    }

    const filteredDetails = users.filter(user => user.firstName.toLowerCase().includes(searchByAge.toLowerCase()) || user.lastName.toLowerCase().includes(searchByAge.toLowerCase()))
    const lastIndex = totalRowsPerPage * currentPage;
    const firstIndex = lastIndex - totalRowsPerPage;
    const currentUsers = filteredDetails.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredDetails.length / totalRowsPerPage);

    const pagenagte = (number) => setCurrentPage(number);

    const next = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className="min-h-screen w-full bg-blue-200 ">
            {loading ? (
                <div className='min-h-screen items-center justify-center'>
                <LoadingDots />
                </div>
            ):(<div>
            <input type="text" placeholder="Search by name" value={searchByAge} onChange={(e) => { setSearchByAge(e.target.value); setCurrentPage(1) }} className="w-full max-w-md px-4 py-2 mx-10 my-4" />
           {filteredDetails.length ===0 ? (
            <div className="flex justify-center items-center h-screen">
                <h1 className="font-bold text-center">No users found</h1>
            </div>
           ):(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center pt-10 ">
            {currentUsers.map(user => (
                <div key={user.id} className="bg-white mx-10 rounded-lg flex">
                    <div className="p-3">
                        <p>Name: {user.firstName} {user.lastName}</p>
                        <p>Age: {user.age}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Country: {user.address.country}</p>
                        <p>Company: {user.company.name}</p>
                        <p>Department: {user.company.department}</p>
                        <p>Role: {user.company.title}</p>
                    </div>
                    <div className="text-red-500">
                        <MdDelete className="mt-3 cursor-pointer " onClick={() => deleteUser(user.id)} />
                    </div>

                </div>
            ))}
        </div>
           )}
            <div className="text-center my-2">
                <button className={`${currentPage === 1 ? 'hidden' : ''} me-2`} onClick={prev} disabled={currentPage === 1}>prev</button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} className={`${currentPage === index + 1 ? 'bg-blue-700 text-white mr-2 px-1 me-2' : 'bg-black text-white  px-1 me-2 mr-2'}`} onClick={() => pagenagte(index + 1)}>{index + 1}</button>
                )
                )}
                <button className={`${(currentPage === totalPages || currentUsers.length === 0) ? 'hidden' : ''}`} onClick={next} disabled={currentPage === totalPages}>Next</button>
            </div>
            </div>)}
        </div>
    )

}
export default Users;