import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Music",
  description:
    "A personal listening archive, organized by artist, with music notes from Liangxu Wei.",
  alternates: { canonical: "/music/" },
  openGraph: {
    title: "Music — Liangxu Wei",
    description:
      "Artists, songs, listening notes, and personal ratings from a listening archive.",
    url: "/music/",
  },
};

const track = (title: string) => ({
  title,
  meta: "Track",
  note: "Listening note forthcoming.",
});

const artists = [
  {
    index: "01",
    name: "amazarashi",
    nativeName: "アマザラシ",
    works: [
      track("光、再考"),
      track("僕が死のうと思ったのは"),
      track("ひろ"),
      track("少年少女"),
      track("クラウン新車で買ってあげる"),
      track("間抜けなニムロド"),
      track("まっさら"),
      track("かつて焼け落ちた町"),
      track("季節は次々死んでいく"),
      track("名前"),
      track("14歳"),
      track("冬が来る前に"),
      track("ピアノ泥棒"),
      track("Rita"),
      track("ぼくら対せかい"),
      track("千年幸福論"),
      track("空っぽの空に潰される"),
      track("Starlight"),
      track("無題"),
      track("隅田川"),
      track("夏、消息不明"),
      track("春待ち"),
      track("さくら"),
      track("逃避行"),
      track("下を向いて歩こう"),
      track("ハルキオンザロード"),
      track("吐きそうだ"),
    ],
  },
  {
    index: "02",
    name: "THE BLUE HEARTS",
    nativeName: "ザ・ブルーハーツ",
    works: [
      track("夢"),
      track("Linda Linda"),
      track("Train-Train"),
      track("手紙"),
      track("終わらない歌"),
      track("青空"),
      track("夕暮れ"),
    ],
  },
  {
    index: "03",
    name: "头脑警察",
    nativeName: "頭脳警察",
    works: [track("万物流転")],
  },
  {
    index: "04",
    name: "崔健",
    nativeName: "Cui Jian",
    works: [track("假行僧"), track("飞了")],
  },
  {
    index: "05",
    name: "Green Day",
    nativeName: "",
    works: [track("Wake Me When September Ends")],
  },
  {
    index: "06",
    name: "Bob Dylan",
    nativeName: "",
    works: [track("Workingman's Blues # 2")],
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
              <span> organized by artist.</span>
            </h1>
          </div>
          <p className="collection-intro">
            Open an artist to browse songs and recordings, then open an entry
            for listening notes and a personal rating. The archive keeps each
            piece connected to the people who made it.
          </p>
        </header>

        <section className="collection-section" aria-labelledby="listening-list">
          <div className="section-heading-row archive-heading">
            <p className="section-label" id="listening-list">
              Artists &amp; music
            </p>
            <p className="section-note">Select an artist to explore</p>
          </div>

          <div className="archive-list music-archive">
            {artists.map((artist) => (
              <details className="creator-group" key={artist.name}>
                <summary className="creator-summary">
                  <span className="creator-index">{artist.index}</span>
                  <span className="creator-name">
                    <strong>{artist.name}</strong>
                    {artist.nativeName ? <small>{artist.nativeName}</small> : null}
                  </span>
                  <span className="creator-count">
                    {artist.works.length} tracks
                  </span>
                  <span className="details-toggle" aria-hidden="true" />
                </summary>

                <div className="works-list">
                  {artist.works.map((work, workIndex) => (
                    <details className="work-entry" key={work.title}>
                      <summary className="work-summary">
                        <span className="work-index">
                          {artist.index}.{String(workIndex + 1).padStart(2, "0")}
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
                          <p className="detail-label">Listening note</p>
                          <p>{work.note}</p>
                        </div>
                        <div>
                          <p className="detail-label">Personal rating</p>
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

        <aside className="collection-quote music-quote">
          <p className="section-label">About this archive</p>
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
