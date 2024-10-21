import { useState } from "react";

function Fruits () {
    const [searchterm,setSearchTerm] = useState('')
   const food = ['apple','banana','pineapple','grapes','orange'];
   const filteredFood = food.filter(fruitfood =>  fruitfood.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase()))
   
    return (
        <div className="min-h-screen bg-blue-200 w-full p-4">
        <input
            type="text"
            placeholder="Search by fruit name"
            value={searchterm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="m-3 w-full max-w-md px-5 py-2"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-10 justify-center items-center pt-5">
            {filteredFood.map((item, index) => (
                <div key={index} className="w-full max-w-[300px] bg-white h-[300px] flex justify-center items-center">
                    <p>{item}</p>
                </div>
            ))}
        </div>
    </div>
    )
}


export default Fruits;