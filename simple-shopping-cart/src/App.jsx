import Products from "./components/pages/Products"
import { ProductProvider } from "./context/ProductContext"

const App = () => {
  return (
    <>
      <ProductProvider>
          <Products />
      </ProductProvider>
    </>
  )
}

export default App
