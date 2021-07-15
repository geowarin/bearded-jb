import {compile} from "handlebars";
import {readFileSync, writeFileSync} from "fs";
import {Theme} from "../bearded-theme/src/typing";
import {arc, arcBlueBerry, arcEggplant, arcEolstorm} from "../bearded-theme/src/variations/arc";


function removeColorHashes<T>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
        if (typeof val === 'string') {
          return [key, val.replace("#", "")]
        } else if (typeof val === 'object') {
          return [key, removeColorHashes(val)];
        }
        return [key, val];
      }
    )
  ) as T
}

type TemplateData = Theme & {themeName: string}

function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

function makeTemplate(templateName: string, outFile: string, templateData: TemplateData) {
  const tpl = compile(readFileSync(templateName).toString());
  const helpers = {
    "fullName": (name) => `Bearded ${capitalize(name)}`
  }
  writeFileSync(`../src/main/resources/${outFile}`, tpl(templateData, {helpers}));
}

function makeTheme(themeName: string, theme: Theme) {
  const templateData = {...theme, themeName};
  makeTemplate("oneDark.template.theme.json", `${themeName}.theme.json`, templateData);
  makeTemplate("one-dark.template.xml", `${themeName}.xml`, removeColorHashes(templateData));
}

makeTheme("arc", arc);
makeTheme("arc-eolstorm", arcEolstorm);
makeTheme("arc-blueberry", arcBlueBerry);
makeTheme("arc-eggplant", arcEggplant);