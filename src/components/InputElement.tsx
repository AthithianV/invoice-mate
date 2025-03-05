
type PropType = {
    title: string,
    name: string,
    value: number | undefined,
    handleChange: (value:number, name:string)=>void
    disabled?: boolean
}


const InputElement = ({handleChange, name, title, value, disabled}:PropType) => {
  return (
    <div className="input-container">
        <label>{title}:</label>
        <input 
            className={`input p-2 border ${disabled?"text-gray-500":""}`}
            type="number"
            name={name}
            value={value}
            onChange={(e)=>handleChange(Number(e.target.value), e.target.name)}
            required={true}
            disabled={disabled}
        />
    </div>
  )
}

export default InputElement