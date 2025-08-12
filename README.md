# Site Institucional - Conselho Tutelar e Bombeiros Voluntários de Bom Princípio

Este repositório contém o código-fonte completo do site institucional desenvolvido como parte de um projeto de extensão, em parceria com o Conselho Tutelar e o Corpo de Bombeiros Voluntários de Bom Princípio, RS. O objetivo do site é servir como um portal de informações central para a comunidade, facilitando o acesso a canais de denúncia e promovendo a conscientização sobre a proteção de crianças e adolescentes.

![Demonstração do Site](assets/images/demontracao-site.gif)

---

## Funcionalidades Principais

* **Design Responsivo:** Layout totalmente adaptável para desktops, tablets e celulares.
* **Componentes Reutilizáveis:** Cabeçalho e rodapé carregados dinamicamente com JavaScript (`fetch API`), garantindo fácil manutenção.
* **Navegação Avançada:**
    * **Mega Menu** completo no desktop para uma organização clara dos links.
    * **Menu Hambúrguer** funcional em telas menores para uma experiência mobile nativa.
* **Interatividade com o Usuário:**
    * Botão "Voltar ao Topo" que aparece durante a rolagem.
    * FAQ interativo com efeito "acordeão" usando tags semânticas.
    * Botões de ação fixos na lateral (`Denunciar` e `WhatsApp`) com efeito de expansão.

---

## Tecnologias Utilizadas

O site foi construído do zero com foco em tecnologias web modernas e boas práticas.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

* **Font Awesome:** Para a biblioteca de ícones.
* **Google Fonts:** Para a tipografia (`Heebo`).

---

## Roadmap do Projeto

* ✅ **Estrutura e Conteúdo:** Todas as páginas (`Início`, `Como Denunciar`, `Papel dos Bombeiros`) estão estruturadas com HTML semântico.
* ✅ **Estilização Desktop:** O design de todas as páginas para telas grandes está 100% completo.
* ✅ **Responsividade Completa:** O layout se adapta perfeitamente a desktops, tablets e celulares.
* ✅ **Interatividade com JavaScript:** Menu hambúrguer, botão "Voltar ao Topo" e carregamento de componentes estão funcionais.
* 🔗 **Deploy na Vercel:** https://conselho-tutelar-bom-principio.vercel.app/.

---

## 📂 Estrutura do Projeto

O CSS foi arquitetado de forma modular para facilitar a manutenção e a escalabilidade.

```
/
|-- index.html
|-- como-denunciar.html
|-- papel-dos-bombeiros.html
|-- _partials/
|   |-- _header.html
|   |-- _footer.html
|-- assets/
|   |-- css/
|   |   |-- main.css
|   |   |-- responsive.css
|   |   |-- base/ (_variables.css, _base.css)
|   |   |-- layout/ (_header.css, _footer.css, _page.css)
|   |   |-- pages/ (_home.css, etc.)
|   |   |-- components/ (_buttons.css, etc.)
|   |-- js/ (main.js)
|   |-- images/
|   |-- svg/
```

---

## Como Executar o Projeto Localmente

1.  Clone o repositório para a sua máquina local.
2.  Para uma melhor experiência (especialmente com o carregamento dos componentes via `fetch`), é recomendado usar um servidor local. A forma mais fácil é com a extensão **Live Server** no VS Code.
3.  Com a extensão instalada, clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
