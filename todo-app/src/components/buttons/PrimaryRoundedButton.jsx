import BaseButton from "./BaseButton"


const PrimaryRoundedButton = ({ className,Icon,onClick }) => {
    return (
        <BaseButton className={`bg-success rounded-full ${className}`} Icon={<Icon className="text-white h-auto w-auto" />} onClick={onClick} />
    )
}

export default PrimaryRoundedButton
