// src/context/TransitionContext.jsx
'use client';

import { createContext } from 'react';

const TransitionContext = createContext({
    triggerTransition: (hash) => { }
});

export default TransitionContext;