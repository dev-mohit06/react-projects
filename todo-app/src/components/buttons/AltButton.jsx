import BaseButton from "./BaseButton"

const AltButton = ({ className,Icon,onClick }) => {
  return (
    <BaseButton className={`h-8 w-8 bg-none text-secondary ${className}`} Icon={<Icon className="text-secondary min-h-3 min-w-3" />} onClick={onClick} />
  )
}

export default AltButton
