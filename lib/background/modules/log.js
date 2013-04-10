
// css classes 
var c = {
    event: 'font-weight: bold;',

    cont: 'color: #40a033;',

    tabs: 'color: #3632ad;',
    tab: 'color: #840628;',
    info: 'color: #ffbf00;',
    id: 'color: #107a0b;',
    add: 'color: #107a0b;',
    remove: 'color: #bc0514;',

    navi: 'color: #428fce;'
};
// 
var disabled = false;

function log () {
    if (disabled) return;
    var a = arguments;

    switch (a[0]) {

        // content script

        case 'contentScript.onLoaded':
            console.log('%ccontentScript.onLoaded: %csender%O',
                c.event+c.cont, c.tab, a[1]);
            break;

        // tabs

        case 'tabs.onCreated':
            console.log('%ctabs.onCreated: %ctab%O',
                c.event+c.tabs, c.tab, a[1]);
            break;
        case 'tabs.onUpdated':
            console.log('%ctabs.onUpdated: %cid %d %cinfo%O%ctab%O',
                c.event+c.tabs, c.id, a[1], c.info, a[2], c.tab, a[3]);
            break;
        case 'tabs.onMoved':
            console.log('%ctabs.onMoved: %cid %d %cinfo',
                c.event+c.tabs, c.id, a[1], c.info, a[2]);
            break;
        case 'tabs.onActivated':
            console.log('%ctabs.onActivated: %cinfo%O',
                c.event+c.tabs, c.info, a[1]);
            break;
        case 'tabs.onHighlighted':
            console.log('%ctabs.onHighlighted: %cinfo%O',
                c.event+c.tabs, c.info, a[1]);
            break;
        case 'tabs.onDetached':
            console.log('%ctabs.onDetached: %cid %d %cinfo',
                c.event+c.tabs, c.id, a[1], c.info, a[2]);
            break;
        case 'tabs.onAttached':
            console.log('%ctabs.onAttached: %cid %d %cinfo',
                c.event+c.tabs, c.id, a[1], c.info, a[2]);
            break;
        case 'tabs.onRemoved':
            console.log('%ctabs.onRemoved: %cid %d %cinfo%O',
                c.event+c.tabs, c.remove, a[1], c.info, a[2]);
            break;
        case 'tabs.onReplaced':
            console.log('%ctabs.onReplaced: %cadded %d %cremoved %d',
                c.event+c.tabs, c.add, a[1], c.remove, a[2]);
            break;
        
        // webNavigation

        case 'webNavigation.onBeforeNavigate':
            console.log('%cwebNavigation.onBeforeNavigate: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onCommitted':
            console.log('%cwebNavigation.onCommitted: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onDOMContentLoaded':
            console.log('%cwebNavigation.onDOMContentLoaded: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onCompleted':
            console.log('%cwebNavigation.onCompleted: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onErrorOccurred':
            console.log('%cwebNavigation.onErrorOccurred: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onCreatedNavigationTarget':
            console.log('%cwebNavigation.onCreatedNavigationTarget: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onReferenceFragmentUpdated':
            console.log('%cwebNavigation.onReferenceFragmentUpdated: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onTabReplaced':
            console.log('%cwebNavigation.onTabReplaced: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
        case 'webNavigation.onHistoryStateUpdated':
            console.log('%cwebNavigation.onHistoryStateUpdated: %cdetails%O',
                c.event+c.navi, c.info, a[1]);
            break;
    }
    // console.log('%c---------------------------------', sep);
}
