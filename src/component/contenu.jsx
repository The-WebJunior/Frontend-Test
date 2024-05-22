import axios from "axios";
import { useEffect, useState } from "react";

export default function Contenu() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/world");
      try {
        console.log(response);
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="flex justify-between p-1">
        <div className=" bg-white py-2 p-6 ml-10 mt-6 border border-gray-200 mr-7  rounded-lg w-2/5">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="  Search for a country"
            className="  outline-none border-none  bg-transparent placeholder-gray-500"
          />
        </div>
        <div className="py-2 p-6 mt-3 justify-center rounded-lg">
          <select className="w-48  py-2 p-2 placeholder-gray-500">
            <option value="" disabled selected>
              Filter by Region
            </option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div
            key={item}
            className="block w-1/6 py-9 ml-10 mt-6  p-4 bg-white border border-gray-200 rounded-lg  hover:bg-gray-10"
          >
            <div>{item.flags}</div>
            <h1 className=" ">{item.name}</h1>
            <br></br>
            <ul className="font-normal text-gray-700 dark:text-gray-400">
              <li>{item.population}</li>
              <li>{item.region}</li>
              <li>{item.capital}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
