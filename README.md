# Clínica Innovar

<p align="center">
  <img src="https://res.cloudinary.com/drasiz1tf/image/upload/v1790722573/espa%C3%A7o-innovar/icon/innovar-logo-icon-gold.png" alt="Clínica Innovar" width="180">
</p>

<p align="center">
  <strong>Site institucional da Clínica Innovar</strong>
</p>

<p align="center">
  <a href="https://www.clinicainnovar.com.br/">🌐 Site oficial</a>
  ·
  <a href="https://github.com/wedleysilva">GitHub</a>
</p>

---

## 📋 Sobre o projeto

O projeto da **Clínica Innovar** é uma aplicação web institucional desenvolvida para apresentar a clínica, seus tratamentos, informações, diferenciais e canais de contato aos visitantes.

A aplicação foi desenvolvida com foco em:

* Apresentação institucional da clínica;
* Divulgação de tratamentos e procedimentos;
* Experiência de navegação moderna e responsiva;
* Integração com WhatsApp para contato e agendamento;
* Integração com redes sociais;
* Exibição otimizada de imagens;
* Recursos de Inteligência Artificial;
* Animações e transições de interface;
* Responsividade para dispositivos desktop, tablet e mobile;
* Otimização para publicação em produção;
* Utilização de serviços externos para infraestrutura e recursos complementares.

O projeto está disponível publicamente através do domínio:

**https://www.clinicainnovar.com.br/**

---

## 🚀 Tecnologias utilizadas

### Frontend

| Tecnologia        | Utilização                                       |
| ----------------- | ------------------------------------------------ |
| **React**         | Desenvolvimento da interface                     |
| **TypeScript**    | Tipagem estática e desenvolvimento do código     |
| **Vite**          | Ambiente de desenvolvimento e build da aplicação |
| **CSS**           | Estilização, layout e responsividade             |
| **Framer Motion** | Animações, transições e interações               |
| **Google Fonts**  | Tipografia da aplicação                          |

### Tipografia

O projeto utiliza fontes disponibilizadas pelo **Google Fonts**, com destaque para:

* **Cormorant Garamond** — títulos e elementos de destaque;
* **Jost** — textos, navegação e elementos de interface.

A combinação das fontes foi utilizada para manter uma identidade visual sofisticada e alinhada à proposta estética da clínica.

---

# 🧩 Principais recursos

## 🏥 Apresentação institucional

A aplicação apresenta informações sobre a Clínica Innovar e seus serviços, permitindo que visitantes conheçam a proposta da clínica através de uma interface visual.

Entre os elementos institucionais estão:

* Identidade visual;
* Apresentação da clínica;
* Informações sobre tratamentos;
* Diferenciais;
* Informações de contato;
* Links para redes sociais;
* Chamadas para agendamento.

---

## 💆 Tratamentos

O projeto possui uma seção dedicada à apresentação dos tratamentos oferecidos pela clínica.

Os procedimentos são organizados por categorias, facilitando a navegação e a localização das informações.

Entre as categorias utilizadas estão:

### FACIAL

Cuidados faciais e procedimentos relacionados à estética facial.

Exemplos:

* Botox;
* Preenchimentos;
* Skinbooster;
* Bioestimuladores;
* PDO;
* Microagulhamento;
* Subcisão para acne;
* Limpezas;
* Peelings.

### CORPORAL

Protocolos e tratamentos voltados à estética corporal.

### SUPLEMENTAÇÕES

Informações relacionadas às suplementações e procedimentos injetáveis disponibilizados pela clínica.

### ESTÉTICA AVANÇADA

Procedimentos que utilizam tecnologias e técnicas avançadas de estética.

A interface dos tratamentos utiliza elementos interativos e animações para melhorar a experiência de navegação.

---

# 🔎 Busca e navegação de tratamentos

A aplicação possui mecanismos de navegação que permitem localizar tratamentos e acessar suas informações de maneira mais intuitiva.

A interface foi desenvolvida considerando:

* Busca manual;
* Cards interativos;
* Navegação entre tratamentos;
* Abertura de informações detalhadas;
* Animações de entrada e saída;
* Transições entre estados;
* Adaptação para dispositivos móveis.

---

# 📱 Responsividade

A aplicação foi desenvolvida para funcionar em diferentes tamanhos de tela.

O layout é adaptado para:

* 🖥️ Desktop;
* 💻 Notebooks;
* 📱 Smartphones;
* 📱 Tablets.

Foram considerados aspectos como:

* Redimensionamento de componentes;
* Organização dos cards;
* Navegação em telas menores;
* Campos de pesquisa;
* Espaçamento;
* Tipografia;
* Botões e áreas de interação;
* Imagens responsivas;
* Animações adequadas para diferentes dispositivos.

