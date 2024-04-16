chrome.action.onClicked.addListener((tab) => {
    if(typeof fontChanged === 'undefined'){
        fontChanged = false;
    }
    if (fontChanged == false) {
        console.log(fontChanged);
        if (!tab.url.includes('chrome://') || !tab.url.includes('opera://')) {
            chrome.scripting.insertCSS({
                target: {
                    tabId: tab.id
                },
                files: ['/main/inject.css']
            })
        }
        fontChanged = true;
    } else {
        if (!tab.url.includes('chrome://') || !tab.url.includes('opera://')) {
            console.log(fontChanged);
            chrome.scripting.removeCSS({
                target: {
                    tabId: tab.id
                },
                files: ['/main/inject.css']
            })
        }
        fontChanged = false;
    }

});
