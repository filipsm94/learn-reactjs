import React from 'react';
import Fake from '../../hoc/fake';
import Toolbar from '../navigation/toolbar/toolbar';
import classes from './layout.module.css';

const layout = (props) => (
    <Fake>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fake>
);

export default layout;