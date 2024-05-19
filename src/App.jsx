import { useState } from "react"
import useCurrencyData from "./hooks/useCurrencyData"
import Input from "./components/Input"

const App = () => {
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [fromCurrencyCode, setFromCurrencyCode] = useState("usd")
  const [toCurrencyCode, setToCurrencyCode] = useState("inr")
  const data = useCurrencyData(fromCurrencyCode)

  return (
    <form className="flex flex-col gap-5 glossy py-5 px-8 rounded">
      <Input label={"From"} amount={fromAmount} setAmount={setFromAmount} code={fromCurrencyCode} setCode={setFromCurrencyCode} currencyCodes={Object.keys(data)}/>
      <Input label={"To"} amount={toAmount} setAmount={setToAmount} code={toCurrencyCode} setCode={setToCurrencyCode} currencyCodes={Object.keys(data)} disable />
      <button className="bg-purple-800 hover:bg-purple-700 transition-all font-bold text-white text-lg rounded py-2" onClick={e => {
        e.preventDefault()
        let val = Math.ceil(fromAmount*data[toCurrencyCode])
        setToAmount(val)
      }}>Convert</button>
    </form>
  )
}

export default App