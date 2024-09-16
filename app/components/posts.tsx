import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

function ArrowIcon() {
  return (
      <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
            fill="currentColor"
        />
      </svg>
  )
}

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
            <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
            >
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                            {formatDate(post.metadata.publishedAt, false)}
                        </p>
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                            {post.metadata.title}
                        </p>
                    </div>
                    <li className="list-none">
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.figma.com/@andrewliu26"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">Github Link</p>
                        </a>
                    </li>
                </div>
            </Link>
        ))}
    </div>
  )
}
