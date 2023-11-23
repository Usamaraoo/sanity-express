
export default {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'catImg',
            title: 'Category Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                { name: 'alt', title: 'Alt', type: 'string' }
            ]

        },
    ]
}