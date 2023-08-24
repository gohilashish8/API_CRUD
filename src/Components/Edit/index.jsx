import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatestudentasync } from "../../Redux/Action/StudentAction/StudentAction";
import { toast } from "react-toastify";

const index = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const students = useSelector((state) => state.studentReducer.students);
  console.log(students, "this is all edit Students");
  const student = students.filter((val) => val.id === +id);

  // const student = useSelector((state) => state.studentReducer.student);
  const [value, setValue] = useState(student[0]);
  console.log(value, "this is a val");
  const hendleSubmit = (e) => {
    e.preventDefault();
    toast.success("user updated successfully 😍 ", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(updatestudentasync(value, value.id));
    navigate("/view");
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <section className="container mx-auto  py-1">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Add Student
              </h6>
              <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Settings
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={hendleSubmit}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>

                    <input
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.username}
                      name="username"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.email}
                      name="email"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.fname}
                      name="fname"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.lname}
                      name="lname"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-2 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.address}
                      name="address"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.city}
                      name="city"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.country}
                      name="country"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      value={value.postalcode}
                      name="postalcode"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-2 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      About me
                    </label>
                    <textarea
                      type="text"
                      className="border-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  focus:outline-none focus:ring-2 w-full ease-linear transition-all duration-150"
                      rows="3"
                      name="aboutme"
                      value={value.aboutme}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="mx-auto bg-slate-500 px-3 py-1 rounded-[5px] active:bg-slate-600 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
