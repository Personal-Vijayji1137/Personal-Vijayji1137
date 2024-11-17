'use client'
import { useState, useRef } from "react";
import Styles from "./contact.module.css";
import SendEmail from "./sendemail";
import Thankyou from "../thanks/thanks";
import ErrorPage from "../thanks/error";
import Loader from "../../loader/loader";
import Image from "next/image";
export default function ContactForm() {
    const [loader, setLoader] = useState(false);
    const [showthanks, setShowThanks] = useState(false);
    const [showerror, seterror] = useState(false);
    const formRef = useRef(null);
    const HandelSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        const EmailStatus = await SendEmail([
            e.target.FirstName.value,
            e.target.LastName.value,
            e.target.email.value,
            e.target["Mobile Number"].value,
            e.target.Message.value
        ]);
        setLoader(false);
        if (EmailStatus) {
            setShowThanks(true);
            formRef.current.reset();
        } else {
            seterror(true);
        }
    };

    return (
        <>
            {showthanks && <Thankyou fun={setShowThanks} />}
            {loader && <Loader />}
            {showerror && <ErrorPage fun={seterror} />}
            <div id="contact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
                <Image
                    src="/section.svg"
                    alt="Hero"
                    width={1572}
                    height={795}
                    className="absolute top-0 -z-10"
                />
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                    </div>
                </div>
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className="w-15 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                            Contact Me
                        </span>
                        <span className="w-15 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>
                <div className={Styles.Contact} id="LetsTalk">
                    {/* <div> */}
                        <form ref={formRef} onSubmit={HandelSubmit} className={Styles.ContactForm}>
                            <div>
                                <input id="FirstName" name="FirstName" type="text" placeholder="First Name" required />
                                <input id="LastName" name="LastName" type="text" placeholder="Last Name" required />
                            </div>
                            <div>
                                <input id="iplustemail" name="email" type="email" placeholder="Email" required />
                                <input id="iplustnumber" name="Mobile Number" type="number" placeholder="Mobile Number" required />
                            </div>
                            <div>
                                <textarea name="Message" id="iplustabout" placeholder="About Yourself"></textarea>
                            </div>
                            <div>
                                <div>
                                    <button type="submit">Let's Talk</button>
                                </div>
                            </div>
                        </form>
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}
