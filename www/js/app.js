(function(){
    var app = angular.module('store',[]);
    app.controller("ReviewController",function(){
        this.review={};
        this.addReview = function(product){
            product.reviews.push(this.review);
        };
    });
    app.controller("PanelController",function(){
        console.log(" PanelController init")
        this.tab=1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return  this.tab === checkTab;
        }

    });
    app.controller('StoreController',function(){
        this.products=gems;
    });

    var gems=[{
        name: 'Dodecahedron',
        price:5,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at quam sed ipsum ornare ullamcorper ' +
        'id quis diam. Ut nec purus non nibh vehicula ultrices. Proin cursus imperdiet metus, a congue elit tempor sit amet.' +
        ' Donec luctus sem dolor, at pretium metus ultricies vel. Phasellus quis sapien in mauris dictum porttitor ut tincidunt erat. Aenean dapibus semper null',
        images:[
            {
                full:'gem-01.gif'
            },
            {
                full:'gem-02.gif'
            },
            {
                full:'gem-03.gif'
            }
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
                {
                    full:'gem-04.gif'
                },
                {
                    full:'gem-05.gif'
                },
                {
                    full:'gem-06.gif'
                }
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
                {
                    full:'gem-07.gif'
                },
                {
                    full:'gem-08.gif'
                },
                {
                    full:'gem-09.gif'
                }
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
