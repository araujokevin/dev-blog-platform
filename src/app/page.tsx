import { PostFeatured } from "@/components/ui/PostFeatured";

import { PostsList } from "@/components/ui/PostsList";
import { SpinLoader } from "@/components/ui/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostsList />
      </Suspense>
    </>
  );
}
