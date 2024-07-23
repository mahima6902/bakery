sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'bakeryapp',
            componentId: 'categoriesObjectPage',
            contextPath: '/categories'
        },
        CustomPageDefinitions
    );
});