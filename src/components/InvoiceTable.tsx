import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SetStateAction, Dispatch } from "react"

type PropType = {
    invoices: Invoice[],
    currentInvoice: Invoice
    setCurrentInvoice: Dispatch<SetStateAction<Invoice>>
}

const InvoiceTable = ({invoices, setCurrentInvoice, currentInvoice}:PropType) => {
  return (
    <div className='h-full w-[70%] max-md:w-full max-md:h-[50%]  overflow-auto bg-white rounded shadow p-2'>
      <table className="w-full text-sm max-lg:text-xs ">
        <thead>
          <tr className="bg-black rounded-md text-gray-400">
            <th className="p-2 rounded-s-md">S.No</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
            <th className="p-2">Discount(%)</th>
            <th className="p-2">Discount</th>
            <th className="p-2">Tax(%)</th>
            <th className="p-2">Tax</th>
            <th className="p-2">Total Price</th>
            <th className="p-2 rounded-e-md">Update</th>
          </tr>
        </thead>
        <tbody>
          {
            invoices.length>0
            ?invoices.map((invoice, index)=>(<tr className={`rounded-md font-semibold odd:bg-slate-50 even:bg-sky-100 ${currentInvoice.id===invoice.id?"border-2 border-black":""}`}>
              <td className="text-center p-2 rounded-s-md">{index+1}</td>
              <td className="text-center p-2">{invoice.quantity}</td>
              <td className="text-center p-2">{invoice.price}</td>
              <td className="text-center p-2">{invoice.discountPercentage} %</td>
              <td className="text-center p-2">{invoice.discount}</td>
              <td className="text-center p-2">{invoice.taxPercentage} %</td>
              <td className="text-center p-2">{invoice.tax}</td>
              <td className="text-center p-2 text-sky-400 font-bold">{invoice.totalPrice}</td>
              <td className="text-center rounded-e-md"><button type="button" onClick={()=>setCurrentInvoice(invoice)}><FontAwesomeIcon icon={faEdit}/></button></td>
              </tr>
            ))
            :<tr className="w-full text-center font-bold text-red-500"><td className="p-2" colSpan={9}>No Data</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default InvoiceTable