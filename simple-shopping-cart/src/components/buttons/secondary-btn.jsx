const SecondaryBtn = ({children,onClick,className}) => {
  return (
    <button onClick={onClick} type="button" className={`inline-flex justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${className}`} id="menu-button" aria-expanded="true" aria-haspopup="true">
      {children}
    </button>
  )
}

export default SecondaryBtn