---

# 💬 WhatsApp

O site possui integração com o **WhatsApp** para facilitar o contato e o agendamento de avaliações.

A chamada de atendimento utiliza uma mensagem pré-configurada:

> Olá, eu gostaria de agendar uma avaliação!

O usuário pode acessar o WhatsApp diretamente através dos pontos de contato disponibilizados na aplicação.

---

# 📸 Redes sociais

A aplicação também disponibiliza acesso às redes sociais da Clínica Innovar, permitindo que o visitante continue sua interação com a clínica fora do site.

Entre os canais integrados está o:

* Instagram.
* Facebook.

---

# 🤖 Inteligência Artificial

O projeto possui integração com a **API do Google Gemini**, utilizada para disponibilizar recursos de Inteligência Artificial diretamente dentro da aplicação.

A integração é realizada através de uma função/server endpoint:

```text
api/gemini.js
```

O endpoint funciona como uma camada intermediária entre a aplicação e a API do Google Gemini.

### Modelo utilizado

```text
Gemini 3.6 Flash
```

Identificador utilizado no projeto:

```text
gemini-3.6-flash
```

A integração permite incorporar funcionalidades baseadas em Inteligência Artificial à experiência do usuário, mantendo a comunicação com a API externa concentrada em uma camada específica da aplicação.

---

# 🏗️ Arquitetura da aplicação

De forma simplificada, a aplicação pode ser representada da seguinte maneira:

```text
                         ┌──────────────────────────┐
                         │      Clínica Innovar      │
                         │     React + TypeScript    │
                         └────────────┬─────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
              ▼                       ▼                       ▼
       ┌─────────────┐         ┌─────────────┐         ┌──────────────┐
       │   Vercel    │         │ Cloudinary  │         │  Gemini API  │
       │ Hospedagem  │         │   Imagens   │         │     IA       │
       │    Deploy   │         │   Mídia     │         │              │
       └─────────────┘         └─────────────┘         └──────────────┘
              │
              ▼
       ┌─────────────┐
       │ Registro.br │
       │   Domínio   │
       └─────────────┘

                         Serviços complementares

              ┌──────────────┬──────────────┬──────────────┐
              │              │              │              │
              ▼              ▼              ▼              ▼
          WhatsApp       Instagram     Google Fonts   Vercel Analytics
```

---

# 🌐 Hospedagem e infraestrutura

O projeto está publicado em ambiente de produção utilizando serviços externos para hospedagem, domínio, armazenamento de mídia, análise e Inteligência Artificial.

| Serviço               | Utilização                                         |
| --------------------- | -------------------------------------------------- |
| **Vercel**            | Hospedagem, deploy e disponibilização da aplicação |
| **Registro.br**       | Registro e gerenciamento do domínio                |
| **Cloudinary**        | Armazenamento e distribuição das imagens           |
| **Google Gemini API** | Recursos de Inteligência Artificial                |
| **Vercel Analytics**  | Monitoramento e análise da utilização da aplicação |
| **WhatsApp**          | Comunicação e agendamento                          |
| **Instagram**         | Presença e integração com redes sociais            |
| **Google Fonts**      | Tipografia                                         |

---

# 🔗 Domínio próprio

O projeto possui domínio próprio:

**https://www.clinicainnovar.com.br/**

O domínio:

```text
clinicainnovar.com.br
```

é registrado e administrado através do **Registro.br**.

A aplicação, por sua vez, é hospedada e disponibilizada em produção através da **Vercel**.

Dessa forma, o fluxo de publicação é separado entre:

```text
Registro.br
     │
     │ domínio
     ▼
clinicainnovar.com.br
     │
     ▼
Vercel
     │
     ▼
Aplicação React
```

---

# ☁️ Cloudinary

As imagens utilizadas no projeto são hospedadas através do **Cloudinary**.

A utilização de um serviço dedicado de mídia permite manter os arquivos visuais separados do código-fonte da aplicação.

Entre os recursos armazenados estão:

* Logo da Clínica Innovar;
* Favicon;
* Imagens institucionais;
* Imagens dos tratamentos;
* Imagens utilizadas em componentes;
* Outros recursos visuais da interface.

Exemplo de utilização:

```text
React
  │
  ▼
URL da imagem
  │
  ▼
Cloudinary
  │
  ▼
Imagem exibida no site
```

Essa abordagem também facilita a organização e distribuição dos arquivos de mídia utilizados pela aplicação.

---

# 📊 Vercel Analytics

O projeto utiliza **Vercel Analytics** como recurso complementar de monitoramento.

A ferramenta permite acompanhar informações relacionadas à utilização da aplicação em produção.

