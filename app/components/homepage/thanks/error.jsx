import Styles from "./thanks.module.css";
export default function ErrorPage({ fun }) {
    return (
        <>
            <div id={Styles.Thankyou}>
                <div id={Styles.page} style={{ border: '1px solid red' }}>
                    <div>Something went wrong</div>
                    <button onClick={() => { fun(false) }} style={{ backgroundColor: "red", padding: "10px", maxWidth: "150px", width: "100%", marginTop: "40px" }}>Retry </button>
                </div>
            </div>
        </>
    );
}
