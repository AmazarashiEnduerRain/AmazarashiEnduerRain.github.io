import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Books",
  description:
    "A personal reading shelf: books, authors, and brief notes from Liangxu Wei.",
  alternates: { canonical: "/books/" },
  openGraph: {
    title: "Books — Liangxu Wei",
    description: "Books, authors, and brief notes from a personal reading shelf.",
    url: "/books/",
  },
};

const shelfGuide = [
  {
    index: "01",
    title: "The book",
    text: "Each entry will begin with the title, author, original language, and publication year.",
  },
  {
    index: "02",
    title: "Why it stays",
    text: "A concise personal note will record the idea, scene, or voice that made the work memorable.",
  },
  {
    index: "03",
    title: "The author",
    text: "Related works and a short reflection on the writer will connect individual books into a wider reading map.",
  },
];

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
              <span> and the writers behind them.</span>
            </h1>
          </div>
          <p className="collection-intro">
            A growing reading notebook for books that have stayed with me.
            Rather than a ranking, this page will collect brief, personal
            reasons for remembering each work and its author.
          </p>
        </header>

        <section className="collection-section" aria-labelledby="reading-shelf">
          <div className="section-heading-row">
            <p className="section-label" id="reading-shelf">
              Reading shelf
            </p>
            <p className="section-note">Entries forthcoming</p>
          </div>
          <div className="empty-collection">
            <span className="empty-number">01—</span>
            <div>
              <h2>The first reading notes will appear here.</h2>
              <p>
                Book covers are deliberately secondary: every entry is designed
                around the title, author, and a short note in my own words.
              </p>
            </div>
          </div>
        </section>

        <section className="collection-section" aria-labelledby="entry-format">
          <div className="section-heading-row">
            <p className="section-label" id="entry-format">
              Entry format
            </p>
            <p className="section-note">A small reading map</p>
          </div>
          <div className="collection-guide">
            {shelfGuide.map((item) => (
              <article key={item.index}>
                <span className="item-index">{item.index}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="collection-quote">
          <p className="section-label">Reading note</p>
          <p>
            This page is ready for a first list of titles and authors. Each can
            be expanded later without changing the overall structure.
          </p>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
