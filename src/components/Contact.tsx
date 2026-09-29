import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div id="contact" initial={{ y: 250, opacity: 0 }} whileInView={{ y: 0, opacity: 100 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <div>
        <h2 className="text-white font-bold text-2xl text-center mb-12">Contact Us</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps?q=Sorsogon%20City%2C%20Sorsogon%2C%20Philippines&output=embed"
              width="600"
              height="450"
              className="border-0 w-full h-full min-h-[450px]"
              loading="lazy"
              title="Tasty Burger location in Sorsogon City"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col">
              <input type="text" placeholder="Full Name *" required className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white" />
              <input type="email" placeholder="Email *" required className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white" />
              <input type="text" placeholder="Phone Number *" required className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white" />
              <textarea rows={5} placeholder="Message *" required className="bg-transparent border-gray-700 mb-8 placeholder:text-gray-300 text-white focus:border-white" />
              <button type="submit" className="border border-white text-white px-6 py-2 transition-colors hover:bg-white hover:text-black">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Contact;
