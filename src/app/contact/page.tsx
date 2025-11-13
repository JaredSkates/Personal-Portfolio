import { Form } from "@/components/Form";
import Navbar from "@/components/navbar";

export default function Page() {

  return (
    <div className="min-h-screen">
      {/* Primary Navigation */}
      <Navbar /> {/* Imported Navbar component  */}

      <div className="h-20 flex justify-center items-center p-4">
        <h1 className="text-black text-4xl font-medium">Inquiries</h1>
      </div>

      <Form />

      <footer className="ml-2 p-6">
        <span className="text-black font-thin">&copy;Jared Anastacio Ferrer</span>
      </footer>

    </div>
  );
}
