import { useEffect, useState } from "react";
import Employee from "./Employee";

function Employees() {
   const [employees, setEmployees] = useState([
        {
            name: 'Veerababu',
            company: 'TCS',
            Id: 513,
            gender: 'Male'
        },
        {
            name: 'Aliya',
            company: 'Cognizant',
            Id: 590,
            gender: 'Female'
        },
        {
            name: 'Prasanthi',
            company: 'Wipro',
            Id: 591,
            gender: 'Female'
        },
        {
            name: 'Ajay',
            company: 'HP',
            Id: 593,
            gender: 'Male'
        }
    ]);

    const [emp,setEmp] = useState([]);

    useEffect(() => {
        setEmp(employees);
    },[]);

    const deleteEmployee = (id) => {
        const filter = emp.filter(emp => emp.Id !== id);
        setEmp(filter);
    }

    return (
        <div className="bg-blue-200 min-h-screen">
            <h1 className="font-bold text-xl text-center">List of Employees</h1>
            <div className="grid grid-cols-3 gap-2 mx-10">
                {emp.map(item => (
                    <div key={item.Id} className="bg-white p-4">
                        <Employee user={item} delet = {deleteEmployee}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Employees;
