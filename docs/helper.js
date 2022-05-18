module.exports = {

    foodData: {
        data: [{
            "_id": "925ce72235e5501fe2796a38",
            "name": "Jollof rice",
            "tribe": "Across Nigeria",
            "image": "assets/pics-33.0000-pics.jpg",
            "text": "Lots of delicacies",
            "category": "rice"
        },
        {
            "_id": "724ce73235e5501fe1796a38",
            "name": "Oha soup",
            "tribe": "Igbo",
            "image": "assets/pics-33.0000-pics.jpg",
            "text": "Lots of delicacies",
            "category": "soups"
        }
        ]
    },
    foodDataOne:
    {
        data: {
            "_id": "925ce72235e5501fe2796a38",
            "name": "Jollof rice",
            "tribe": "Across Nigeria",
            "image": "assets/pics-33.0000-pics.jpg",
            "text": "Lots of delicacies",
            "category": "rice"
        },
    }
    ,
    addAdmin: {

        userId: {
            type: "string",
            description: "user id",
            example: "63403282c8273738d888"
        },
        token: {
            type: "string",
            description: "Json web token",
        }
    },

    addFoodProp: {
        name: {
            type: "string",
            description: "name of dish",
            example: "Efere Atama "
        },
        tribe: {
            type: "string",
            description: "tribe of origin",
            example: "Ibibio"
        },
        category:
        {
            type: "string",
            description: "category of dish ",
            example: "soups"
        },

        text: {
            type: "string",
            description: "Details, ingredients and description of methods of preparation e.t.c",
            example: "Eaten by the ibibio's , ingredients include: abak aran (unprocessed palm oil), pepper, etc",
        },
        image: {
            type: "file",
            description: "Image should be a file of png, jpg or jpeg",
            example: "atama.jpeg"
        },
    }

}