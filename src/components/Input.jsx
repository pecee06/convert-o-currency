const Input = ({
    label, amount=0, setAmount=()=>{}, code, setCode=()=>{}, currencyCodes=[], disable=false
}) => {
  return (
    <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-lg">{label}</label>
            <input type="number" id="amount" className="text-lg rounded px-2" value={amount} disabled={disable} onChange={e => {
                setAmount(e.target.value)
            }} />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="curr-code" className="text-lg">Currency Code</label>
            <select id="curr-code" className="uppercase cursor-pointer text-lg rounded px-2" value={code} onChange={e => {
                setCode(e.target.value)
            }}>
                {
                    currencyCodes.map((currCode, index)=>(
                        <option value={currCode} key={index}>
                            {currCode}
                        </option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default Input