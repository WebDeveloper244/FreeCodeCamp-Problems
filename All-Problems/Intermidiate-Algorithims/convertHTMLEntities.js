/*  
convert HTML Entites
*/

function convertHTML(str) {
    return str
    .replace( '&','&amp;' )
    .replace( "<", "&lt;" )
    .replace( ">", "&gt;" )
    .replace( '"', "&quot;" )
    .replace( "'", "&apos;" )
  };
  
  let result = convertHTML("Dolce & Gabbana");
  result;