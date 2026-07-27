import React from "react";
import { Instagram, ExternalLink, Heart, MessageCircle, Sparkles } from "lucide-react";
import ray8 from "@/assets/ray8.jpg.asset.json";
import ray9 from "@/assets/ray9.png.asset.json";
import ray10 from "@/assets/ray10.jpg.asset.json";
import ray11 from "@/assets/ray11.jpg.asset.json";
import ray2 from "@/assets/ray2.jpg.asset.json";
import ray5 from "@/assets/ray5.jpg.asset.json";

interface InstagramCardProps {
  avatarUrl?: string;
  username?: string;
  name?: string;
  followerCount?: string;
  profileUrl?: string;
}

export const InstagramCard: React.FC<InstagramCardProps> = ({
  avatarUrl = ray8.url,
  username = "raynishanicole",
  name = "RAYNISHA NICOLE",
  followerCount = "55K+",
  profileUrl = "https://www.instagram.com/raynishanicole/",
}) => {
  const posts = [
    { id: "1", img: ray8.url, likes: "2.4K", comments: "142", caption: "Consistency over perfection 💅✨" },
    { id: "2", img: ray9.url, likes: "3.1K", comments: "198", caption: "Poolside resets & glute work ☀️🏋️‍♀️" },
    { id: "3", img: ray10.url, likes: "1.9K", comments: "87", caption: "Summer body built in winter 💥" },
    { id: "4", img: ray11.url, likes: "4.2K", comments: "310", caption: "1:1 Coaching applications open 🔥" },
    { id: "5", img: ray2.url, likes: "2.8K", comments: "165", caption: "Mindset & muscle 🧠💪" },
    { id: "6", img: ray5.url, likes: "3.5K", comments: "220", caption: "Slay season in full effect ✨" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      {/* 1. Custom Profile Card Badge (Exact Match to User Reference Image) */}
      <div className="relative mx-auto my-12 max-w-xl">
        {/* Card Container */}
        <div className="relative bg-white text-black rounded-[2rem] border-2 border-black px-6 pt-16 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-center transition-all duration-300 hover:shadow-[0_25px_60px_rgba(255,118,167,0.25)]">
          {/* Top Overlapping Circular Avatar */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2">
            <div className="h-28 w-28 rounded-full border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] overflow-hidden bg-zinc-100 ring-2 ring-black/10">
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Name & Metric Content */}
          <div className="mt-2 space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-wider uppercase text-black">
              {name}
            </h3>

            <div className="pt-1">
              <div className="font-display text-4xl sm:text-5xl font-black text-black tracking-tight">
                {followerCount}
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-zinc-600 uppercase mt-0.5">
                FOLLOWERS
              </div>
            </div>
          </div>

          {/* Bottom Overlapping Follow Button */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-10 py-3.5 rounded-2xl font-black tracking-widest text-sm uppercase shadow-lg transition-transform hover:scale-105 hover:bg-zinc-900 active:scale-95"
            >
              FOLLOW
            </a>
          </div>
        </div>
      </div>

      {/* 2. Embedded Instagram Feed / Iframe Container */}
      <div className="mt-16 glass-strong rounded-[2.5rem] p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white shadow-md">
              <Instagram className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base">@{username}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-semibold border border-pink-500/30">Official Feed</span>
              </div>
              <p className="text-xs text-white/60">Live Instagram Updates & Transformations</p>
            </div>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
          >
            Open in Instagram <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Embedded Content Area: Embed Iframe with fallback responsive grid */}
        <div className="mt-6">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black/40 border border-white/5">
            {/* Direct Instagram Profile Embed Web View */}
            <iframe
              src={`https://www.instagram.com/${username}/embed`}
              title="Instagram Feed Iframe"
              className="w-full min-h-[500px] border-0 rounded-2xl hidden md:block"
              loading="lazy"
              allowTransparency={true}
            />

            {/* Responsive Grid for mobile / fallback preview */}
            <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 p-2">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-white/10"
                >
                  <img
                    src={post.img}
                    alt={post.caption}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2 text-center">
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5 fill-current text-pink-500" /> {post.likes}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5 fill-current" /> {post.comments}</span>
                    </div>
                    <p className="text-[10px] text-white/80 line-clamp-2 mt-2 font-medium">{post.caption}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
