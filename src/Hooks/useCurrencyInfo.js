import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchCurrencyData();
  }, [currency]); // Only depend on currency

  return data;
}

export default useCurrencyInfo;
