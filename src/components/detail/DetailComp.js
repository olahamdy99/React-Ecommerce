import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import toast, { Toaster } from 'react-hot-toast';

const DetailComp = ({ productDetail }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn); 
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate(); // Get the navigate function using useNavigate hook

    const handleAddToCart = () => {
        if (isLoggedIn) {
            dispatch(addToCart({
                id: productDetail?.id,
                title: productDetail?.title,
                image: productDetail?.image,
                price: productDetail?.price,
                quantity: quantity
            }));
            notify();
        } else {
            navigate('/login'); // Use navigate function to redirect to the login page
        }
    };

    const notify = () => {
        toast.success('Added to the cart!', {
            icon: '🛒',
        });
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    return (
        <section className="text-gray-600 font-nunito overflow-hidden h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[700px] h-64 object-cover object-center rounded" src={productDetail?.image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetail?.title}</h1>
                        {/* Star rating component here */}
                        <p className="leading-relaxed">{productDetail?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <span onClick={decrement} className="rounded bg-gray-100 py-1 px-3.5 duration-100 hover:bg-thirdColor hover:text-blue-50 cursor-pointer font-bold text-2xl">-</span>
                            <input className="h-7 w-10 border text-center text-xl font-semibold rounded bg-firstColor" type="text" value={quantity} readOnly />
                            <span onClick={increment} className="cursor-pointer rounded bg-gray-100 py-1 px-3.5 duration-100 hover:bg-thirdColor hover:text-blue-50 font-bold text-2xl">+</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${productDetail?.price}</span>
                            <button
                                onClick={handleAddToCart}
                                className="flex ml-auto text-white bg-thirdColor hover:bg-fourthColor border-0 py-2 px-6 focus:outline-none rounded-lg" >
                                <CiShoppingCart size={32} />
                            </button>
                            <Toaster position="bottom-right" reverseOrder={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailComp;
