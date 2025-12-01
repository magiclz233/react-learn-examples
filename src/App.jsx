// import Footer from "./components/example1/Footer";
// import Header from "./components/example1/Header";
// import MainContent from "./components/example1/MainContent";

// import Greeting from "./components/example2/Greeting";
// import ProductInfo from "./components/example2/ProductInfo";
// import ProductList from "./components/example3/ProductList";
// import User from "./components/example4/User";
// import UserList from "./components/example3/UserList";
import Card from "./components/example4/Card";
import Person from "./components/example4/Person";
import Product from "./components/example4/Product";
import Weather from "./components/example5/Weather";


const App = () => {
  return (
    <>
      {/* <Header/>
  <MainContent/>
  <Footer/> */}
      {/* <Greeting/>
  <ProductInfo/> */}
      {/* <UserList/>
  <ProductList/> */}
      {/* <User /> */}
      <Person name="magic" age={20} />
      <Product name="西瓜" age={15} />
      <Card/>
      <Weather temp={30} />
    </>
  );
}

export default App;