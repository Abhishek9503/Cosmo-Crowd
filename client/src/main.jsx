import React from 'react' 
import { ReactDOM } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
            <App/>
        </Router>
    </ThirdwebProvider>
)