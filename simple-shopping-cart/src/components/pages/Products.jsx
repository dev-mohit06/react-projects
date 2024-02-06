import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../../context/ProductContext'
import ProductCard from '../cards/product-card'
import SecondaryBtn from '../buttons/secondary-btn';
import { IoCartOutline } from "react-icons/io5";
import { createPortal } from 'react-dom';

const Products = ({ className }) => {
    const { products, cart, total_items, add, remove, clearCart } = useContext(ProductContext);

    const [bouncy, setBouncy] = useState(false);

    const [showModel, setShowModel] = useState(false);

    useEffect(() => {
        if (total_items > 0) {
            setBouncy(true);
            setTimeout(() => {
                setBouncy(false);
            }, 100);
        }
    }, [total_items]);

    const handelClick = () => {
        setShowModel(true);
    }

    const BackDrop = () => {
        return createPortal(<>
            <div className='min-h-screen fixed w-screen bg-[rgba(0,0,0,.5)] z-10' onClick={() => setShowModel(false)}></div>
        </>, document.getElementById("backdrop"));
    }

    const Model = () => {
        const [total, setTotal] = useState(0);

        useEffect(() => {
            let totalPrice = 0;
            cart.forEach(item => {
                const cartHelper = products.find(prod => prod.product_id === item.id);
                totalPrice += cartHelper.product_price * item.count;
            });
            setTotal(totalPrice.toFixed(2));
        }, [cart, products]);

        const content = <>
            <div id="default-modal" tabIndex="-1" aria-hidden="true" className="font-Poppins flex justify-center items-center absolute left-[50%] top-[15%] translate-x-[-50%] traslate-y-[50%] z-20">
                <div className="relative p-4 w-full max-w-2xl">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900 flex justify-center items-center gap-3">
                                <IoCartOutline /><span className=''>Shopping Cart</span>
                            </h3>
                            <button onClick={() => setShowModel(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <div className="flex flex-col gap-4 w-[520px] max-h-[320px] overflow-y-auto">
                                {
                                    cart.length !== 0 ? (
                                        cart.map((item, index) => {
                                            const cartHelper = products.find(prod => prod.product_id === item.id);
                                            return (
                                                <label htmlFor="job-2" key={index} className="inline-flex items-center gap-5 w-full justify-between p-5 text-gray-900 bg-white shadow-sm shadow-stone-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 hover:shadow-none hover:transition-shadow">
                                                    <div className="block">
                                                        <div className="w-full text-lg font-semibold">{cartHelper.product_title}</div>
                                                        <div className="w-full text-gray-500">{cartHelper.product_description.length > 5 ? cartHelper.product_description.slice(0, 33 - 3) + "..." : cartHelper.product_description}</div>
                                                    </div>

                                                    <div className="flex justify-center items-center gap-4">
                                                        <SecondaryBtn className={"px-2 py-1.5 text-xs font-semibold text-gray-800 bg-white border border-gray-200 rounded-lg"} onClick={() => add(cartHelper.product_id)}>+</SecondaryBtn>
                                                        <div className="w-full text-lg font-semibold">{item.count}</div>
                                                        <SecondaryBtn className={"px-2 py-1.5 text-xs font-semibold text-gray-800 bg-white border border-gray-200 rounded-lg"} onClick={() => remove(cartHelper.product_id)}>-</SecondaryBtn>
                                                    </div>
                                                </label>
                                            );
                                        })
                                    ) : "No Product added"
                                }
                            </div>
                        </div>
                        {cart.length > 0 ? <div className="flex p-4 md:p-5 border-t d-flex justify-start items-center gap-6 border-gray-200 rounded-b">
                            <h3 className="text-md font-semibold text-gray-900 flex justify-center items-center gap-3">
                                <span className=''>${total ? total : "000.00"}</span>
                            </h3>
                            <div>
                                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Order now</button>
                                <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10" onClick={() => clearCart()}>Remove All items</button>
                            </div>
                        </div> : <>{setShowModel(false)}{setBouncy(true)}{setTimeout(() => setBouncy(false), 100)}</>}
                    </div>
                </div>
            </div>
        </>

        const container = document.getElementById("cart-popup");
        return createPortal(content, container);
    }

    return (
        <>
            {showModel ? <><BackDrop /> <Model /></> : ""}

            <div className={`container mx-auto ${className} h-screen pt-10`}>
                <div className="flex justify-center items-center mb-10 gap-10 font-Poppins font-medium">
                    <h1 className='text-center font-Poppins font-semibold text-3xl text-slate-800'>Products</h1>
                    <SecondaryBtn onClick={handelClick} className={bouncy ? "scale-110 transition-transform" : "transition-transform"}><IoCartOutline /> Cart : {total_items}</SecondaryBtn>
                </div>
                <div className="products mb-10 grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 place-items-center gap-y-16">
                    {
                        products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products
