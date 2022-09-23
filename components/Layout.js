import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>
          <a
            href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jClk8wl1yJcN3Zlrr8YSA1"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            From the Net Ninja :)
          </a>
        </p>
      </footer>
    </div>
  );
}
