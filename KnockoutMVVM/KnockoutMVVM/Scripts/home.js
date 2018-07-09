$(function () {

    //var viewModel = {

    //    firstName: ko.observable("john")
    //};
    //ko.applyBindings(viewModel);
    ////

    var product = {

        id: ko.observable(1001),
        itemNumber: ko.observable("T314CE"),
        model: ko.observable("Taylor 314ce"),
        salesPrice: ko.observable(1199.95)


    };

    //$("#guitaritemNumber").text(product.itemNumber);
    //$("#guitarModle").text(product.model);
    //$("#guitarSalesPrice").text(product.salePrice);

    ko.applyBindings(product);



}
)