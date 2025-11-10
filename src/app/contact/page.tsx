import ContactForm from "@/components/Form";
import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Primary Navigation */}
      <Navbar /> {/* Imported Navbar component  */}

      <div className="h-20 flex justify-center items-center p-4">
        <h1 className="text-black text-4xl font-medium">Inquiries</h1>
      </div>

      <section className="flex flex-col sm:flex-row justify-center sm:gap-20">
        <ContactForm/>

        <button className="p-4 bg-[#908484] w-[168px] h-[168px] rounded-[100%] self-center sm:self-end">Send!</button>
  
      </section>


      <footer className="ml-2 p-6">
        <span className="text-black font-thin">&copy;Jared Anastacio Ferrer</span>
      </footer>

    </div>
  );
}
