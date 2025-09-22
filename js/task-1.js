const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const itemName = category.querySelector('h2').textContent;
    console.log(`Category: ${itemName}`);
    
    const numberEl = category.querySelectorAll('ul > li');
    console.log(`Elements: ${numberEl.length}`);
});