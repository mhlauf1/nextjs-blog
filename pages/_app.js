import '../styles/globals.css';
import Navbar from '../components/Navbar/navbar';

export default function App({ Component, pageProps }) {
    return (
        <div className='pageContainer'>
            <Navbar />
            <Component {...pageProps} />
        </div>
    )
}