import React from 'react';
import styles from './index.css';

class FirstPage extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className={styles.box}></div>
            </div>
        );
    }
}

export default FirstPage;
