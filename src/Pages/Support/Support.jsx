import gsap from "gsap";
import React, { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    gsap.fromTo(
      ["div", "p", "form", "h1"],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".text-section",
          start: "top 80%",
          end: "top 30%",
          scrub: false,
          toggleActions: "play none none none",
          // markers:true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
          Need Help? Contact Support
        </h1>
        <p className="text-gray-600 text-center mb-6">
          যদি কোনো সমস্যা হয় বা প্রশ্ন থাকে, নিচের ফর্মটি পূরণ করে আমাদের জানাতে
          পারো।
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Describe your issue..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
