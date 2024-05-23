import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetails() {
  const { name } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        if (item && item.length > 0) {
          setData(item[0]);
        }
      });
  }, [name]);

  return (
    <div className="  dark:bg-gray-800/100 h-full w-full dark:text-white  mx-auto px-10 py-8">
      <Link to="/">
        <div className="flex items-center border w-24 bg-white dark:bg-gray-700 dark:border-gray-600 p-2 mb-8 rounded-lg">
          <ArrowLeft className="text-black dark:text-white mr-2" /> Back
        </div>
      </Link>

      <div className="flex lg:flex-row mx-auto space-y-10 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-1/3 h-69">
          <div className="bg-white   overflow-hidden h-full w-full">
            {data && data.flags && data.flags.png ? (
              <img
                src={data.flags.png}
                alt={`Flag of ${data.name.common}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-500">Loading...</span>
              </div>
            )}
          </div>
        </div>

        <div className=" lg:w-1/2 space-x-20 ">
          <h1 className="font-bold text-2xl text-gray-900 ml-20 py-4 dark:text-gray-200 space-x-9">
            {name}
          </h1>

          <div className="flex flex-col ">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="w-full lg:w-1/2 space-y-3 text-xs">
                <p>
                  <strong>Nom natif :</strong>
                  {data?.altSpellings && data.altSpellings[2]}
                </p>
                <p>
                  {" "}
                  <strong>Population:</strong>{" "}
                  {data?.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region:</strong> {data?.region}
                </p>
                <p>
                  {" "}
                  <strong>Sub Region:</strong>
                  {data?.subregion}
                </p>
                <p>
                  {" "}
                  <strong>Capital:</strong>
                  {data?.capital}
                </p>
              </div>
              <div className="w-full lg:w-1/2 space-y-2  me-8 text-xs">
                <h1>
                  {" "}
                  <strong>Top Level Domain:</strong> {data?.tld}
                </h1>
                {data && data.currencies && (
                  <p>
                    <strong>Currencies:</strong>
                    {Object.values(data.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </p>
                )}
                <p>
                  <strong>Languages:</strong>
                  {data?.languages && Object.values(data.languages).join(", ")}
                </p>
              </div>
            </div>
            <br />
            <div className="flex  flex-wrap space-x-3 mt-3 text-xs">
              <h1>
                {" "}
                <strong>Border Countries:</strong>
              </h1>
              {data?.borders?.map((border) => (
                <button
                  key={border}
                  className="bg-white w-24  border-collapse dark:bg-gray-700 py-1 text-black rounded mt-2"
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
