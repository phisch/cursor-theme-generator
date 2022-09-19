import './styles.scss'

import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import { cursorThemeSchema } from './schema/cursor-theme'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    return new editorWorker()
  }
}

//import example from "../example/animations.json"
//var code = JSON.stringify(example, null, 2);
var model = monaco.editor.createModel("", 'json');

monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
  validate: true,
  schemas: [
    {
      fileMatch: ["*"],
      schema: cursorThemeSchema,
      uri: "https://phisch.github.io/cursor-theme-generator/schemas/cursor-theme.json",
    },
  ]
});

const editor = document.querySelector("#schema-validator .editor");
if (editor != null) {
  monaco.editor.create(editor as HTMLElement, {
    language: 'json',
    model: model,
    theme: "vs-dark",
    automaticLayout: true,
    tabSize: 2
  });
}
