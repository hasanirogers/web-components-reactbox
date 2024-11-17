import { generateJsxTypes } from "custom-element-jsx-integration";
import { readFileSync } from 'fs';

const manifest = JSON.parse(readFileSync(new URL('./node_modules/kemet-ui/custom-elements.json', import.meta.url), 'utf8'));

const options = {
    defaultExport: true,
    componentTypePath: (name, tag) => {
       console.log(name);
       return `./node_modules/kemet-ui/dist/components/${tag}/${tag}.d.ts`; // what is this relative to? 
    }
};

generateJsxTypes(manifest, options);