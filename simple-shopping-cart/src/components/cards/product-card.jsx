import { useContext } from 'react';
import SecondaryBtn from '../buttons/secondary-btn'
import { IoMdAdd } from "react-icons/io";
import ProductContext from '../../context/ProductContext';

const ProductCard = ({ product: { product_id, product_title, product_description, product_price, product_image_url } }) => {
    const { add } = useContext(ProductContext);

    const handelClick = (e) => {
        add(product_id);
    }

    return (
        <div className="p-2 max-w-[280px] min-h-[320px] grid w-auto rounded-md border-2 bg-white border-slate-200">
            <img src={product_image_url} alt="" loading='lazy' className='rounded-md w-full max-h-36 bg-cover pointer-events-none' />

            <h1 className='font-semibold text-lg font-Poppins mt-2'>{product_title}</h1>

            <p className='mt-1 font-Poppins  font-extralight text-sm text-slate-600'>{product_description}</p>

            <div className='flex justify-start items-center gap-2 mb-2'>
                <p className='mt-1 text-blue-500 font-bold text-xl font-Poppins'>${product_price}</p>
                <p className='mt-1 text-[.7rem] font-Poppins font-semibold text-slate-400'>ONE TIME PAYMENT</p>
            </div>

            <SecondaryBtn onClick={handelClick}>
                Add to bag
                <IoMdAdd className='-mr-1 h-4 w-4 text-slate-800' />
            </SecondaryBtn>
        </div>
    )
}

export default ProductCard;
