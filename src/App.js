import React, { useState } from 'react';
import Chat from './components/Chat';
import './styles/App.scss';
import { IconArrowRight } from '@tabler/icons-react';

function App() {
  const [processingSeconds, setProcessingSeconds] = useState(null);
  const [credits, setCredits] = useState(600);
  
  return <div className='main'>
    <div className='text-description'>
      <div>
        <h1>Chat credits </h1>
        <h2>Evolução para evidenciar o consumo de créditos e os modos de</h2>
        <div className='point'><IconArrowRight /><p>Utilize o menu dropdown para trocar entre o modo Agente e o modo Dúvidas</p></div>
        <div className='point'><IconArrowRight /><p>Clique no botão abaixo para simular 0 créditos e exibir o comportamento esperado.</p></div>
        <div style={{ marginTop: 12 }}>
          <button
            type="button"
            onClick={() => setCredits(prev => prev === 0 ? 600 : 0)}
            style={{
              padding: '6px 10px',
              borderRadius: 6,
              border: '1px solid #ccc',
              background: credits === 0 ? '#e8f5ff' : '#ffe8e8',
              color: '#333',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 12
            }}
          >
            {credits === 0 ? 'Simular 600 créditos' : 'Simular 0 créditos'}
          </button>
          
        </div>
      </div>
    </div>
    <div className='content'><Chat credits={credits} onProcessingStart={() => {}} onProcessingEnd={(secs) => setProcessingSeconds(secs)} /></div>
  </div>;
}

export default App;
