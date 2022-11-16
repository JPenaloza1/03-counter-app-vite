import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import { HelloWorldApp } from './HelloWorldApp';
import {FirstApp} from './FirstApp'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById("root") ).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title="Hola soy Goku" subTitle={123}/> */}
        {/* <CounterApp value={20}/> */}
        <FirstApp title="Hola, soy Jonathan"/>
    </React.StrictMode>
)