import { useState } from "react";
import "./MiOrg.css"

const MiOrg = () => {

    const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("Click en el botón", !mostrar)
        actualizarMostrar(!mostrar);
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/boton-add.png" alt="add" onClick={manejarClick} />
    </section>
}

export default MiOrg;