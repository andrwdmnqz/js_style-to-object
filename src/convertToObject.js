'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rows = sourceString.split(';');
  const propertiesObject = {};

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].trim()) {
      const splittedRow = rows[i].split(':');

      propertiesObject[splittedRow[0].trim()] = splittedRow[1].trim();
    }
  }

  return propertiesObject;
}

module.exports = convertToObject;
