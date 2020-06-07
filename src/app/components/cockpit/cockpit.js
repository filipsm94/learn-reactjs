import React from 'react';
import stilp from './cockpit.module.css'; // Para este tipo de importacion es necesario definir el css como modulo -> algo.module.css


const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = stilp.red;
    }
    if(props.persons.length <= 2){
        assignedClasses.push(stilp.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(stilp.blod);
    }

    return (
        <div className={stilp.Cockpit}>
            <h1>Hola bienvenido a tu react app</h1>
            <p>Esta app esta funcionando perfecto</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Mostrar personas</button>
        </div>
    );

}

export default Cockpit;