function clickMenuItem(appName, menuPath) {
    const systemEvents = new Application('System Events');
    const process = systemEvents.processes.byName(appName);
    const [menuName, ...menuItemNames] = menuPath.split('>').map(s => s.trim());
    let menuItem = process.menuBars[0].menuBarItems.byName(menuName);
    for (const name of menuItemNames) {
        menuItem = menuItem.menus[0].menuItems.byName(name);
    }
    menuItem.click();
}
