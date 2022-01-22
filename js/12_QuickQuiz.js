let links = document.links;
let scripts = document.scripts;
let images = document.images;
let items = [links, scripts, images];
for (let i = 0; i < items.length; i++) {
    console.log('\n');
    for (let j = 0; j < items[i].length; j++) {
        console.log(items[i][j]);
    }
}