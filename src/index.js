import React from 'react';
import {render} from 'react-dom';
import FirstPage from './pages/firstPage';

const renderDom = Component => {
    render(
        < Component/>, document.getElementById('app')
    );
}
renderDom(FirstPage);
