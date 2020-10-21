const loadHome = () => {
    let content = document.getElementById('content');

    const headLoad = () => {
        let head = document.createElement('h1');

        head.innerHTML = 'My restaurant';
        return head;
    };

    const imgLoad = () => {
        let img = document.createElement('img');

        img.src = '../images/restaurant.jpg';
        img.alt = 'restaurant interior';
        return img;
    };

    const paragraphLoad = () => {
        let paragraph = document.createElement('p');

        paragraph.innerHTML = 'A quality and relaxing rural country pub, run by award winning owners, in the beautiful Berkshire village of Peasemore just a short drive from the A34 and junctions 13 and 14 of the M4. The building and decor are charming and rustic, with elegant modern touches. Relax by the cozy log burner perfect for winter evenings or enjoy outdoor seating overlooking open country fields or in a pretty courtyard filled with flowers in the summer months. A daily menu, all freshly prepared in the pub kitchen, includes fresh fish, pies, steaks and chef\'s daily specials with main course prices ranging from £11.50 - £19.50. As all dishes are prepared in the pub kitchen, they are able to cater for most dietary needs, with most sauces, soups and gravy all created gluten free. The Fox also offers gluten free bread and gluten free Yorkshire puddings on a Sunday.';
        return paragraph;
    };

    content.appendChild(headLoad());
    content.appendChild(imgLoad());
    content.appendChild(paragraphLoad());
};

export default loadHome;