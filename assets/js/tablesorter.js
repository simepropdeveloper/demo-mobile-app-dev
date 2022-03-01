$(document).ready(function(){

	  // NOTE: $.tablesorter.theme.bootstrap is ALREADY INCLUDED in the jquery.tablesorter.widgets.js
	  // file; it is included here to show how you can modify the default classes
	  $.tablesorter.themes.bootstrap = {
		// these classes are added to the table. To see other table classes available,
		// look here: http://getbootstrap.com/css/#tables
		table        : 'table',
		caption      : 'caption',
		// header class names
		header       : 'bootstrap-header', // give the header a gradient background (theme.bootstrap_2.css)
		sortNone     : '',
		sortAsc      : '',
		sortDesc     : '',
		active       : '', // applied when column is sorted
		hover        : '', // custom css required - a defined bootstrap style may not override other classes
		// icon class names
		icons        : '', // add "icon-white" to make them white; this icon class is added to the <i> in the header
		iconSortNone : 'fa fa-sort', // class name added to icon when column is not sorted
		iconSortAsc  : 'fa fa-sort-up', // class name added to icon when column has ascending sort
		iconSortDesc : 'fa fa-sort-down', // class name added to icon when column has descending sort
		filterRow    : '', // filter row class; use widgetOptions.filter_cssFilter for the input/select element
		footerRow    : '',
		footerCells  : '',
		even         : '', // even row zebra striping
		odd          : ''  // odd row zebra striping
	  };

	$(".tablesorter").on('click', '.ts-pagesize a', function(){
		var t = $(this).parents('.tablesorter');
		t.find('.ts-pagesize-lbl').text($(this).text());
		t.find('.pagesize').val($(this).text());
		t.find('.pagesize').trigger('change');
	});
	$(".tablesorter").each(function(pageTableCount){

		if(!$(this).hasClass('ts-nopager')){
			$(this).append($('.template > table > tfoot').clone());
			$(this).find('tfoot th').attr('colspan',$(this).find('thead th').length);
		}

		  var widgets = [ "uitheme", "filter", "zebra" ];
		  if($(this).hasClass('ts-nofilter')){
			widgets = [ "uitheme", "zebra" ];
		  }

	      // Check if pageTableCount was initialized, and add 1 to its value
	      pageTableCount !==null ? pageTableCount++ : 1;

	      // Get the table and add ID with counter
	      table = $(this);
	      table.attr("id","table-sorter-"+pageTableCount);

	      // Does the same with the pager
	      pager = table.find(".ts-pager");
	      pager.attr("id","table-sorter-pager-"+pageTableCount);
		  // call the tablesorter plugin and apply the uitheme widget
		  table.tablesorter({
			// this will apply the bootstrap theme if "uitheme" widget is included
			// the widgetOptions.uitheme is no longer required to be set
			theme : "bootstrap",

			widthFixed: true,

			headerTemplate : '{content} {icon}', // new in v2.7. Needed to add the bootstrap icon!

			// widget code contained in the jquery.tablesorter.widgets.js file
			// use the zebra stripe widget if you plan on hiding any rows (filter widget)
			widgets : widgets,

			widgetOptions : {
			  // using the default zebra striping class name, so it actually isn't included in the theme variable above
			  // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
			  zebra : ["even", "odd"],

			  // reset filters button
			  filter_reset : ".reset",

			  // extra css class name (string or array) added to the filter element (input or select)
			  filter_cssFilter: "form-control",

			  // set the uitheme widget to use the bootstrap theme class names
			  // this is no longer required, if theme is set
			  // ,uitheme : "bootstrap"
			}
		  })
		  .tablesorterPager({

			// target the pager markup - see the HTML block below
			container: "#table-sorter-pager-"+pageTableCount,

			// target the pager page select dropdown - choose a page
			cssGoto  : ".pagenum",

			// remove rows from the table to speed up the sort of large tables.
			// setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
			removeRows: false,

			// output string - default is '{page}/{totalPages}';
			// possible variables: {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
			output: '{startRow} - {endRow} / {filteredRows} ({totalRows})',

			size: 100,

			fixedHeight: false
		  });

    });

	$(".tablesorter").each(function(pageTableCount){
		$(this).find('.ts-pagesize-lbl').text($(this).find('.pagesize').val());
	});
});
