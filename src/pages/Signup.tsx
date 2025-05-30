
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SignupForm from "@/components/auth/SignupForm";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

const Signup: React.FC = () => {
  const { isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    if (isLoggedIn && !isLoading) {
      navigate("/profile");
    }
  }, [isLoggedIn, isLoading, navigate]);

  // Show loader while checking auth state
  if (isLoading && isLoggedIn) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[50vh]">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-organic-500" />
            <p className="text-organic-600">Loading your profile...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 border border-organic-100">
            <SignupForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
