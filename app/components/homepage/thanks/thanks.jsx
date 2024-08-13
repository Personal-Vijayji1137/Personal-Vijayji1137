import { useEffect, useState } from "react";
import Styles from "./thanks.module.css";
export default function Thankyou({ fun }) {
    const [time, setTime] = useState(5);
    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime(prevTime => prevTime - 1);
            } else {
                fun(false)
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (
        <>
            <div id={Styles.Thankyou}>
                <div id={Styles.page}>
                    <div>Thank you for</div>
                    <div>Getting in touch</div>
                    <div>Please wait for {time} seconds</div>
                    <button>Redirecting...</button>
                </div>
            </div>
        </>
    );
}
