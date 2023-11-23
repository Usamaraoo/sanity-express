import { createClient, groq } from "next-sanity";

// all blogs
export async function getAllBlog() {
    const client = createClient({
        projectId: 'hf6s0p0z',
        dataset: "production",
        apiVersion: '2023-11-23',
        useCdn: false
    })
    return client.fetch( groq`*[_type == "blog"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "author":author->,
        "authorImg":author.profileImg.asset->url,
        "cat":category->,
        "image": image.asset->url,
        "alt":image.alt,
        content
      }`)
}
// get blogs by cat
export async function blogByCat(cat) {
    const client = createClient({
        projectId: 'hf6s0p0z',
        dataset: "production",
        apiVersion: '2023-03-04',
        useCdn: false
    })
   return  client.fetch( groq`      
    *[_type == 'blog' && references(*[_type == 'categories' && name == '${cat}']._id)]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "author":author->,
        "authorImg":author.profileImg.asset->url,
        "cat":category->,
        "image": image.asset->url,
        "alt":image.alt,
        content
      }
    `)
}

// single blog by slug
export async function singleBlog(slug) {
    const client = createClient({
        projectId: 'hf6s0p0z',
        dataset: "production",
        apiVersion: '2023-03-04',
        useCdn: false
    })

    console.log('coming slig',slug)
   return  client.fetch( groq`      
    *[_type == 'blog' && slug.current == '${slug}'][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "author":author->,
        "authorImg":author.profileImg.asset->url,
        "cat":category->,
        "image": image.asset->url,
        "alt":image.alt,
        content
      }
    `)
}

// all categories
export async function getAllCat() {
    const client = createClient({
        projectId: 'hf6s0p0z',
        dataset: "production",
        apiVersion: '2023-03-04',
        useCdn: false
    })
    return client.fetch( groq`*[_type == "categories"]{
        _id,
        name,
        catImg
      }`)
}