import { html } from 'lit';
import '../src/project-2-micro-frontends.js';

export default {
  title: 'Project2MicroFrontends',
  component: 'project-2-micro-frontends',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-2-micro-frontends
      style="--project-2-micro-frontends-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-2-micro-frontends>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
