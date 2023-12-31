import NavBar from "../components/NavBar";
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    )


}