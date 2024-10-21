import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ApiFilter() {
    const[products,setProducts] = useState([]);
    const[searchTerm,setSearchTerm] = useState('');
    const getAllProducts = () => {
        axios.get('https://dummyjson.com/products').then(response => {
            setProducts(response.data.products);
            
        }).catch(error=> {
                console.log(error);
        })
    }
    const[searchParams] = useSearchParams();
   
    console.log(searchParams.get('age'));
    console.log(searchParams.get('name'))
   


    useEffect(() => {
        getAllProducts();
       
    },[]);

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
   

    return(
      
        <div className="w-full bg-blue-200 min-h-screen p-4">
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
           {filteredProducts.map((item,index) => (
            <div className="grid  gap-2 justify-center items-center" key={index}>
                <div>
                    <p>{item?.title}</p>
                    <p>{item.description}</p>
                </div>
            </div>
           ))}

        </div>
    )
}
export default ApiFilter;