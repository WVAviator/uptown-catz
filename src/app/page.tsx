import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      {Array(100)
        .fill('test')
        .map((t, i) => (
          <div key={i} className="text-foreground">
            Test
          </div>
        ))}
    </main>
  );
}
