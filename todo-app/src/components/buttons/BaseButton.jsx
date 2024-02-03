/* eslint-disable react/prop-types */
const BaseButton = ({className,Icon,onClick}) => {
  return (
    <button className={`p-2 flex justify-center items-center ${className}`} onClick={onClick}>
        {Icon}
    </button>
  )
}

export default BaseButton;
