const locales = ['en', 'de', 'es', 'fr', 'it'];
import {flattenMessages} from '../lang/flattenMessages'

const messages = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]:flattenMessages(require(`../lang/${lang}/${lang}.json`)), // whatever the relative path to your messages json is
}), {});


// to test
const messagesFlat = messages;
const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: 'fr',
  locales,
  messages: messagesFlat,
  formats,
};