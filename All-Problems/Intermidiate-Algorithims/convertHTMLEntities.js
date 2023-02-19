/*  
convert HTML Entites
*/

function convertHTML(str) {
    return str
    .replace( /&/g,'&amp;' )
    .replace( /</g, "&lt;" )
    .replace( />/g, "&gt;" )
    .replace( /"/g, "&quot;" )
    .replace( /'/g, "&apos;" )
  };
  
  let result = convertHTML("Dolce & Gabbana");
  result;