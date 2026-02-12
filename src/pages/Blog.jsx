import "../styles/blog.css";

const Blog = () => {
  return (
    <div className="blog">

      {/* HERO SECTION */}
      <section className="blog-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Luxury Jewelry Journal</span>
          <h1>Stories of Craftsmanship & Style</h1>
          <p>
            Explore fine jewelry artistry, timeless trends, and expert insights
            curated by JewelLux designers.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="featured">
        <div className="featured-img"></div>

        <div className="featured-info">
          <span className="category">Featured</span>
          <h2>The Art of Fine Jewelry Craftsmanship</h2>

          <div className="meta-info">
            <span>By JewelLux Studio</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <p>
            Each JewelLux piece is a celebration of precision, heritage,
            and modern elegance — handcrafted using ethically sourced
            gemstones and expert techniques refined over generations.
          </p>

          <button className="btn-primary">Read Article</button>
        </div>
      </section>

      {/* BLOG ARTICLES */}
      <section className="articles">
        <h2>Latest Insights</h2>

        <div className="article-grid">

          <article className="article-card">
            <div className="article-img ring"></div>
            <div className="article-content">
              <span className="tag">Engagement</span>
              <h3>Choosing the Perfect Engagement Ring</h3>
              <p>
                Understand diamond cuts, clarity, and band styles to find
                a ring that reflects your love story.
              </p>
              <div className="article-footer">
                <span>6 min read</span>
                <button>Explore</button>
              </div>
            </div>
          </article>

          <article className="article-card">
            <div className="article-img trend"></div>
            <div className="article-content">
              <span className="tag">Trends 2026</span>
              <h3>Luxury Jewelry Trends Defining 2026</h3>
              <p>
                From sculptural gold to bold gemstones, discover what's
                shaping the future of fine jewelry.
              </p>
              <div className="article-footer">
                <span>5 min read</span>
                <button>Explore</button>
              </div>
            </div>
          </article>

          <article className="article-card">
            <div className="article-img care"></div>
            <div className="article-content">
              <span className="tag">Jewelry Care</span>
              <h3>How to Care for Gold & Diamonds</h3>
              <p>
                Expert-approved care routines to preserve brilliance and
                extend the life of your jewelry.
              </p>
              <div className="article-footer">
                <span>4 min read</span>
                <button>Explore</button>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* CTA / EXPERT */}
      <section className="expert">
        <h2>Need Personal Jewelry Advice?</h2>
        <p>
          Speak with our jewelry consultants for styling, gifting,
          or custom design guidance.
        </p>
        <button className="btn-outline">Consult an Expert</button>
      </section>

    </div>
  );
};

export default Blog;
