import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Books",
  description:
    "A personal reading shelf, organized by author, with books and reading notes from Liangxu Wei.",
  alternates: { canonical: "/books/" },
  openGraph: {
    title: "Books — Liangxu Wei",
    description:
      "Authors, books, reading notes, and recommendations from a personal library.",
    url: "/books/",
  },
};

const book = (title: string) => ({
  title,
  meta: "Book",
  note: "Reading note forthcoming.",
});

const authors = [
  {
    index: "01",
    name: "Roberto Bolaño",
    nativeName: "罗贝托·波拉尼奥",
    works: [
      book("智利之夜"),
      book("地球上最后的夜晚"),
      book("2666"),
    ],
  },
  {
    index: "02",
    name: "Julio Cortázar",
    nativeName: "胡利奥·科塔萨尔",
    works: [
      book("游戏的终结"),
      book("万火归一"),
      book("动物寓言集"),
      book("文学课"),
    ],
  },
  {
    index: "03",
    name: "Gabriel García Márquez",
    nativeName: "加西亚·马尔克斯",
    works: [
      book("百年孤独"),
      book("族长的秋天"),
      book("苦妓回忆录"),
      book("活着为了写作"),
      book("番石榴飘香"),
      book("霍乱时期的爱情"),
    ],
  },
  {
    index: "04",
    name: "William Faulkner",
    nativeName: "威廉·福克纳",
    works: [
      book("我弥留之际"),
      book("Light in August"),
      book("喧哗与骚动"),
    ],
  },
];

function RatingPlaceholder() {
  return (
    <div className="rating-placeholder" aria-label="Rating not added yet">
      <span aria-hidden="true">○ ○ ○ ○ ○</span>
      <small>Not rated yet</small>
    </div>
  );
}

export default function BooksPage() {
  return (
    <div className="site-shell">
      <SiteHeader currentPage="books" />

      <main className="collection-page">
        <header className="collection-hero">
          <div>
            <p className="section-label">Personal library</p>
            <h1>
              Books I return to,
              <span> organized by author.</span>
            </h1>
          </div>
          <p className="collection-intro">
            Open an author to browse their books, then open a title for reading
            notes and a personal recommendation. The shelf can grow without
            losing the connections between works and writers.
          </p>
        </header>

        <section className="collection-section" aria-labelledby="reading-shelf">
          <div className="section-heading-row archive-heading">
            <p className="section-label" id="reading-shelf">
              Authors &amp; books
            </p>
            <p className="section-note">Select an author to explore</p>
          </div>

          <div className="archive-list">
            {authors.map((author) => (
              <details className="creator-group" key={author.name}>
                <summary className="creator-summary">
                  <span className="creator-index">{author.index}</span>
                  <span className="creator-name">
                    <strong>{author.name}</strong>
                    <small>{author.nativeName}</small>
                  </span>
                  <span className="creator-count">
                    {author.works.length} books
                  </span>
                  <span className="details-toggle" aria-hidden="true" />
                </summary>

                <div className="works-list">
                  {author.works.map((work, workIndex) => (
                    <details className="work-entry" key={work.title}>
                      <summary className="work-summary">
                        <span className="work-index">
                          {author.index}.{String(workIndex + 1).padStart(2, "0")}
                        </span>
                        <span className="work-title">
                          <strong>{work.title}</strong>
                          <small>{work.meta}</small>
                        </span>
                        <span className="work-action">Open note</span>
                        <span className="details-toggle small" aria-hidden="true" />
                      </summary>

                      <div className="work-detail">
                        <div>
                          <p className="detail-label">Reading note</p>
                          <p>{work.note}</p>
                        </div>
                        <div>
                          <p className="detail-label">Recommendation</p>
                          <RatingPlaceholder />
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <aside className="collection-quote">
          <p className="section-label">About this shelf</p>
          <p>
            Notes and ratings are intentionally left open until they can be
            written in my own words.
          </p>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
