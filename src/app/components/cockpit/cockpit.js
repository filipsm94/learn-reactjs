import React, { useEffect } from 'react';
import stilp from './cockpit.module.css'; // Para este tipo de importacion es necesario definir el css como modulo -> algo.module.css


const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // here we launch a http request if we needed
        setTimeout(()=>{
            alert('lauch time out effect');
        },1000);
        return () => { // if we add a retunr to the effect, it is similar to componentWillUnmount
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[props.persons]);// if we needed launch this effect just one time, we have to set [], but if we wants it to depends on change of varaible state, we setting [nameVariableState], example [props.persons]
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = stilp.Red;
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