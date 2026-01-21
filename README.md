# 🚀 LinsCrédito - Soluções Financeiras

A **LinsCrédito** é uma empresa que atua como correspondente bancária. Com o intuito de aprimorar minhas habilidades como desenvolvedor web, resolvi criar uma página para a empresa, a fim de aumentar sua visibilidade e a agilidade no atendimento. No projeto, busquei seguir uma estética moderna e minimalista, alinhada às cores da logomarca. O diferencial é o 'Simulador', que tem como objetivo atrair clientes e agilizar processos. O ideal seria a integração com uma API do INSS para verificação de saldo via CPF; porém, por enquanto, utilizei um método mais simplificado, com cálculos que aproximam o valor do empréstimo para beneficiários com margem 'limpa'.

## 🛠️ Tecnologias Utilizadas

* **React** (v18+) - Biblioteca principal para a interface.
* **TypeScript** - Garantia de tipagem e segurança no código.
* **Tailwind CSS** - Estilização moderna, responsiva e de alta performance.
* **Remix Icons** - Biblioteca de ícones vetoriais.

## ✨ Funcionalidades Principais

* **Carrossel de Destaques:** Apresentação dinâmica dos principais serviços financeiros.
* **Simulador Inteligente:** Cálculo em tempo real baseado no valor do benefício e número de parcelas escolhidas.
* **Integração com WhatsApp:** Geração automática de mensagens personalizadas para agilizar o atendimento.
* **Layout Responsivo:** Totalmente adaptado para dispositivos móveis e desktops.

## 📊 Regras de Negócio do Simulador

O sistema aplica coeficientes específicos para calcular o valor liberado conforme o parcelamento:
* **96 parcelas:** Coeficiente de `0.02370`
* **48 parcelas:** Coeficiente de `0.03330`
* **Outras parcelas:** Coeficiente de `0.0405`

## 🚀 Como rodar o projeto localmente

### Front-end
1. **Instale as dependências:** `npm install`
2. **Inicie o servidor:** `npm run dev`



---

### 📝 Licença
© 2025 LinsCrédito - Transformando sonhos em realidade.
