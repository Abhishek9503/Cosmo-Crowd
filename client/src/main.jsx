import React from 'react' 
import { ReactDOM } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

import { StateContextProvider } from './context';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ThirdwebProvider activeChain={ChainId.Goerli}
      clientId="968957c1f255e9727aba1f132b1827ef">
    
    
        <Router>
        <StateContextProvider>
        <App/>
        </StateContextProvider>
           
        </Router>
    </ThirdwebProvider>
)