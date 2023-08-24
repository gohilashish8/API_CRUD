import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const index = () => {
  const product = useSelector((state) => state.productReducer.products);
    const locetion = useLocation();
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-center px-8 py-02 z-[999]">
      <nav className="nav font-sans font-semibold text-lg ml-auto">
        <ul className="flex items-center">
          <Link to="/">
            <li
              className={`${
                locetion.pathname === "/"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active`}
            >
              HOME
            </li>
          </Link>
          <Link to="/add">
            <li
              className={` ${
                locetion.pathname === "/add"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              ADD
            </li>
          </Link>
          <Link to="/view">
            <li
              className={` ${
                locetion.pathname === "/view"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              VIEW
            </li>
          </Link>
          {/* <Link to="/product">
            <li
              className={` ${
                locetion.pathname === "/product"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 uppercase border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              Product
            </li>
          </Link> */}
          <Link to="/gita">
            <li
              className={` ${
                locetion.pathname === "/gita"
                  ? "border-opacity-100 text-green-500"
                  : ""
              } p-4 border-b-2 uppercase border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
             Bhagavad  GITA
            </li>
          </Link>
        </ul>
      </nav>

      <div className="ml-auto">
        {/* <Link to={"/addtocart"} className="inline-block relative">
          <div className="relative py-2">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
               {product.length}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="file: mt-4 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </Link> */}
      </div>
    </header>
  )
}

export default index