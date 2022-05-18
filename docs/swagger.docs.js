const { foodData, foodDataOne, addFoodProp, addAdmin } = require("./helper");

module.exports = {

    signupDoc: {
        "/auth": {
            post: {

                tags: ["authentication"],
                description: "Signup as admin",
                requestBody: {

                    content: {
                        "application/json": {

                            schema: {

                                type: "object",
                                properties: addAdmin,
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Created"
                    },
                    400: {
                        description: "admin already exists"
                    },
                    500: {
                        description: "server error"
                    }
                }
            }
        },
        "/auth/login": {
            post: {

                tags: ["authentication"],
                description: "Login as admin",
                requestBody: {

                    content: {
                        "application/json": {

                            schema: {

                                type: "object",
                                properties: addAdmin,
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Welocme"
                    },
                    400: {
                        description: "admin not found"
                    },
                    500: {
                        description: "server error"
                    }
                }
            }
        }
    },

    getDishesDoc: {

        "/foods": {
            get: {
                tags: ["foods"],
                description: "Get dishes",
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: foodData,
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["foods"],
                description: "Add a new dish",
                requestBody: {

                    content: {
                        "multipart/form-data": {

                            schema: {

                                type: "object",
                                properties: addFoodProp,
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Created"
                    }
                }
            }
        },
        "/foods/single": {

            get: {
                tags: ["foods"],
                summary: "get dish by query param",
                description: "Get a dish by its id",
                parameters: [
                    {
                        name: "id",
                        in: "query",
                        description: "dish id",
                        type: "string",
                        example: "6263ae981fc737c2e546d7b5",
                    }
                ],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "multipart/form-data": {
                                schema: {
                                    type: "object",
                                    example: foodDataOne,
                                }
                            }
                        }
                    },
                    400: {
                        description: "not OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "string",
                                    example: "couldn't find dish"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/foods/category": {

            get: {
                tags: ["foods"],
                summary: "get dish by query param",
                description: "Get a dish by its category",
                parameters: [
                    {
                        name: "category",
                        in: "query",
                        description: "dish category",
                        type: "string",
                        example: "soups",
                    }
                ],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "multipart/form-data": {
                                schema: {
                                    type: "object",
                                    example: foodDataOne,
                                }
                            }
                        }
                    },
                    500: {
                        description: "Server error"
                    }
                }
            }
        },
        "/foods/del_food": {

            delete: {
                tags: ["foods"],
                summary: "delter dish by query param",
                description: "Delete a dish by its id",
                parameters: [
                    {
                        name: "id",
                        in: "query",
                        description: "delete dish",
                        type: "string",
                        example: "6263ae981fc737c2e546d7b5",
                    }
                ],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "multipart/form-data": {
                                schema: {
                                    type: "object",
                                    example: foodDataOne,
                                }
                            }
                        }
                    },
                    500: {
                        description: "server error",
                    },
                    400: {
                        description: "Could not find dish"
                    }
                }
            }
        }
    },
}