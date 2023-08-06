import BlogCards from "./BlogCards";
import BlogCta from "./BlogCta";
import BlogIntro from "./BlogIntro";

import "./styles/Blog.css";

function Blog() {
  return (
    <section
      className="cuppa-page-pad cuppa-blog"
      style={{
        background: "#595842",
        color: "#F2F2F2"
      }}
    >
      <BlogIntro />
      <BlogCards />
      <BlogCta />
    </section>
  )
}

export default Blog
