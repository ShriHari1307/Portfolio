import  { useState, useEffect } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Using CORS proxy service to bypass CORS issues
        const response = await fetch('https://corsproxy.io/?https://api.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                user(username: "Shrihari13") {
                  publications(first: 5) {
                    edges {
                      node {
                        posts(first: 10) {
                          edges {
                            node {
                              title
                              brief
                              slug
                              coverImage {
                                attribution
                                photographer
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          }),
        });

        const data = await response.json();

        // Extracting the blogs from the response data
        const allBlogs = data.data.user.publications.edges.flatMap(edge =>
          edge.node.posts.edges.map(postEdge => postEdge.node)
        );

        setBlogs(allBlogs);
        setLoading(false);
      } catch (err) {
        setError('Unable to fetch blogs. Please try again later.');
        setLoading(false);
        console.error('Error fetching blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Hashnode Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {blog.coverImage && (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.brief}</p>
            <a
              href={`https://shrihari13.hashnode.dev/${blog.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
