export default function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading">
      <div className="loading-spinner" />
      <div className="loading-text">Loading...</div>
    </div>
  );
}