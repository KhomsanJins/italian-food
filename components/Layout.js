import Navbar from "./Navbar"
import Footer from "./Footer"

import lacalFont from "next/font/local"

const nunitoSansLight = lacalFont({ src: "../fonts/NunitoSans-Light.ttf" })
const nunitoSansRegular = lacalFont({ src: "../fonts/NunitoSans-Regular.ttf" })
const nunitoSansBlack = lacalFont({ src: "../fonts/NunitoSans-Black.ttf" })

export default function Layout({ children }) {
    return (
        <div style={nunitoSansLight.style}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}