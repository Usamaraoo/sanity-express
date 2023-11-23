
export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Namess',
            type: 'string'
        },
        {
            name: 'profileImg',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
        },
    ]
}