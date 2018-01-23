$(document).ready(() => {

    var obj = JSON.parse(document.getElementById("hideme").innerHTML);

    for(var i = 0; i < obj.elements.length; ++i) {
        var item = obj.elements[i];
        var name = item.name;
        var price = "$" + item.price.toString();
        if (item.price > 99)
            price = price.slice(0, -2) + "." + price.slice(-2);
        else
            price = price + ".00";
        var div = "<div class='cell'>" +
        "<div class='name'>" + name + 
        "</div><div class='price'>" + price +
        "</div></div>";
        $("#item_box").append(div);
    }

    $(".cell").click(function() {
        $(this).toggleClass('selected');
    })

    $('#save').click(function() {
        var ret = { 'elements':[] };
        for (var i = 1; i <= obj.elements.length; ++i) {
            if ($('.cell:nth-child(' + i + ')').hasClass('selected')) {
                ret.elements.push(obj.elements[i - 1]);
            }
        }
        if (ret.elements.length > 0) {
            $.post('./file.php', {variable: JSON.stringify(ret)});
            $('#item_box').children().remove();
            $('#item_box').width("45%");
            $('#save').remove();
            $('h1').html("The following items have been uploaded:");
            for (var i = 0; i < ret.elements.length; ++i) {
                $('#item_box').append("<div class='cell selected'>" + ret.elements[i].name + "</div>");
            }
        }
    })

    $("#hub").click(function() {
        $(this).toggleClass("surprise");
        $('body').toggleClass("black-back");
    })

})