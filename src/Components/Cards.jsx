import { FaShoppingCart } from "react-icons/fa";



export default function Cards({item}) {

    const { category, images, description, title} = item
    const descriptions = item.description.slice(0, 120)

    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-stone-900 rounded-lg overflow-hidden">
                <img
                    className="lg:h-80 md:h-80 w-full object-cover object-center"
                    src={`${images[0]}`}
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
                        <a className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Add to Cart
                            <FaShoppingCart className="mx-2 w-4 h-4 cursor-pointer"/>
                        </a>
                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>
                            1.2K
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}