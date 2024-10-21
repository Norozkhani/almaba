import React, { useState } from "react";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Bahman@almaba.se");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("070-769 27 38");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <div
      name="contact"
      id="contact"
      className="w-screen h-screen flex flex-col lg:flex-row relative justify-center px-10"
    >
      <div className="absolute top-0 left-0 w-full h-full z-30"></div>

      <div className="font-poppins z-40 text-3xl md:text-5xl p-10 flex flex-col justify-center items-center lg:w-1/2 text-center lg:text-center lg:justify-center lg:h-full h-1/2">
        <h2 className="leading-snug sm:leading-normal mb-4">
          If you have any thoughts or questions, do not hesitate to reach out!
        </h2>
        <p
          className="mb-4"
          onClick={handleCopyEmail}
          style={{ cursor: "pointer" }}
        >
          Email: Bahman@almaba.se {emailCopied && "Copied!"}
        </p>
        <p onClick={handleCopyPhone} style={{ cursor: "pointer" }}>
          Phone: 070-769 27 38 {phoneCopied && "Copied!"}
        </p>
      </div>

      <div className="iframe-container w-full lg:w-1/2 h-full lg:h-full z-20">
        <iframe
          src="https://my.spline.design/untitled-f29a56aab1c41b801489fcb2333cec2d/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Bahman desktop"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
