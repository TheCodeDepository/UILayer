jQuery(window).load(function () {

    var $table = $('.myTable');
    var $bodyCells = $table.find('tbody').find('tr:first').children();
    var colWidth;

    // Get the tbody columns width array
    colWidth = $bodyCells.map(
        function () {
            return $(this).width();
        }).get();

    // Set the width of thead columns
    $table.find('thead tr').children().each(function (i, v) {
        $(v).width(colWidth[i]);
    });

/*      for (var i = 0; i < colWidth.length; i++) {
                
        var style = `<style type="text/css">th:nth-child(${i+1}), td:nth-child(${i+1}){width:${colWidth[i].toString()}px !important;}</style>`;
        $('head').append(style);            
        console.log(style);
    }  */
});

