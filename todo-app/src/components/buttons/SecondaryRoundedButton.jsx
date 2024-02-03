import BaseButton from "./BaseButton"

const SecondaryRoundedButton = ({ className,Icon }) => {
  return (
    <BaseButton className={`h-8 w-8 bg-none text-secondary border-4 rounded-full ${className}`} Icon={<Icon className="text-secondary min-h-5 min-w-5" />} />
  )
}

export default SecondaryRoundedButton