# 🚀 LinsCrédito - Soluções Financeiras

A **LinsCrédito** é uma plataforma digital desenvolvida para facilitar o acesso ao crédito para aposentados, pensionistas e servidores públicos. O projeto foca em uma experiência de usuário fluida, permitindo simulações rápidas de Empréstimo Consignado, Antecipação de FGTS e Crédito Pessoal com integração direta ao WhatsApp.

## 🛠️ Tecnologias Utilizadas

* **React** (v18+) - Biblioteca principal para a interface.
* **TypeScript** - Garantia de tipagem e segurança no código.
* **Tailwind CSS** - Estilização moderna, responsiva e de alta performance.
* **Node.js** - Ambiente de execução para a API de backend.
* **SQL Server** - Banco de dados para armazenamento de contas e usuários.
* **React Router Dom** - Navegação entre páginas.
* **Remix Icons** - Biblioteca de ícones vetoriais.

## ✨ Funcionalidades Principais

* **Carrossel de Destaques:** Apresentação dinâmica dos principais serviços financeiros.
* **Simulador Inteligente:** Cálculo em tempo real baseado no valor do benefício e número de parcelas escolhidas.
* **Integração com WhatsApp:** Geração automática de mensagens personalizadas para agilizar o atendimento.
* **Layout Responsivo:** Totalmente adaptado para dispositivos móveis e desktops.
* **API de Backend:** Integração com banco de dados relacional para consulta de contas.

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
