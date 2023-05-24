import './App.css';
import ProductsShow from './components/products/ProductsShow';
import ProductsUpload from './components/products/ProductsUpload';
import ShowingProducts from './components/products/ShowingProducts';

function App() {
  return (
    <div className="App">
      <ProductsUpload/>
      {/* <ProductsShow/> */}
      <ShowingProducts/>
    </div>
  );
}

export default App;
