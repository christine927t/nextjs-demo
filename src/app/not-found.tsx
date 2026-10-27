import Link from 'next/link';

export default async function NotFound() {
  return (
    <main style={{ padding: 24}}>
      <h1>Page not found</h1>
      <p>This page does not exist.</p>
      <Link href="/demo">Go to the demo</Link>
    </main>
  );
}
