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
        <form className="flex flex-col p-4 text-black w-[400px] md:w-[600px] h-[600px] gap-5 leading-loose">
          <hr className="border-black"/>
          
          <div>
            <h2>What&apos;s your name?</h2>
            <input type="text" className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>

          <div>
            <h2>What&apos;s your email?</h2>
            <input type="text" className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>

          <div>
            <h2>Your Subject</h2>
            <input type="text" className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>

          <div>
            <h2>Your Message</h2>
            <textarea rows={4} cols={40} className="border-none bg-transparent outline-none"/>
          </div>

          <hr className="border-black"/>
        </form>

        <button className="p-4 bg-[#908484] w-[168px] h-[168px] rounded-[100%] self-center sm:self-end">Send!</button>
      
      </section>


    </div>
  );
}
