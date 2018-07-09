$(function () {



    var product = {

        id: ko.observable(1001),
        itemNumber: ko.observable("T314CE"),
        model: ko.observable("Taylor 314ce"),
        salesPrice: ko.observable(1199.95)


    };

    ko.applyBindings(product);



}
)