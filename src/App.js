import React, { useState } from 'react';
import Chat from './components/Chat';
import './styles/App.scss';
import { IconArrowRight } from '@tabler/icons-react';

function App() {
  const [processingSeconds, setProcessingSeconds] = useState(null);
  
  return <div className='main'>
    <div className='text-description'>
      <div>
        <h1>Chat credits </h1>
        <h2>Evolução para evidenciar o consumo de créditos e os modos de actions/suporte.</h2>
        <div className='point'><IconArrowRight /><p>Envie uma mensagem no chat para ver o comportamento de resposta do AI</p></div>
      </div>
    </div>
    <div className='content'><Chat onProcessingStart={() => {}} onProcessingEnd={(secs) => setProcessingSeconds(secs)} /></div>
  </div>;
}

export default App;
