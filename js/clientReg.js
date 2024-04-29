$(document).ready(function () {

    //Default Action
    $(".clientRegister__content-block").hide(); //Hide all content
    $(".clientRegister__tabs li:first").addClass("active").show(); //Activate first tab
    $(".clientRegister__content-block:first").show(); //Show first tab content

    //On Click Event
    $(".clientRegister__tabs li").click(function () {
        $(".clientRegister__tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".clientRegister__content-block").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});

// Initialize DataTable
let dataTable = new DataTable('#clientRegister__table', {
    scrollX: true,
    fixedColumns: {
        start: 3
    }
});

// Add event listener for Year select
$('#year').on('change', function () {
    let yearValue = $(this).val();
    dataTable.column(1).search(yearValue).draw();
});

// Add event listener for Month select
$('#month').on('change', function () {
    let monthValue = $(this).val();
    dataTable.column(4).search(monthValue).draw();
});

// Add event listener for tableSubject select
$('#tableSubject').on('change', function () {
    let tableSubjectValue = $(this).val();
    dataTable.column(4).search(tableSubjectValue).draw();
});

// Add event listener for tableGroup select
$('#tableGroup').on('change', function () {
    let tableGroupValue = $(this).val();
    dataTable.column(5).search(tableGroupValue).draw();
});


// TEXT CLICK FULL WIDTH

var tableTdList = document.querySelectorAll('.clientSchedule');

var tableTextList = document.querySelectorAll('.clientSchedule-text');

tableTdList.forEach(function (tableTd, index) {
    tableTd.addEventListener('click', function () {
        tableTextList[index].classList.toggle('active');
        console.log(tableTextList[index]);
    });
});