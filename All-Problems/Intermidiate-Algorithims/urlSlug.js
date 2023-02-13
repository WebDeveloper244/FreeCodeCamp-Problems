/*  
Apply functional progarmming to convert string to url slugs
*/

// Only change code below this line
function urlSlug(title) {

    return title.toLowerCase().split(' ').filter((removeSpace)=> removeSpace !="").join('-')
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));