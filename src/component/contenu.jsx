import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contenu() {
  const [Data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectQuery, setSelectQuery] = useState("");

  const fetchData = async () => {
    await axios
      .get("https://restcountries.com/v3.1/all/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const ASelect = (event) => {
    setSelectQuery(event.target.value);
  };

  const FData = Data.filter((item) => {
    return (
      item.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectQuery === "" || item.region === selectQuery)
    );
  });

  return (
    <main className="dark:bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between p-4 container mx-auto">
        <div className="flex bg-white dark:bg-gray-700 py-3 px-4 mt-6 border border-gray-200 dark:border-gray-600 rounded-lg w-full md:w-1/3 mb-4 md:mb-0">
          <Search className="text-black dark:text-white mr-2" />
          <input
            type="text"
            placeholder="Search for a country"
            className="flex-grow outline-none border-none bg-transparent placeholder-gray-500 dark:placeholder-gray-300"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="py-2 px-4 mt-6 md:mt-3 md:ml-4">
          <select
            className="w-full md:w-48 py-2 px-2 placeholder-gray-500 dark:placeholder-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
            value={selectQuery}
            onChange={ASelect}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {FData.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg  flex flex-col h-full">
                <img
                  src={item.flags.png}
                  alt={`Flag of ${item.name.common}`}
                  className="w-full h-40 rounded-t-lg object-cover"
                />
                <h1 className="text-lg p-4 font-semibold text-gray-900 dark:text-gray-200">
                  <strong>{item.name.common}</strong>
                </h1>
                <div className="px-4 text-gray-700 dark:text-gray-50 flex-grow">
                  <p>
                    <strong>Population: </strong>
                    {item.population.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {item.region}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {item.capital}
                  </p>
                </div>
                <div className="flex justify-end py-2 px-4">
                  <Link to={`/${item.name.common}`}>
                    <button className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg py-2 px-4">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
