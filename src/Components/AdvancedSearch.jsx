import { useState } from "react";

function AdvanceSearch() {
    const[searchTerm,setSearchTerm] = useState('');
    const[searchCategeory,setSearchCategeory] = useState('');
    const[startDate,setStartDate] = useState('');
    const[endDate,setEndDate] = useState('')
    const items = [
        { id: 1, name: 'Apple', category: 'Fruit', date: '2024-07-01', img: 'https://static.libertyprim.com/files/varietes/pomme-dalinette-large.jpg?1589283082' },
    { id: 2, name: 'Banana', category: 'Fruit', date: '2024-07-05', img: 'https://5.imimg.com/data5/SELLER/Default/2022/12/EK/NP/CN/49293026/fresh-banana-fruit.webp' },
    { id: 3, name: 'Carrot', category: 'Vegetable', date: '2024-07-10', img: 'https://www.allthatgrows.in/cdn/shop/products/Carrot-Orange.jpg?v=1598079671' },
    { id: 4, name: 'Mango', category: 'Fruit', date: '2024-07-15', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/640px-Mangos_-_single_and_halved.jpg' },
    { id: 5, name: 'Potato', category: 'Vegetable', date: '2024-07-20', img: 'https://images.seattletimes.com/wp-content/uploads/2024/04/04082024_OpEd-Potatoes_124536.jpg?d=2040x1488' }
    ]
    const filtereditems = items.filter(item => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) && item.category.toLocaleLowerCase().includes(searchCategeory.toLocaleLowerCase()) &&
    (!startDate || new Date(item.date) >= new Date(startDate)) && (!endDate || new Date(item.date) <= new Date(endDate))
)
    return (
        <div className="bg-blue-200 w-full p-4 min-h-screen">
             <div className="flex ">
             <input type="text" className="px-5 py-2 w-full max-w-md" placeholder="search by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
             <select  className="px-5 py-2 w-full max-w-md ml-2" value={searchCategeory}   onChange={(e) => setSearchCategeory(e.target.value)}>
                <option value=''>Categeory</option>
                <option value='fruit'>fruit</option>
                <option value='vegetable'>vegetable</option>
             </select>
             <input
          type="date"
          className="px-5 py-2 w-full max-w-md ml-2"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="px-5 py-2 w-full max-w-md ml-2"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
             </div>
             <p className="pt-2 mx-10">{filtereditems.length} results</p>
            {filtereditems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 pt-5 gap-10 justify-center items-center">
                {filtereditems.map (item => (
                    <div className="bg-white w-full max-w-[300px] h-[300px] flex flex-col justify-center items-center" key={item.id}>
                        <img src={item.img} alt={`${item.name}`} className="h-24"/>
                        <p>name: {item.name}</p>
                        <p>categeory: {item.category}</p>

                    </div>
                ))}

            </div>
            ):(<div className="flex flex-grow items-center justify-center h-screen"> No results found</div>)}
        </div>
    )

}
export default AdvanceSearch;