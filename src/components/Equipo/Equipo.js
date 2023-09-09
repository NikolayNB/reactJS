import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"

const Equipo = (props) => {

    const obj = {
        backgroundColor: props.datos.colorSecundario
    }

    return <section className="equipo" style={obj}>
        <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo;