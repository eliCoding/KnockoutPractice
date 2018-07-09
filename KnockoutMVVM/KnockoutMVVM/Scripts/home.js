   $(function () {
            var photoPath = "/images/";

            // function helper 
            my.formatCurrency = function (value) {
                return "$" + value.toFixed(2);
            };

            // for creating Product Models
            my.Product = function () {
                this.id = ko.observable();
                this.salePrice = ko.observable();
                this.photo = ko.observable();
                this.shortDescription = ko.observable();
                this.photoUrl = ko.computed(function () {
                    return photoPath + this.photo();
                }, this);
            };

      
            // The ViewModel
            my.vm = {
                metadata: {
                    pageTitle: "Knockout: Computed - Read/Write Converter",
                    personal: {
                        link: "",
                        text: ""
                    }
                },
                product: ko.observable(
                    new my.Product()
                        .shortDescription("Taylor Koa Series K66ce")
                        .salePrice(4199)
                        .photo("Taylor Koa Series K66ce Grand Symphony 12-String Cutaway Acoustic Electric Guitar.png")
                    ),
                quantity: ko.observable(4)
            };

            ///////////////////////////////////////////////////
            // read/write computed
            ///////////////////////////////////////////////////
            my.vm.extendedPrice = ko.computed({
                read: function () {
                    var extPrice = this.product() ?
                       this.product().salePrice() * parseInt("0" + this.quantity(), 10) : 0;
                    return '$' + extPrice.toFixed(2);
                },
                write: function (value) {
                    value = parseFloat(value.replace(/[^\.\d]/g, ""));
                    value = isNaN(value) ? 0 : value;
                    var unitPrice = value / this.quantity();
                    this.product().salePrice(unitPrice);
                },
                owner: my.vm
            });

            ko.applyBindings(my.vm);
        });