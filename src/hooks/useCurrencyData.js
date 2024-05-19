import { useState, useEffect, useCallback } from "react"

const useCurrencyData = (currencyCode) => {
    const [currencyData, setCurrencyData] = useState({})
    useEffect(useCallback(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`)
        .then(res => res.json())
        .then(res => {
          setCurrencyData(res[currencyCode])
        })
        .catch(err => {
          console.error(err);
        })
    }), [currencyCode])
    return currencyData
}

export default useCurrencyData