export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "profile",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "skillType",
            title: "xperience skill",
            type: "string",
            options: {
                list: [
                    {value: "proficient", title: "React"},
                    
                ] ,   
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ],
            options: {
                layout: "tags",
            },
        },

    ],
};