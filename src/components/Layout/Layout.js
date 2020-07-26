import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
    <h1>Toolbar</h1>
    <main className={classes.content}>
        {props.children}
    </main>
    </Aux>
            )

export default layout;