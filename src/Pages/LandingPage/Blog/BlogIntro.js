import Masthead from "../../Common/Masthead";

const blogIntroData = {
  masthead: {
    heading: "Explore Our Captivating Articles",
    tagline: "Our Blog"
  }
}

function BlogIntro() {
  return (
    <div className="cuppa-blog-intro">
      <Masthead
        headingX2={blogIntroData.masthead.heading}
        tagline={blogIntroData.masthead.tagline}
      />
        <p className="paragraph">
          Get ready to embark on a delightful journey through our collection of articles.
          We've handpicked a variety of topics that are approachable, informative, and full of warmth.
        From helpful tips and practical advice to heartwarming stories and fascinating insights, our articles are designed to make you feel right at home.
        </p>
    </div>
  )
}

export default BlogIntro
