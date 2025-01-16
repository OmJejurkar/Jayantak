import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Social Media on Political Campaigns",
    excerpt: "Explore how social media platforms are shaping modern political campaigns and influencing voter behavior.",
    date: "2023-05-15",
    author: "Jane Doe",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "Top 10 Tips for Stunning Event Photography",
    excerpt: "Learn the secrets to capturing memorable moments at events with these professional photography tips.",
    date: "2023-05-10",
    author: "John Smith",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "The Art of Successful Event Management",
    excerpt: "Discover the key elements that go into planning and executing a flawless event, from concept to completion.",
    date: "2023-05-05",
    author: "Emily Brown",
    image: "/placeholder.svg?height=200&width=300"
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Jayantak Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-500">{post.author}</span>
              </div>
              <Link href={`/blog/${post.id}`} className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

