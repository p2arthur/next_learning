import { PageProps } from '@/.next/types/app/layout';

export default function BlogPostPage({ params }: PageProps) {
  console.log(params);

  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
}
