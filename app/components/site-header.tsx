type PageName = "home" | "books" | "music";

const navigation: Array<{ href: string; label: string; page: PageName }> = [
  { href: "/", label: "Home", page: "home" },
  { href: "/books/", label: "Books", page: "books" },
  { href: "/music/", label: "Music", page: "music" },
];

export function SiteHeader({ currentPage }: { currentPage: PageName }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Liangxu Wei — Home">
        LW<span className="wordmark-dot">.</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            key={item.page}
            href={item.href}
            className={currentPage === item.page ? "active" : undefined}
            aria-current={currentPage === item.page ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
