"use client";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-semibold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-medium text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for doesn't exist. Perhaps it was
          moved or deleted.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition duration-300"
          onClick={handleGoHome}
        >
          <Home className="mr-2" />
          Back to Homepage
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
