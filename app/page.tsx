'use client'
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RecentPosts } from "@/components/RecentPosts";
import { Articles } from "@/components/Articles";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { SendPage } from "@/components/SendPage";
import Auth from "@/components/Auth";
import { ExplorePage } from "@/components/ExplorePage";
import { HistoryPage } from "@/components/HistoryPage";
import { ArticlesPage } from "@/components/ArticlesPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");


useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage]);


  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      {currentPage === "home" && (
        <>
          <Hero onNavigate={setCurrentPage} />
          <RecentPosts />
          <Articles onNavigate={setCurrentPage} />
          <Events />
        </>
      )}
      {currentPage === "send" && <SendPage />}
      {currentPage === "signin" && <Auth />}
      {currentPage === "explore" && <ExplorePage />}
      {currentPage === "history" && <HistoryPage />}
      {currentPage === "all_article" && (
        <ArticlesPage onBack={() => setCurrentPage("home")} />
      )}

      <Footer />
    </div>
  );
}
