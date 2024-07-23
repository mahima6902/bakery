sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bakeryapp/test/integration/FirstJourney',
		'bakeryapp/test/integration/pages/categoriesList',
		'bakeryapp/test/integration/pages/categoriesObjectPage',
		'bakeryapp/test/integration/pages/productsObjectPage'
    ],
    function(JourneyRunner, opaJourney, categoriesList, categoriesObjectPage, productsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bakeryapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecategoriesList: categoriesList,
					onThecategoriesObjectPage: categoriesObjectPage,
					onTheproductsObjectPage: productsObjectPage
                }
            },
            opaJourney.run
        );
    }
);