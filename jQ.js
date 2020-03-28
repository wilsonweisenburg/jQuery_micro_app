$(document).ready(() => {
    $("#convert_button").click(() => {
        let unit_value = $("#input").val();
        convert(unit_value);
    });

    $("#clear_unit").click(() => {
        clear()
    });
});

function lb_kg(x) {
    var fnum = x / 2.2046226218;
    return fnum;
}

function lb_oz(x) {
    var fnum = x * 16;
    return fnum;
}

function oz_kg(x) {
    var fnum = lb_kg(x) / 16;
    return fnum;
}

function oz_lb(x) {
    var fnum = x / 16;
    return fnum;
}

function kg_lb(x) {
    var fnum = x * 2.2046226218;
    return fnum;
}

function kg_oz(x) {
    var fnum = kg_lb(x) * 16;
    return fnum;
}

function convert(unit_value) {
    var $i = $("#unit-select1").val;
    var $o = $("#unit-select2").val;

    if ($i == "lb" && $o == "kg") {
        var c = lb_kg(x);
    } else if ($i == "lb" && $o == "oz") {
        var c = lb_oz(x);
    } else if ($i == "oz" && $o == "kg") {
        var c = oz_kg(x);
    } else if ($i == "oz" && $o == "lb") {
        var c = oz_lb(x);
    } else if ($i == "kg" && $o == "lb") {
        var c = kg_lb(x);
    } else if ($i == "kg" && $o == "oz") {
        var c = kg_oz(x);
    } else {
        var c = x;
    }

    let $output = $("<p></p>");
    $output.text(c);
    $("#output_div").append($output)

}

function clear() {

}
