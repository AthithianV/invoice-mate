import { Dispatch, SetStateAction } from "react"
import InputElement from "./InputElement"
import calcuateInvoice from "../utils/calcuateInvoice"

type PropType = {
    invoices: Invoice[],
    setInVoices: Dispatch<SetStateAction<Invoice[]>>,
    currentInvoice: Invoice,
    setCurrentInvoice: React.Dispatch<SetStateAction<Invoice>>,
}

const InvoiceForm = ({setCurrentInvoice, invoices, currentInvoice, setInVoices}:PropType) => {

    function handleChange(value:number, name:string){
        setCurrentInvoice(prev=>({...prev, ...calcuateInvoice(value, name, currentInvoice)}))
    }

    function resetForm(){
        setCurrentInvoice({
            quantity: 0,
            price: 0,
            discount: 0,
            discountPercentage: 0,
            taxPercentage: 0,
            tax: 0,
            totalPrice: 0
        })
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(currentInvoice);
        
        if(currentInvoice.id){
            const index = invoices.findIndex(invoice=>invoice.id === currentInvoice.id);
            if(index>-1){
                invoices[index] = currentInvoice;
                setInVoices([...invoices]);
            }
        }else{
            setInVoices([...invoices, {...currentInvoice, id:Date.now()}]);
        }
        resetForm();
    }

  return (
    <div className="flex-1 bg-white rounded shadow max-h-[100%] overflow-auto py-2 px-4 max-md:text-xs">
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1 className="my-2 font-semibold text-lg">Add Invoice:</h1>

            <div className="flex gap-2">
                <div className="w-[50%]">
                    <InputElement
                        title={"Quantity"}
                        name="quantity"
                        handleChange={handleChange}
                        value={currentInvoice.quantity}
                    />
                </div>
                <div className="w-[50%]">
                    <InputElement
                        title={"Price"}
                        name="price"
                        handleChange={handleChange}
                        value={currentInvoice.price}
                    />
                </div>
            </div>

            <div className="flex gap-2">
                <div className="w-[50%]">
                    <InputElement
                        title={"Discount Percentage"}
                        name="discountPercentage"
                        handleChange={handleChange}
                        value={currentInvoice.discountPercentage}
                    />
                </div>
                <div className="w-[50%]">
                    <InputElement
                        title={"Discount"}
                        name="discount"
                        handleChange={handleChange}
                        value={currentInvoice.discount}
                    />
                </div>
            </div>

            <div className="flex gap-2">
                <div className="w-[50%]">
                    <InputElement
                        title={"Tax Percentage"}
                        name="taxPercentage"
                        handleChange={handleChange}
                        value={currentInvoice.taxPercentage}
                    />
                </div>
                <div className="w-[50%]">
                    <InputElement
                        title={"Tax"}
                        name="tax"
                        handleChange={handleChange}
                        value={currentInvoice.tax}
                    />
                </div>
            </div>

            <InputElement
                title={"Total Price"}
                name="totalPrice"
                handleChange={handleChange}
                value={currentInvoice.totalPrice}
                disabled={true}
            />

            <div className="flex gap-2">
                <button type="submit" className="my-2 py-2 bg-sky-400 px-4 rounded font-semibold text-white">
                    {
                        currentInvoice.id?"Update":"Submit"
                    }
                </button>
                <button className="my-2 py-2 bg-red-500 px-4 rounded font-semibold text-white">Clear</button>
            </div>
            
        </form>
    </div>
  )
}

export default InvoiceForm