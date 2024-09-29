import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Getproduct from "../utils/getproducts";
import Cards from "./Components/Cards";



function App() {
  const [products, setproducts] = useState([])
  const [cartitems, setcartitems] = useState([])

  useEffect(() => {
    fetchproducts()
  }, [])

  useEffect(() => {
    const ItemsinCart = JSON.parse(localStorage.getItem("cart"))
    if (ItemsinCart) {
      setcartitems([...ItemsinCart])
    }
  }, [])

  useEffect(() => {
    if (cartitems.length) {
      localStorage.setItem("cart", JSON.stringify(cartitems))
    }
    }, [cartitems])

  const addcartitem = (item) => {
    const items = [...cartitems]
    const itemInd = items.findIndex((data) => data.id === item.id)
    console.log(itemInd);
    if (itemInd == -1) {
      items.push(item)
      setcartitems([...items])
    }
  }

  const fetchproducts = async () => {
    const products = await Getproduct()
    setproducts([...products])
  }

  return (
    <>
      <div className='container fixed top-0 left-0 right-0  max-w-screen-2xl h-16 bg-stone-950'>
        <div className=" mx-10 flex justify-between items-center h-16">
          <h1 className='text-orange-600 text-2xl p-7 uppercase font-bold'>E-Store</h1>
          <ul className='flex gap-10 text-orange-500 cursor-pointer font-semibold'>
            <li className="hover:text-orange-600">Home</li>
            <li className="hover:text-orange-600">About</li>
            <li className="hover:text-orange-600">Contact</li>
          </ul>
          <div className="text-orange-500">
            <h1 className='w-3 h-3 mx-11 text-white'>{cartitems.length}</h1>
            <FaShoppingCart className="w-14 h-6 cursor-pointer " />
          </div>
        </div>
      </div>
      <section className="text-gray-400 bg-stone body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((data) => {
              const isAddedtoCart = cartitems.findIndex((product) => product.id === data.id) !== -1;     
              return(
                <Cards
                 Addtocart={() => addcartitem(data)} 
                 key={data.id} 
                 item={data} 
                 isAddedtoCart={isAddedtoCart}
                 />
              );
            })}
          </div>
        </div>
      </section>

    </>
  )
}

export default App
