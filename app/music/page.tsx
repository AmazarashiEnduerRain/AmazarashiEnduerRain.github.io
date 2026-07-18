import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Music",
  description:
    "A personal listening archive: music, artists, and brief notes from Liangxu Wei.",
  alternates: { canonical: "/music/" },
  openGraph: {
    title: "Music — Liangxu Wei",
    description:
      "Music, artists, and brief notes from a personal listening archive.",
    url: "/music/",
  },
};

const listeningGuide = [
  {
    index: "01",
    title: "The recording",
    text: "Albums, songs, and performances can be recorded with their release year and listening context.",
  },
  {
    index: "02",
    title: "Why it resonates",
    text: "Each selection will include a short note about its sound, writing, atmosphere, or personal significance.",
  },
  {
    index: "03",
    title: "The artist",
    text: "Related records and collaborators will make it possible to follow connections across the listening archive.",
  },
];

export default function MusicPage() {
  return (
    <div className="site-shell">
      <SiteHeader currentPage="music" />

      <main className="collection-page">
        <header className="collection-hero music-hero">
          <div>
            <p className="section-label">Listening archive</p>
            <h1>
              Music I keep close,
              <span> and the artists who made it.</span>
            </h1>
          </div>
          <p className="collection-intro">
            A personal index of records, songs, performances, and artists.
            Selections will be accompanied by short notes about the moments,
            sounds, and words that made them worth returning to.
          </p>
        </header>

        <section className="collection-section" aria-labelledby="listening-list">
          <div className="section-heading-row">
            <p className="section-label" id="listening-list">
              Listening list
            </p>
            <p className="section-note">Entries forthcoming</p>
          </div>
          <div className="empty-collection music-empty">
            <span className="empty-number">01—</span>
            <div>
              <h2>The first listening notes will appear here.</h2>
              <p>
                Each entry is designed to foreground the music and its creator,
                with room for a concise personal response and listening links.
              </p>
            </div>
          </div>
        </section>

        <section className="collection-section" aria-labelledby="listening-format">
          <div className="section-heading-row">
            <p className="section-label" id="listening-format">
              Entry format
            </p>
            <p className="section-note">A connected listening map</p>
          </div>
          <div className="collection-guide">
            {listeningGuide.map((item) => (
              <article key={item.index}>
                <span className="item-index">{item.index}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="collection-quote music-quote">
          <p className="section-label">Listening note</p>
          <p>
            This page is ready for a first list of songs, albums, and artists.
            Streaming and artist links can be added entry by entry.
          </p>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
