import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Home Page (Luar Dashboard)</h1>

      {/* Tombol menuju dashboard */}
      <Link
        href="/dashboard"
        className="px-4 py-2 bg-black text-white rounded-lg inline-block"
      >
        Masuk ke Dashboard
      </Link>
    </div>
  );
}
