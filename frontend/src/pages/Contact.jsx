import { useState } from "react";
import toast from "react-hot-toast";
const Contact = () => {

    const [result, setResult] =useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3a576452-ab01-4489-a2ee-840deb71e7e8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
      
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult('');
      }
    };
  return (
  <form onSubmit={onSubmit} className="flex flex-col items-center text-sm mt-20 mb-20">
    <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
    <p className="text-xl text-gray-500 text-center pb-10">We’d love to hear from you — feel free to reach out with any questions or feedback .</p>
    
    <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
            <label className="text-black/70" >Your Name</label>
            <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-primary" type="text" required/>
        </div>
        <div className="w-full">
            <label className="text-black/70" >Your Email</label>
            <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none  focus:border-primary" type="email" required/>
        </div>
    </div>

    <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-black/70">Message</label>
        <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-primary" required/>
    </div>

    <button type="submit" className="mt-5 bg-primary text-white h-12 w-56 px-4 rounded active:scale-95 transition cursor-pointer">{result ? result : "Send Message"}</button>
</form>


  );
  
}

export default Contact; 
