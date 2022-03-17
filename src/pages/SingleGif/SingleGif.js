import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const SingleGif = () => {
  const { id } = useParams();
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const response = await axios.get(`https://api.giphy.com/v1/gifs/${id}`, {
      params: {
        api_key: "7sjuTLOBnXyMYjyjwFIljFbYuP23jW7s",
      },
    });
    setLoading(false);
    setGif(response.data.data);
  }, []);
  return (
    <div className="container mt-5 min-h-screen">
      {!!loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-3xl font-bold pt-5 pb-10 text-center">
            {gif?.title}
          </h1>
          <div className="w-8/12 h-[400px] shadow-lg mx-auto">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={gif?.images?.fixed_height?.url}
              alt="trend image"
            />
          </div>
          <div className="pb-5">
            <h3 className="text-xl font-semibold mt-10 mb-3">Details</h3>
            <h4 className="text-md text-gray-600">Type: {gif?.type}</h4>
            <h4 className="text-md text-gray-600">
              Import datetime: {gif?.import_datetime}
            </h4>
            <h4 className="text-md text-gray-600">Embed: {gif?.embed_url}</h4>
            <h4 className="text-md text-gray-600">Source: {gif?.source}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleGif;
