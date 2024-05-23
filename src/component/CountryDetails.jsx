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
    <div className="dark:bg-gray-900 dark:text-white container mx-auto px-4 py-8">
      <Link to="/">
        <div className="flex items-center border w-24 bg-white dark:bg-gray-700 dark:border-gray-600 p-2 mb-8 rounded-lg">
          <ArrowLeft className="text-black dark:text-white mr-2" /> Back
        </div>
      </Link>

      <div className="flex flex-col lg:flex-row mx-auto space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-1/2 h-80">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
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
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col space-y-4">
            <h1 className="font-bold text-2xl text-gray-900 dark:text-gray-200">
              {name}
            </h1>
            <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="w-full lg:w-1/2 space-y-3">
                <p>
                  Nom natif :{" "}
                  {data?.altSpellings && data.altSpellings.join(", ")}
                </p>
                <p>Population: {data?.population.toLocaleString()}</p>
                <p>Region: {data?.region}</p>
                <p>Sub Region: {data?.subregion}</p>
                <p>Capital: {data?.capital}</p>
              </div>
              <div className="w-full lg:w-1/2 space-y-2">
                <h1>Top Level Domain: {data?.tld}</h1>
                {data && data.currencies && (
                  <p>
                    Currencies:{" "}
                    {Object.values(data.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </p>
                )}
                <p>
                  Languages:{" "}
                  {data?.languages && Object.values(data.languages).join(", ")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap space-x-2 mt-4">
              <h1>Border Countries:</h1>
              {data?.borders?.map((border) => (
                <button
                  key={border}
                  className="bg-slate-300 w-24 dark:bg-gray-700 dark:border-gray-600 py-1 text-white rounded mt-2"
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
