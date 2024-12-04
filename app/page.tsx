import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link'

export default async function Page() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <Link href="/dashboard" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}