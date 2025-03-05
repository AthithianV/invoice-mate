import { useState } from "react"
import InvoiceForm from "./InvoiceForm"
import InvoiceTable from "./InvoiceTable"

const InvoiceGenerator = () => {

    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [currentInvoice, setCurrentInvoice] = useState<Invoice>({
        quantity: 0,
        price: 0,
        discount: 0,
        discountPercentage: 0,
        taxPercentage: 0,
        tax: 0,
        totalPrice: 0
    });

  return (
    <div className="h-[var(--body-height)] bg-gray-100 p-2 flex gap-2 max-md:flex-col">
        <InvoiceTable
            invoices={invoices}
            currentInvoice={currentInvoice}
            setCurrentInvoice={setCurrentInvoice}
        />
        <InvoiceForm
            invoices={invoices}
            currentInvoice={currentInvoice}
            setCurrentInvoice={setCurrentInvoice}
            setInVoices={setInvoices}
        />
    </div>
  )
}

export default InvoiceGenerator