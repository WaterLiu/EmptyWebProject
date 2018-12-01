import React from 'react';
import styles from './index.css';
import * as mobx from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools'

@observer
class FirstPage extends React.Component {

    @mobx.observable data = {
        frame: {
            x: 10,
            y: 20,
            width: 100,
            height: 100,
        }
    };

    constructor(props) {
        super(props);

    }

    button1Clicked() {
        mobx.remove(this.data.frame, 'x');
    }

    button2Clicked() {
        mobx.set(this.data.frame, {x : 100});
    }

    render() {

        if (mobx.has(this.data.frame, 'x')) {
            console.log('x 存在 render 刷新');
        } else {
            console.log('x 不存在 render 刷新');
        }

        return (
            <div className={styles.box}>
                <button onClick={this.button1Clicked.bind(this)}>Button1</button>
                <button onClick={this.button2Clicked.bind(this)}>Button2</button>
                <div>{ this.data.frame.x }</div>
                <DevTools/>
            </div>
        );
    }
}


class Data {



    constructor(props) {

    }



}

export default FirstPage;
