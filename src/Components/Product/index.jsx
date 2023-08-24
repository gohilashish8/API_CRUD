import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/Action/ProductAction/ProductAction";
import { toast } from "react-toastify";
import Loading from "./../Loading/index";

const index = () => {
  const [disableProducts, setDisableProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const selector = useSelector((state) => state.productReducer.products);
  console.log(selector, "Thios is selector");
  const dispatch = useDispatch();
  const [Products, setProducts] = useState([]);

  const handleClick = (val) => {
    if (!disableProducts.includes(val.id)) {
      dispatch(addProduct(val));
      toast("Product succesfully added in cart 😃 ", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Product already exist 👿 ", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const dataTable = async () => {
    try {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    dataTable();
  }, []);
  useEffect(() => {
    setDisableProducts(selector.map((res) => res.id));
  }, [selector]);

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="container mx-auto mt-[20px]">
            <div className="flex flex-wrap justify-center ">
              {Products.map((val) => {
                return (
                  <div
                    key={val.id}
                    className="relative m-[20px] flex w-full max-w-[20%] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                  >
                    <a
                      className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                      href="#"
                    >
                      <img
                        className="object-cover w-full h-[240px]"
                        src={val.thumbnail}
                        alt="product image"
                      />
                      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {val.discountPercentage} %
                      </span>
                    </a>
                    <div className="mt-4 px-5 pb-5">
                      <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900 h-[60px]">
                          {val.title} - {val.brand}
                        </h5>
                      </a>
                      <div className=" text-sm h-[90px]">{val.description}</div>
                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-3xl font-bold text-slate-900">
                            ${val.price}
                          </span>
                        </p>
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>

                          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                            {val.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex w-full ">
                        <div
                          onClick={() => {
                            handleClick(val);
                          }}
                          className={`flex items-center justify-center cursor-pointer rounded-md bg-slate-900 w-full px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                            disableProducts.includes(val.id)
                              ? "opacity-50 "
                              : ""
                          } `}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Add to cart
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default index;
