import React, { useEffect } from "react";
import { Instagram, ExternalLink, Heart, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";

interface InstagramCardProps {
  avatarUrl?: string;
  username?: string;
  name?: string;
  followerCount?: string;
  profileUrl?: string;
}

export const InstagramCard: React.FC<InstagramCardProps> = ({
  avatarUrl = "/images/avatar.jpg",
  username = "raynishanicole",
  name = "RAYNISHA NICOLE",
  followerCount = "55K+",
  profileUrl = "https://www.instagram.com/raynishanicole/",
}) => {
  useEffect(() => {
    // Inject Instagram official embed script if needed
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const posts = [
    { id: "1", img: "/images/ray8.jpg", likes: "2,450", comments: "142", caption: "Consistency over perfection. Building strength and confidence every single day. 💪✨" },
    { id: "2", img: "/images/ray9.jpg", likes: "3,120", comments: "198", caption: "Poolside resets & glute work. Summer body is built in winter! ☀️🏋️‍♀️" },
    { id: "3", img: "/images/ray10.jpg", likes: "1,980", comments: "87", caption: "Full body workout routine. Who is ready to slay today? 🔥" },
    { id: "4", img: "/images/ray11.jpg", likes: "4,210", comments: "310", caption: "1:1 Fitness Coaching applications are officially OPEN! Link in bio. 🎯" },
    { id: "5", img: "/images/ray2.jpg", likes: "2,840", comments: "165", caption: "Mindset & muscle. You are capable of achieving whatever you set your mind to." },
    { id: "6", img: "/images/ray5.jpg", likes: "3,590", comments: "220", caption: "Slay season in full effect. Loving the progress from all my 1:1 clients!" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      {/* 1. Custom Profile Card Badge (Exact Match to User Reference Image 1) */}
      <div className="relative mx-auto my-12 max-w-xl">
        {/* White Card Container */}
        <div className="relative bg-white text-black rounded-[2rem] border-2 border-black px-6 pt-16 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-center transition-all duration-300 hover:shadow-[0_25px_60px_rgba(255,118,167,0.3)]">
          {/* Top Overlapping Circular Avatar */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2">
            <div className="h-28 w-28 rounded-full border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] overflow-hidden bg-zinc-100 ring-2 ring-black/20">
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
              <div className="text-xs sm:text-sm font-bold tracking-[0.25em] text-zinc-600 uppercase mt-0.5">
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

      {/* 2. Embedded Instagram Live Feed Section */}
      <div className="mt-16 glass-strong rounded-[2.5rem] p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base sm:text-lg">@{username}</span>
                <CheckCircle2 className="h-4 w-4 text-pink-400 fill-pink-400/20" />
              </div>
              <p className="text-xs text-white/60">Official Instagram Feed & Client Transformations</p>
            </div>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition-colors border border-white/10"
          >
            Visit Instagram Profile <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Instagram Post Media Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden glass border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(255,118,167,0.25)] flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                <img
                  src={post.img}
                  alt={post.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Overlaid stats */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 fill-pink-500 text-pink-500" /> {post.likes}</span>
                    <span className="flex items-center gap-1.5"><MessageCircle className="h-4 w-4 text-white" /> {post.comments}</span>
                  </div>
                  <Instagram className="h-4 w-4 text-white/80" />
                </div>
              </div>

              <div className="p-4 bg-black/40 text-xs text-white/80 line-clamp-2 leading-relaxed flex-1">
                {post.caption}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
