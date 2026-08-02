const style = `
  body {
    padding: 3em;
  }

  img {
    transition: transform .5s;
  }

  img:hover {
    transform: scale(1.5);
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = style;
document.head.appendChild(styleSheet);