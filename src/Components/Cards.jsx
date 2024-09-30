import { MdDeleteSweep } from "react-icons/md";

export default function Cards({ item, Addtocart, isAddedtoCart, RemovefromCart , Removefromcart }) {

    const { image, description, title, price } = item
    const descriptions = description.slice(0, 120)

    return (
        <div className="p-4 md:w-1/3 sm:w-2/3">
            <div className="h-full border-2 border-stone-900 rounded-lg overflow-hidden">
                <img
                    className="lg:h-80 md:h-72 sm:h-72 w-full object-fill object-center"
                    src={`${image}`}
                    alt="blog"
                />
                <div className="p-6">
                    <h1 className="title-font text-lg font-semibold text-amber-700 mb-3">
                        {title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {descriptions + "..."}
                    </p>
                    <div className="flex justify-between items-center flex-wrap" onClick={Addtocart}>
                        <a className="text-amber-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                            {isAddedtoCart ? "Added" : `Add to Cart`}
                        </a> 
                        {RemovefromCart && (
                            <a className="text-amber-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer" onClick={Removefromcart}>
                               {RemovefromCart ?  <MdDeleteSweep className="w-7 h-7" /> : ""}
                            </a>
                        )}
                    </div>
                    <span className="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        Price : ${price}
                    </span>
                </div>
            </div>
        </div>
    );
}