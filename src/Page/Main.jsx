import FirstComponent from "../Components/FirstComponent"
import Navbar from "../Components/Navbar"
export default function Main(){
    return(
        <section className="p-2">
            <Navbar />
            <FirstComponent/>
            
        </section>
    )
}