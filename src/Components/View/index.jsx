import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  deletestudentAsyncData, getAllAsyncData, getsinglestudentAsyncData } from "../../Redux/Action/StudentAction/StudentAction";
import { toast } from "react-toastify";


const index = () => {

  const {students , isLoader} = useSelector((state) => state.studentReducer);
  console.log(students , "thia iS,A STUDATBST STATE");

  console.log(isLoader , 'thid is sisdf isLoader');
const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    toast.warn('user removed successfully  😭 ', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    dispatch(deletestudentAsyncData(id));
    dispatch(getAllAsyncData());

  };

  const handleedit = ( id ) => {
    console.log(id , "this is a edit id ");

    dispatch(getsinglestudentAsyncData(id))
    
    navigate(`/edit/${id}`)
  }



  useEffect(() => {
    dispatch(getAllAsyncData())
   }, [])



  return (

    <div className="container-fluid mx-auto ">
      <div className="flex justify-between py-2 pt-3 min-w-full sm:px-6 lg:px-10">
        <Link to="/add" className="py-3 px-5 bg-blue-400 text-white hover:bg-blue-600 transition-[all_0.5s] rounded-[5px]" >Add New Studant</Link>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      postalcode
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                    { isLoader &&  <td className="text-center"> loading..... </td> }
                  {students != null &&  students.map((val) => {
                    return (
                      <tr
                        key={val.id}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {val.id}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {val.username}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {val.fname} {val.lname}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {val.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {val.address}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {val.city}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {val.country}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {val.postalcode}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap space-x-2">
                          <button

                            onClick={() => handleedit(val.id) }
                            className="px-2 py-1 bg-slate-500  rounded-[5px] text-white"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleRemove(val.id)}
                            className="px-2 py-1 bg-red-600  rounded-[5px] text-white"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
