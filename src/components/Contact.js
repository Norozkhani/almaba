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
    navigator.clipboard.writeText("123-456 78 90");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <div
      name="contact"
      id="contact"
      className="w-screen h-screen flex flex-col lg:flex-row"
    >
      <div className="font-poppins z-10 text-3xl md:text-5xl p-10 sm: flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
        <h2 className="leading-snug sm:leading-normal mb-4">
          If you have any thoughts or questions, do not hesitate to reach out!
        </h2>
        <br />
        <p
          className="mb-4"
          onClick={handleCopyEmail}
          style={{ cursor: "pointer" }}
        >
          Email: Bahman@almaba.se {emailCopied && "Copied!"}
        </p>
        <br />
        <p onClick={handleCopyPhone} style={{ cursor: "pointer" }}>
          Phone: 123-456 78 90 {phoneCopied && "Copied!"}
        </p>
      </div>
      <div className="sm:w-1/2 w-full h-64 ">
        <iframe
          src="https://my.spline.design/untitled-62f5ab08f4ecd0bbfe2dcce266747af6/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="max-w-screen h-screen pt-64 absolute max-md:hidden"
          title="Bahman desktop"
        ></iframe>
        <iframe
          src="https://my.spline.design/untitled-f29a56aab1c41b801489fcb2333cec2d/"
          frameborder="0"
          className="max-w-screen max-h-screen md:hidde "
          title="Bahman mobile"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
