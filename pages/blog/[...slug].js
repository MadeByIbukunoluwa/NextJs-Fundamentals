

import { useRouter } from "next/router";



function BlogPostsPage () {
    const router = useRouter()
    console.log(router.query)
    return <div>

    </div>
}

export default BlogPostsPage