import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const EMAIL_SERVICE_ID = "service_2yqawlk";
  const EMAIL_TEMPLATE_ID = "template_1lyy9y6";
  const EMAIL_USER_ID = "ifFOD3b9_6zfV6-CW";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, e.target, EMAIL_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Successfully sent",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops! Something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="bg-[#34383d] py-16">
        <div className="headingFont text-4xl text-center">CONTACT ME</div>
        <form onSubmit={handleSubmit}>
          <div className="m-20 flex">
            <div className="ml-20 w-1/2">
              <label className="text-slate-300 text-xl mr-20">Name * </label>
              <input
                name="name"
                className="bg-transparent border-b w-[90%] text-slate-300"
              />
            </div>
            <div className="w-1/2">
              <label className="text-slate-300 text-">Email * </label>
              <input
                name="email"
                className="bg-transparent border-b w-[90%] text-slate-300"
              />
            </div>
          </div>
          <div className="ml-36 w-1/2">
            <label className="text-slate-300 text-xl">Message * </label>
            <textarea
              name="message"
              className="bg-transparent border-b w-full"
            />
          </div>
          <div className="text-center w-full my-20">
            <button
              type="submit"
              className="inline-block text-[#06c6c6] border border-[#06c6c6] px-16 py-2 hover:bg-[#06c6c6] hover:text-[#34383d]"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="text-[#68fdfd] flex w-full justify-center">
          {/* {heroIcons.map((genre, idx, key) => {
            const Icon = heroIcons[idx];
            return (
              <li
                key={genre.id}
                className="bg-[#2b2e33] rounded-full p-4 cursor-pointer mx-6 my-10 text-2xl list-none hover:bg-[#68fdfd] hover:text-[#34383d]"
              >
                <Icon key={key} />
              </li>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
