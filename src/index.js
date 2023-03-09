import { html, render } from './preact.js';
import { getPosition, getSomethingElse } from './mapper.js';

const App = getSomethingElse(async () => {
  const data = await getPosition(0, 0);

  if (data.city) {
    return html`
      <div>
        refreshed: hi
        <span> <//>
        <button onclick=${() => {
          location.value = {...location.value};
        }}>refresh now<//>
      <//>
    `;
  }

  return html`<div>Working on it...</div>`;
});

export default () => {
  render(html`<${App} />`, document.querySelector('#root'));
  return () => { };
};