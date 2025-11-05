# Chat Credits

## Funcionalidades

### 1. Caixa Seletora do Modo Agente ou Dúvidas

O sistema possui dois modos de operação que podem ser selecionados através de um dropdown:

- **Modo Agente**: Permite que o Cortex AI execute ações ou análises dentro do sistema, consumindo créditos quando necessário
- **Modo Dúvidas**: Modo gratuito para suporte e esclarecimentos, sem consumo de créditos

A seleção é feita através de um botão dropdown localizado na parte superior da caixa de input, exibindo ícones distintos para cada modo (∞ para Agente e 💬 para Dúvidas).

**Arquivos relacionados:**
- `src/components/ChatPromptInput/ChatPromptInput.js` (linhas 30-31, 303-311, 360-389)
- `src/components/ChatPromptInput/ChatPromptInput.scss` (linhas 241-359)

---

### 2. Consumo de Créditos no Modo Agente

No modo Agente, os créditos são consumidos quando o Cortex AI gera ações ou análises. O sistema controla o bloqueio de envio de mensagens quando o usuário possui 0 créditos, impedindo o uso do modo Agente até que os créditos sejam recarregados.

**Arquivos relacionados:**
- `src/components/ChatPromptInput/ChatPromptInput.js` (linhas 166, 187-190, 470-480)
- `src/components/Chat/Chat.js` (linha 25, 107)

---

### 3. Labels e Tooltips Dinâmicos Baseados em Créditos

O sistema exibe labels e tooltips diferentes dependendo do estado dos créditos do usuário:

- **Com créditos (modo Agente)**: Exibe o número de créditos disponíveis com tooltip explicando que créditos são consumidos apenas quando o AI executa ações ou faz análises
- **Sem créditos (0 créditos)**: Label muda para cor de alerta (vermelho) e tooltip informa que o usuário está sem créditos até a próxima data de recarga, sugerindo contato com suporte
- **Modo Dúvidas**: Exibe "Uso gratuito" em verde com tooltip explicando que é gratuito e não desconta créditos

**Arquivos relacionados:**
- `src/components/ChatPromptInput/ChatPromptInput.js` (linhas 392-418)
- `src/components/ChatPromptInput/ChatPromptInput.scss` (linhas 362-414)

---

### 4. Simplificação da Interface

Várias melhorias visuais foram implementadas para simplificar a interface:

#### 4.1. Remoção do Ícone Sparkle como Avatar nas Mensagens

O ícone `IconSparkles` foi removido das mensagens da IA, tornando a interface mais limpa.

**Arquivos relacionados:**
- `src/components/MessageLog/MessageLog.js` (linhas 52-54 - código comentado)

#### 4.2. Ajustes de Fonte e Padding na Caixa de Texto

Ajustes foram feitos no tamanho da fonte e espaçamento interno da caixa de input para melhorar a legibilidade e usabilidade.

**Arquivos relacionados:**
- `src/components/ChatPromptInput/ChatPromptInput.scss` (linhas 15-29, 433-434)

#### 4.3. Ajustes no Botão de Inserir Contexto

O botão de inserir contexto foi ajustado visualmente, mantendo apenas o ícone `@` e o texto "Inserir" de forma simplificada.

**Arquivos relacionados:**
- `src/components/ChatPromptInput/ChatPromptInput.js` (linhas 440-448)
- `src/components/ChatPromptInput/ChatPromptInput.scss` (linhas 103-149)

#### 4.4. Label Simplificada

As labels de créditos foram simplificadas, removendo ícones desnecessários e mantendo apenas o texto essencial com tooltips informativos.

**Arquivos relacionados:**
- `src/components/ChatPromptInput/ChatPromptInput.js` (linhas 392-418)
- `src/components/ChatPromptInput/ChatPromptInput.scss` (linhas 362-414)

---

## Demo

Veja a aplicação em funcionamento: https://daniel-ctx.github.io/chat-credits/
