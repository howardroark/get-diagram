var input = $('textarea#markdown').val();
$('#output').html(marked(input));

$('#input textarea').on('change keyup paste', function () {
    var input = $('textarea#markdown').val();
    $('#output').html(marked(input));
});
