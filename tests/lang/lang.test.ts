import fs from 'fs';
import path from 'path';
import _ from 'lodash';

// Lib custom
 import { flattenMessages } from '../../lang/flattenMessages';

// Chemins des fichiers de langue
const languageFiles = [
  '../../lang/en/en.json',
    '../../lang/fr/fr.json',
    '../../lang/it/it.json',
    '../../lang/es/es.json',
    '../../lang/de/de.json',
  // ...
];

// Chemin du fichier de référence
const referenceFile = '../../lang/schema.json';

describe('Les fichiers de langue', () => {
  // Lire le fichier de référence
  const referenceData = JSON.parse(fs.readFileSync(path.resolve(__dirname, referenceFile), 'utf-8'));
  
  for (const filePath of languageFiles) {
    test(`The file ${path.basename(filePath)} has the same structure as the reference file.`, () => {
      // Lire le fichier de langue
      const languageData = JSON.parse(fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8'));

      // Obtenir les clés du fichier de langue et du fichier de référence
      const languageKeys = _.keysIn(flattenMessages(languageData)).sort();
      const referenceKeys = _.keysIn(flattenMessages(referenceData)).sort();
      // Vérifier que les clés correspondent
      expect(languageKeys).toEqual(referenceKeys);
    });
  }
});
