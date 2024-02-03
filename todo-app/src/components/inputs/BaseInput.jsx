/* eslint-disable react/prop-types */
const BaseInput = ({className,placeholder,onChange,value}) => {
  return (
    <input type="text" className={`bg-transparent text-primary focus:outline-none ${className} w-full`} placeholder={placeholder} onChange={onChange} value={value} />
  )
}

export default BaseInput