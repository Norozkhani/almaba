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
          Phone: 070-769 27 38 {phoneCopied && "Copied!"}
        </p>
      </div>
      <iframe
        src="https://my.spline.design/untitled-f29a56aab1c41b801489fcb2333cec2d/"
        frameBorder="0"
        width="100%"
        height="60%"
        className="max-w-screen h-screen pt-80 absolute right-0 max-lg: left-0 "
        title="Bahman desktop"
      ></iframe>
      {/* <iframe
          src="https://my.spline.design/untitled-f29a56aab1c41b801489fcb2333cec2d/"
          frameborder="0"
          className="max-w-screen max-h-screen absolute pt64"
          title="Bahman mobile"
        ></iframe> */}
    </div>
  );
};

export default Contact;
