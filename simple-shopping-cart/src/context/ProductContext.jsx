import { createContext, useReducer } from 'react';

const ProductContext = createContext({
    products: [],
    cart: [],
    add: (productId) => { },
    remove: (productId) => { },
    clearCart:() => { },
    total_items: 0,
});


const productReducer = (state, action) => {
    switch (action.type) {
        case "add":
            const { productId } = action.params;
            const existingProductIndex = state.cart.findIndex(
                (product) => product.id === productId
            );
            if (existingProductIndex !== -1) {
                const updatedCart = state.cart.map((product, index) => {
                    if (index === existingProductIndex) {
                        return { ...product, count: product.count + 1 };
                    }
                    return product;
                });
                return { ...state, cart: updatedCart, total_items: state.total_items + 1 };
            } else {
                return { ...state, cart: [...state.cart, { id: productId, count: 1 }], total_items: state.total_items + 1 };
            }

        case "remove":
            const { productId: pId } = action.params;
            const existedProductIndex = state.cart.findIndex(
                (product) => product.id === pId
            );
            if (existedProductIndex !== -1) {
                const updatedCart = state.cart.map((product, index) => {
                    if (index === existedProductIndex) {
                        const updatedCount = product.count - 1;
                        if (updatedCount <= 0) {
                            return null;
                        }
                        return { ...product, count: updatedCount };
                    }
                    return product;
                }).filter(Boolean);
                return { ...state, cart: updatedCart, total_items: state.total_items - 1 };
            }
            return state;

        case "clear":
            return {...state,cart : [],total_items: 0};

        default:
            return state;
    }
}

const ProductProvider = ({ children }) => {

    const productsJson = [
        {
            "product_id": 1,
            "product_title": "Smartphone X",
            "product_description": "Powerful, sleek, mobile communication device.",
            "product_price": 699.99,
            "product_image_url": "https://www.wallpaperhub.app/_next/image?url=https%3A%2F%2Fcdn.wallpaperhub.app%2Fcloudcache%2Fa%2F6%2F9%2F1%2Fc%2Fb%2Fa691cb42e98b9bf4d4f33f39145748dc28196a21.jpg&w=750&q=75"
        },
        {
            "product_id": 2,
            "product_title": "Laptop Y",
            "product_description": "Portable, high-performance computing machine.",
            "product_price": 999.99,
            "product_image_url": "https://www.wallpaperhub.app/_next/image?url=https%3A%2F%2Fcdn.wallpaperhub.app%2Fcloudcache%2F3%2Fc%2F5%2F7%2Fd%2F0%2F3c57d00f65aab659d87ba9083f2471c800decb3f.jpg&w=750&q=75"
        },
        {
            "product_id": 3,
            "product_title": "Smartwatch Z",
            "product_description": "Elegant, wearable technology for health tracking.",
            "product_price": 299.99,
            "product_image_url": "https://www.wallpaperhub.app/_next/image?url=https%3A%2F%2Fcdn.wallpaperhub.app%2Fcloudcache%2F0%2F6%2Fc%2F8%2F5%2F8%2F06c858c8e5242b3988b21bcc2b3375ac0b0760b4.jpg&w=750&q=75"
        },
        {
            "product_id": 4,
            "product_title": "Camera A",
            "product_description": "Professional-grade photography equipment.",
            "product_price": 499.99,
            "product_image_url": "https://www.wallpaperhub.app/_next/image?url=https%3A%2F%2Fcdn.wallpaperhub.app%2Fcloudcache%2F6%2Fe%2F7%2F5%2Fc%2F6%2F6e75c6f30d72375f1e7fb347bedf9e427d74f80b.jpg&w=750&q=75"
        },
    ];

    const initialState = {
        products: productsJson,
        cart: [],
        total_items: 0,
    }

    const [products, dispatch] = useReducer(productReducer, initialState);

    const productContext = {
        products: products.products,
        cart: products.cart,
        add: (productId) => dispatch({
            type: "add",
            params: {
                productId: productId,
            }
        }),
        remove: (productId) => dispatch({
            type: "remove",
            params: {
                productId: productId,
            }
        }),
        clearCart: () => dispatch({
            type: "clear"
        }),
        total_items: products.total_items
    };

    return (
        <ProductContext.Provider value={productContext}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductProvider };

export default ProductContext;