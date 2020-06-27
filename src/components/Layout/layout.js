import React from 'react';
import Fake from '../../hoc/fake';

const layout = (props) => (
    <Fake>
        <div>
            Contenedores logo, menu, y barra lateral
        </div>
        <main>
            {props.children}
        </main>
    </Fake>
);

export default layout;