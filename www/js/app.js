(function(){
    var app = angular.module('store',['store-products']);
    app.controller("ReviewController",function(){
        this.review={};
        this.addReview = function(product){
            product.reviews.push(this.review);
        };
    });

    app.controller('StoreController',['$http', function ($http) {
        var store = this;
        store.products=[];
        $http.get('products.json').success(function(data){
            //store.product.push(data);// = data;
            StoreController.products.push(data);

            console.log(JSON.stringify(data));
        });;
    }]);

    var gems=[{
        name: 'Dodecahedron',
        price:5,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam sed ipsum ornare ullamcorper ' +
        'id quis diam. Ut nec purus non nibh vehicula ultrices. Proin cursus imperdiet metus, a congue elit tempor sit amet.' +
        ' Donec luctus sem dolor, at pretium metus ultricies vel. Phasellus quis sapien in mauris dictum porttitor ut tincidunt erat. Aenean dapibus semper null',
        images:[
            'gem-01.gif',
            'gem-02.gif',
            'gem-03.gif'
        ],
        reviews:[
            {
                stars: 5,
                body:"body ",
                author:"Sasha"
            },
            {
                stars: 1,
                body:"body 2",
                author:"Valera"
            }
        ],
        canPurchase: true,
        soldOut: false
    },
        {
            name: 'Pentagonal Gem',
            price:2.95,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam sed ipsum ornare ullamcorper ' +
            'id quis diam. Ut nec purus non nibh vehicula ultrices. Proin cursus imperdiet metus, a congue elit tempor sit amet.' +
            ' Donec luctus sem dolor, at pretium metus ultricies vel. Phasellus quis sapien in mauris dictum porttitor ut tincidunt erat. Aenean dapibus semper null',
            images:[
                'gem-04.gif',
                'gem-05.gif',
                'gem-06.gif'
            ],
            reviews:[
                {
                    stars: 5,
                    body:"body ",
                    author:"Sasha"
                },
                {
                    stars: 1,
                    body:"body 2",
                    author:"Valera"
                }
            ],
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Dodecahedron3',
            price:3.96,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam sed ipsum ornare ullamcorper id quis diam. Ut nec purus non nibh vehicula ultrices. Proin cursus imperdiet metus, a congue elit tempor sit amet. Donec luctus sem dolor, at pretium metus ultricies vel. Phasellus quis sapien in mauris dictum porttitor ut tincidunt erat. Aenean dapibus semper null',
            images:[
                'gem-07.gif',
                'gem-08.gif',
                'gem-09.gif'
            ],
            reviews:[
                {
                    stars: 5,
                    body:"body ",
                    author:"Sasha"
                },
                {
                    stars: 1,
                    body:"body 2",
                    author:"Valera"
                }
            ],
            canPurchase: true,
            soldOut: true
        }];
})();
