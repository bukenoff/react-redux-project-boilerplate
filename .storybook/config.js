import { configure } from '@storybook/react';

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;
  req = require.context('../src', true, /story\.tsx$/);
  importAll(req);
}

configure(loadStories, module);
