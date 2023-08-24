import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Gita = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [hindi, setHindi] = useState("");
  const [english, setEnglish] = useState("");

  // const axios = require('axios');

  // const getChapter = async () => {
  //     const data =  await axios.get( `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/`,
  //   { params: {limit: '18'}},
  //     {headers: {
  //       'X-RapidAPI-Key': 'aa2fd62be5mshe40a0cf9048f8bbp127df0jsne51332b5a95c',
  //       'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  //     }})
  //     console.log("data",data)
  // }

  const getChapter = async () => {
    const options = {
      method: "GET",
      url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
      params: { limit: "18" },
      headers: {
        "X-RapidAPI-Key": "aa2fd62be5mshe40a0cf9048f8bbp127df0jsne51332b5a95c",
        "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleOpen = (id) => {
    setHindi(data.filter((val) => val.id === id));
    setOpen(true);
  };
  const handleOpen1 = (id) => {
    setEnglish(data.filter((val) => val.id === id));
    setOpen1(true);
  };
  const handleClose = () => setOpen(false);

  const handleClose1 = () => setOpen1(false);

  useEffect(() => {
    getChapter();
  }, []);

  return (

    <div  className="flex  flex-col  flex-wrap py-4   justify-center sm:flex-row  gap-8">
      {data &&
        data.map((item, i) => {
          return (
            <>
              <div key={item.id} className=" w-[95%] mx-auto sm:mx-0 sm:w-[45%]  md:w-[30%] p-4  overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
                <h2 className="mt-2 text-center text-2xl font-bold text-gray-500">
                  Chapter : {item.id}
                </h2>
                <p className="my-2 text-center text-xl font-bold text-gray-500">
                  {item.name_translated}
                </p>

                <div className="space-x-4 bg-gray-100 py-4 text-center">
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(item.id)}
                  >
                    Hindi
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleOpen1(item.id)}
                  >
                    English
                  </Button>
                </div>
              </div>
            </>
          );
        })}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            नाम : {hindi[0]?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {hindi[0]?.chapter_summary_hindi}
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name : {english[0]?.name_translated}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {english[0]?.chapter_summary}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Gita;
