import "./Equipo.css"

const Equipo = (props) => {

    const obj = {
        backgroundColor: props.datos.colorSecundario
    }

    return <section className="equipo" style={obj}>
        <h3 style={{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}</h3>
        <div className="colaboradores">
        </div>
    </section>
}

export default Equipo;