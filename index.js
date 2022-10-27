import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
// const langs = require('langs');
const langCode = franc(input);
if (langCode === 'und') {
  console.log('sorry no understand'.red);
} else {
  const language = langs.where('3', langCode);
  console.log(language.name.rainbow);
}
