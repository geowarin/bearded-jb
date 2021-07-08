import {compile} from "handlebars";
import {readFileSync, writeFileSync} from "fs";
import {arc} from "../bearded-theme/src/variations/arc";

function makeTemplate(templateName: string, outFile: string) {
  const tpl = compile(readFileSync(templateName).toString());
  writeFileSync(`../src/main/resources/${outFile}`, tpl(arc));
}

makeTemplate("oneDark.template.theme.json", "bearded-arc.theme.json");
makeTemplate("one-dark.template.xml", "bearded-arc.xml");