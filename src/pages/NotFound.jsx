function NotFound() {
  return (
    <main className="main-content" style={{ textAlign: "center", padding: "80px 40px" }}>
      <h1 style={{ fontSize: "72px", color: "var(--accent)" }}>404</h1>
      <h2 style={{ marginBottom: "12px" }}>Page Not Found</h2>
      <p style={{ color: "var(--text-2)" }}>
        The page you are looking for does not exist.
      </p>
    </main>
  );
}

export default NotFound;