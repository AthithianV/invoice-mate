
const Navbar = () => {
  return (
    <div className="h-[var(--navbar-height)] bg-sky-400 py-2 px-4 flex items-center gap-2">
        <div className="p-2 bg-white rounded-full">
            <img src={"./invoice.png"} alt={"logo"} className="h-5 w-5"/>
        </div>
        <h5 className="font-semibold text-xl">Invoice Mate</h5>
    </div>
  )
}

export default Navbar