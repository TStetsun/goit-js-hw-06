const categoriesRef = document.querySelector('#categories');
const countCategories = categoriesRef.childElementCount;
console.log(`Number of categories: ${countCategories}`);

[...categoriesRef.children].forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElCount = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElCount}`);
})