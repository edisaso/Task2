import CalculatorForm from "@/components/CalculatorForm";

export default function Home() {
  return (
    <main className="">
       <div className="container bg-white flex flex-col">
        <div className="p-5">
        <h1 className="flex items-center justify-center text-3xl text-black font-bold ">Car Leasing Calculator</h1>
        </div>
        <div>
        <CalculatorForm />
        </div>
      </div>
    </main>
  );
}