A integração complementa a infraestrutura de hospedagem da Vercel e fornece dados que podem auxiliar na análise do comportamento de acesso ao site.

---

# 🗺️ Mapa de serviços externos

Esta seção funciona como um inventário dos serviços que fazem parte do projeto, mas que não necessariamente aparecem como dependências no `package.json`.

| Recurso                    | Serviço               | Onde é usado               |
| -------------------------- | --------------------- | -------------------------- |
| 🖼️ Imagens                | **Cloudinary**        | Logo, favicon e imagens    |
| 🌐 Hospedagem              | **Vercel**            | Site em produção           |
| 🔗 Domínio                 | **Registro.br**       | `clinicainnovar.com.br`    |
| 💬 Comunicação             | **WhatsApp**          | Agendamento e contato      |
| 📸 Rede social             | **Instagram**         | Divulgação e redes sociais |
| 🔤 Fontes                  | **Google Fonts**      | Cormorant Garamond + Jost  |
| ✨ Animações                | **Framer Motion**     | Interface e transições     |
| ⚡ Build                    | **Vite**              | Desenvolvimento e build    |
| ⚛️ Interface               | **React**             | Aplicação frontend         |
| 🔷 Tipagem                 | **TypeScript**        | Código da aplicação        |
| 🎨 Estilos                 | **CSS**               | Layout e responsividade    |
| 🤖 Inteligência Artificial | **Google Gemini API** | Recursos de IA             |
| 📊 Analytics               | **Vercel Analytics**  | Monitoramento da aplicação |

---

# 🧱 Estrutura geral do projeto

A estrutura pode ser organizada de maneira semelhante à seguinte:

```text
clinica-innovar/
│
├── public/
│   ├── ...
│
├── src/
│   ├── components/
│   │   ├── ...
│   │
│   ├── sections/
│   │   ├── ...
│   │
│   ├── assets/
│   │   ├── ...
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
│
├── api/
│   └── gemini.js
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

A estrutura exata pode variar de acordo com a organização atual dos componentes e arquivos do projeto.

---

# 🔐 Variáveis de ambiente

Informações sensíveis e chaves de APIs não devem ser armazenadas diretamente no código-fonte ou versionadas no Git.

Quando aplicável, as variáveis devem ser configuradas através das variáveis de ambiente da plataforma de hospedagem.

Exemplo conceitual:

```env
GEMINI_API_KEY=...
```

A chave utilizada para comunicação com a API do Gemini deve permanecer protegida e não deve ser adicionada diretamente ao repositório público.

---

# 💻 Requisitos

Para executar o projeto localmente, é necessário possuir:

* **Node.js**
* **npm**
* **Git**

Recomenda-se utilizar uma versão atual e LTS do Node.js.

Para verificar as versões instaladas:

```bash
node --version
```

```bash
npm --version
```

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando em desenvolvimento

Após instalar as dependências, execute:

```bash
npm run dev
```

O Vite disponibilizará a aplicação localmente, normalmente em:

```text
http://localhost:5173
```

A porta pode variar caso outra aplicação esteja utilizando a porta padrão.

---

# 🏗️ Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

O processo de build gera os arquivos otimizados para publicação.

Para verificar a versão de produção localmente:

```bash
npm run preview
```

---

# 🚀 Deploy

O projeto utiliza a **Vercel** para publicação da aplicação.

O fluxo de deploy pode ser representado por:

```text
Git
 │
 ▼
Repositório
 │
 ▼
Vercel
 │
 ├── Build
 │
 ├── Deploy
 │
 └── Produção
       │
       ▼
clinicainnovar.com.br
```

A Vercel é responsável pela infraestrutura de hospedagem e pelo processo de disponibilização da aplicação em produção.

---

# 🔄 Fluxo de desenvolvimento

O fluxo de desenvolvimento utilizado no projeto segue, de forma geral:

```text
Desenvolvimento local
        │
        ▼
Alterações no código
        │
        ▼
Testes locais
        │
        ▼
Git / GitHub
        │
        ▼
Vercel
        │
        ▼
Build de produção
        │
        ▼
