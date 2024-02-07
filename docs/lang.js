function changeLanguage() {
    var links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        if (links[i].href.includes('/en/')) {
            links[i].href = links[i].href.replace('/en/', '/de/');
        } else {
            links[i].href = links[i].href.replace('/de/', '/en/');
        }
    }
    var currentlanguage = getComputedStyle(document.body).getPropertyValue("--language")
    if (currentlanguage == 'data-en') {
        document.documentElement.style.setProperty('--language', 'data-de')
    } else {
        document.documentElement.style.setProperty('--language', 'data-en')
    }
}