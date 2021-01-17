define([
    'jQuery',
    'Underscore',
    'views/topBarViewBase',
    'text!templates/dashboards/TopBarTemplate.html',
    'constants'
], function ($, _, TopBarBase, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = TopBarBase.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.DASHBOARDS,
        contentHeader: '自定义报表',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
