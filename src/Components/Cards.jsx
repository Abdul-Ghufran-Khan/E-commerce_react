import { FaShoppingCart } from "react-icons/fa";



export default function Cards({item}) {

    const { category, image, description, title , price} = item
    const descriptions = item.description.slice(0, 120)

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-stone-900 rounded-lg overflow-hidden">
                <img
                    className="lg:h-80 md:h-72 sm:h-72 w-full object-fill object-center"
                    src={`${image}`}
                    alt="blog"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">
                        {category.name}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {descriptions+"..."}
                    </p>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                            Add to Cart
                            <FaShoppingCart className="mx-2 w-4 h-4 cursor-pointer"/>
                        </a>
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            Price : ${price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}