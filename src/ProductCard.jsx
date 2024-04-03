import React, { useEffect, useState } from 'react';
import Button from "./Button.jsx"
import { useCart } from 'react-use-cart';

const ProductCard = ({ data }) => {
    const { addItem } = useCart();
    const [isAddedToCart, setIsAddedToCart] = useState(false);

  
    const addToCart = () => {
        addItem(data);
        setIsAddedToCart(true);
    }

    return (
        <div className="mb-10">
            <div className="flex gap-5 place-items-center">
                <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="grid grid-cols-1 gap-4 group" key={data.id}>
                    <div className="relative ">
                        <img src={data.img} alt="" className="[h-180px] w-[260px] object-cover rounded-md"/>
                        {/* hover button */}
                        <div className="hidden group-hover:flex absolute top-1/2 right-0 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                            <button className=" bg-slate-700 text-white rounded-full py-2 px-3 h-6 w-10"onClick= {()=> addToCart()}/>
                        </div>
                    </div>
                    <div className="leading-7">
                        <h2 className="font-semibold">{data.title}</h2>
                        <h2 className="font-bold">${data.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
