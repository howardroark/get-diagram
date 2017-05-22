var input = $('textarea#markdown').val();
$('#output').html(marked(input));

$('button#render').click(function (e) {
    var input = $('textarea#markdown').val();
    $('#output').html(marked(input));
    e.preventDefault();
    return false;
});
