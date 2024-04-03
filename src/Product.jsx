import React, { useState } from 'react'
import Heading from './Heading.jsx';
import ProductCard from './ProductCard.jsx';
import Img1 from "../src/assets/p-1.jpg";
import Img2 from "../src/assets/p-2.jpg";
import Img3 from "../src/assets/p-3.jpg";
import Img4 from "../src/assets/p-4.jpg";
import Img5 from "../src/assets/p-5.jpg";
import Img6 from "../src/assets/p-6.jpg";
import Img7 from "../src/assets/p-7.jpg";
import SearchFilter from 'react-filter-search';
import { IoMdSearch } from "react-icons/io";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];

const Product = () => {
  const [ searchInput , setSearchInput ] = useState('');
  const [ productData , setProductData]= useState([...ProductsData , ...ProductsData2]);
  console.log(productData);
  return (
    <div>
     
      <div className="container">
        {/* Header Section */}
        <Heading title="Our Products" subtitle={"Explore our explore"}/>
        {/* Body Section */}
        <div className=' ml-[480px]  w-16 mb-5 flex  justify-between items-center gap-4'>
          {/* Search Bar section */}
       <div className="relative  group  hidden sm:block">
       <input
         type="text"
         placeholder="Search"
         value={searchInput}
         onChange={(e)=>setSearchInput(e.target.value)}
         className="search-bar text-slate-200"
       />
       <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
     </div>
        </div>
        <SearchFilter value={searchInput} data={productData}
        renderResults={results => (
          <div>
          {
            results.map((item , i)=>(
              <ProductCard data={item} key={i} />
            ))
          }</div>
        )}></SearchFilter>
     
        
      </div>
    </div>
  )
}

export default Product;