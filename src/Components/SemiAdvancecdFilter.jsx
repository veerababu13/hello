import { useState } from "react";
import { useParams } from "react-router-dom";

function SemiAdvancedFilter() {
    const[searchTerm,setSearchTerm] = useState('');

    const items = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Banana', category: 'Fruit' },
        { id: 3, name: 'Carrot', category: 'Vegetable' },
        { id: 4, name: 'Mango', category: 'Fruit' },
        { id: 5, name: 'Potato', category: 'Vegetable' }
    ]
const {apple,banana,carrot} = useParams();
console.log(apple)
console.log(banana)
console.log(carrot)
    const filteredFruits = items.filter(item => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.category.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

      let cheggRating = 97*1.6;
      console.log(cheggRating);
      let priceAferDiscount = cheggRating * 10/100;
      console.log(cheggRating - priceAferDiscount);



    return (
        <div className="bg-blue-200 w-full min-h-screen p-4">
            <input type='text' className="w-full max-w-md px-5 py-2"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="seaech by categeory or name" />
            <p className="pt-5">{filteredFruits.length} results</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 mx-10 pt-5">
                {filteredFruits.map (item => (
                    <div className="w-full max-w-[300px] bg-white h-[300px] flex flex-col justify-center items-center" key={item.id}>

                        <p>Name: {item.name}</p>
                        <p>Categeory: {item.category}</p>
                    </div>
                ))}
            </div>

        </div>
    )

}
export default SemiAdvancedFilter;