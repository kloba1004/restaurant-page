const tabLoad = () => {
    let body = document.querySelector('body');

    const createHomeTab = () => {
        let home = document.createElement('div');

        home.innerHTML = 'Home';
        home.className = 'tab';
        return home;
    };

    const createContactTab = () => {
        let contact = document.createElement('div');

        contact.innerHTML = 'Contact';
        contact.className = 'tab';
        return contact;
    };

    const createMenuTab = () => {
        let menu = document.createElement('div');

        menu.innerHTML = 'Menu';
        menu.className = 'tab';
        return menu;
    };

    const createTabsContainer = () => {
        let container = document.createElement('div');

        container.className = 'container';

        container.appendChild(createHomeTab());
        container.appendChild(createMenuTab());
        container.appendChild(createContactTab());
        return container;
    };

    body.appendChild(createTabsContainer());
    
};

export default tabLoad;