Site publicado
```

---

# 🎨 Identidade visual

A interface foi desenvolvida buscando transmitir uma identidade visual sofisticada, moderna e alinhada ao segmento de estética.

A composição visual utiliza principalmente:

* Tons claros;
* Verde;
* Dourado;
* Elementos neutros;
* Imagens de alta qualidade;
* Tipografia serifada para títulos;
* Tipografia moderna para textos;
* Espaçamentos amplos;
* Animações suaves.

A combinação de **Cormorant Garamond** e **Jost** contribui para diferenciar títulos e textos de interface.

---

# ✨ Animações e interações

O projeto utiliza **Framer Motion** para implementar animações e transições.

Entre os recursos utilizados estão:

* Entrada de elementos;
* Saída de elementos;
* Transições entre estados;
* Animações de cards;
* Interações de navegação;
* Abertura e fechamento de conteúdos;
* Transições da seção de tratamentos;
* Efeitos de interação na interface.

O objetivo das animações é complementar a experiência de navegação sem comprometer a usabilidade.

---

# 📱 Experiência mobile

A responsividade foi considerada durante o desenvolvimento dos componentes.

Em dispositivos menores, a aplicação adapta:

* Tamanho dos textos;
* Espaçamento;
* Cards;
* Navegação;
* Campos de pesquisa;
* Botões;
* Imagens;
* Seções;
* Áreas de interação.

A interface foi ajustada para evitar que componentes desenvolvidos originalmente para desktop prejudiquem a navegação em smartphones.

---

# 🧪 Validação

Antes da publicação, recomenda-se validar:

* Carregamento da página;
* Navegação entre seções;
* Links externos;
* WhatsApp;
* Instagram;
* Cards de tratamentos;
* Busca;
* Modais;
* Responsividade;
* Imagens;
* Favicon;
* Metadados;
* Build de produção;
* Integração com Gemini;
* Funcionamento das variáveis de ambiente.

---

# 🔒 Boas práticas

O projeto segue algumas práticas importantes para aplicações web:

* Não versionar chaves de API;
* Utilizar variáveis de ambiente para informações sensíveis;
* Manter dependências atualizadas;
* Separar componentes por responsabilidade;
* Utilizar TypeScript para maior segurança no desenvolvimento;
* Otimizar imagens;
* Manter o layout responsivo;
* Evitar código duplicado;
* Utilizar componentes reutilizáveis;
* Validar a aplicação antes de realizar deploy.

---

# 📦 Principais tecnologias

```text
React
TypeScript
Vite
CSS
Framer Motion
Google Fonts
Cloudinary
Vercel
Vercel Analytics
Google Gemini API
WhatsApp
Instagram
Registro.br
```

---

# 🧭 Visão geral da solução

A solução pode ser visualizada em quatro camadas principais:

```text
┌───────────────────────────────────────────────────────┐
│                    USUÁRIO FINAL                      │
│                                                       │
│ Desktop │ Tablet │ Smartphone                        │
└─────────────────────────┬─────────────────────────────┘
                          │
                          ▼
┌───────────────────────────────────────────────────────┐
│                     FRONTEND                          │
│                                                       │
│ React + TypeScript + Vite + CSS + Framer Motion       │
└──────────────┬──────────────────────┬─────────────────┘
               │                      │
               ▼                      ▼
┌────────────────────────┐   ┌─────────────────────────┐
│ SERVIÇOS DE APLICAÇÃO  │   │ SERVIÇOS DE MÍDIA       │
│                        │   │                         │
│ Gemini API              │   │ Cloudinary              │
│ WhatsApp                │   │ Google Fonts            │
│ Instagram               │   │                         │
└────────────────────────┘   └─────────────────────────┘
               │
               ▼
┌───────────────────────────────────────────────────────┐
│                    INFRAESTRUTURA                     │
│                                                       │
│ Vercel → Hospedagem / Deploy / Analytics              │
│ Registro.br → Domínio                                 │
└───────────────────────────────────────────────────────┘
```

---

# 🌐 Produção

### Site

**https://www.clinicainnovar.com.br/**

### Hospedagem

**Vercel**

### Domínio

**Registro.br**

### Armazenamento de imagens

**Cloudinary**

### Inteligência Artificial

**Google Gemini API**

### Analytics

**Vercel Analytics**

---

# 👨‍💻 Desenvolvimento

Projeto desenvolvido por **Wedley Silva Schmoeller**, com foco em desenvolvimento web, experiência de usuário, integração de serviços externos e construção de aplicações modernas utilizando React e TypeScript.

### Tecnologias principais utilizadas no desenvolvimento

```text
React
TypeScript
JavaScript
Vite
CSS
Framer Motion
Git
GitHub
```

---

# 📄 Licença e propriedade

Este projeto foi desenvolvido especificamente para a **Clínica Innovar**.

Os conteúdos institucionais, identidade visual, imagens, logotipo, informações comerciais e demais materiais pertencentes à clínica devem ser considerados propriedade de seus respectivos responsáveis.

As bibliotecas e serviços de terceiros utilizados no projeto permanecem sujeitos às suas respectivas licenças e termos de uso.

---

# 📌 Status do projeto

```text
🟢 Em produção
```

O projeto encontra-se publicado e acessível através do domínio oficial:

**https://www.clinicainnovar.com.br/**
