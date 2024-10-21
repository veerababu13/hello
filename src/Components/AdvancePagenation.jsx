import axios from "axios";
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";

function AdvancePagenation() {
    const [searchTerm,setSearchTerm] = useState('')
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const getAllEmployees = () => {
        axios.get('https://dummyapi.online/api/movies').then(response => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        getAllEmployees();
    }, [])

    const filteredMovies = employees.filter(employee => employee.movie.toLowerCase().includes(searchTerm.toLocaleLowerCase()));


    const lastIndex = rowsPerPage * currentPage;
    const fristIndex = lastIndex - rowsPerPage;
    const currentMovies = filteredMovies.slice(fristIndex, lastIndex);

    const totalPages = Math.ceil(filteredMovies.length / rowsPerPage);
    const next = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const pagenate = (pagenumber) => {
        setCurrentPage(pagenumber);
    }


    return (
        <div className="min-h-screen w-full bg-blue-200  ">
            <h1 className="text-2xl font-bold text-center p-2">Top 100 movies of IMDB</h1>
            <input typeof="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="seach by title" className="w-full max-w-md px-4 py-2 m-5" />
            <div className="grid grid-cols-1 gap-6 justify-center items-center">
                {currentMovies.map(employee => (
                    <div className="bg-white mx-20 px-2 py-4" key={employee.id}>
                        <div className="flex gap-3">
                            <p className="font-bold">{employee.id}.</p>
                            <div>
                                <p>{employee.movie}</p>
                                <p className="flex  gap-1 justify-start"><span className="mt-1"><FcRating /></span><span>{employee.rating}</span></p>
                                <a className="text-blue-500 " href={employee.imdb_url}>{employee.imdb_url}</a>
                            </div>
                        </div>


                    </div>
                ))}

                <div className="text-center">
                    <button onClick={prev} disabled={currentPage === 1}>prev</button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button className="bg-black px-2 me-2 my-2 text-white" onClick={() => pagenate(index + 1)}>{index + 1}</button>
                    ))}
                    <button onClick={next} disabled={currentPage === totalPages}>next</button>
                </div>
            </div>

        </div>
    )

}
export default AdvancePagenation;