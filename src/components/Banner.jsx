import { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
    const [month, setMonth] = useState('Enero');

    useEffect(() => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const date = new Date();
        const currentMonth = date.getMonth();
        setMonth(months[currentMonth]);
    }, []);

    return (
        <section className="banner">
            <div className="promotion">
                <h1>{month} Promocional</h1>
                <h2>Productos seleccionados con 33% de descuento</h2>
                <button>Ver Consolas</button>
            </div>
        </section>
    )
}

export default Banner;