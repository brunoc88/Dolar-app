const Title = () => {
    return (
        <div className="title"><strong>Cotización actual del Dólar</strong></div>
    );
}

const Dolar = ({ dolar }) => {
    return (
        <div className="container">
            {dolar.map(d => (
                <div className="dolar" key={d.nombre}>
                    <h3 className="nombre">Dólar {d.nombre}</h3>
                    <div className="info">
                        <div className="compra">Compra: ${d.compra}</div>
                        <div className="venta">Venta: ${d.venta}</div>
                    </div>
                    <div className="actualizacion">Actualizado: {formatearFechaHora(d.fechaActualizacion)}</div>
                </div>
            ))}
        </div>
    );
};

const formatearFechaHora = (date) => {
    const fecha = new Date(date);
    return fecha.toLocaleString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
};

export { Title, Dolar };
