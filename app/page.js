import { getAllBlog, getAllCat } from '@/sanity/sanity-utils';
import { BlogList } from './components/BlogList'

export default async function Home() {
  const blogs = await getAllBlog();
  const cat = await getAllCat();
    return (
    <main className=" min-h-screen  items-center justify-between container ">
      <BlogList  blogs={blogs} categories={cat} />
    </main>
  )
}
