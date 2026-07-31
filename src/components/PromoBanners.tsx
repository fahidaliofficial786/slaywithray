import React, { useState } from "react";
import { Bot, ShieldCheck, Briefcase, X, Star } from "lucide-react";

export const PromoBanners: React.FC = () => {
  const [closedBanners, setClosedBanners] = useState<{ [key: string]: boolean }>({});

  const handleClose = (e: React.MouseEvent, bannerId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setClosedBanners((prev) => ({ ...prev, [bannerId]: true }));
  };

  const banners = [
    {
      id: "banner-ghl",
      title: "GHL Automation",
      subtitle: "View Portfolio →",
      href: "https://www.fiverr.com/users/fahidaliofficia/portfolio/",
      icon: Bot,
      color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300",
      target: "_blank",
    },
    {
      id: "banner-malware",
      title: "Malware Removal",
      subtitle: "Security Services →",
      href: "https://www.fiverr.com/users/fahidaliofficia/portfolio/",
      icon: ShieldCheck,
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300",
      target: "_blank",
    },
    {
      id: "banner-fiverr",
      title: "Fiverr Portfolio",
      subtitle: "130+ Reviews ★★★★★ →",
      href: "https://www.fiverr.com/users/fahidaliofficia/portfolio/",
      icon: Briefcase,
      color: "from-amber-500/20 to-emerald-500/20 border-amber-500/30 text-amber-300",
      target: "_blank",
    },
  ];

  const visibleBanners = banners.filter((b) => !closedBanners[b.id]);

  if (visibleBanners.length === 0) return null;

  return (
    <div className="promo-banners-container fixed bottom-4 left-4 z-50 flex flex-col gap-2.5 max-w-[280px] sm:max-w-xs pointer-events-none">
      {visibleBanners.map((banner) => {
        const Icon = banner.icon;
        return (
          <a
            key={banner.id}
            id={banner.id}
            href={banner.href}
            target={banner.target}
            rel="noopener noreferrer"
            className={`promo-banner visible pointer-events-auto relative group flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-black/80 backdrop-blur-xl border ${banner.color} shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:bg-black/95 hover:shadow-[0_12px_35px_rgba(255,118,167,0.3)]`}
          >
            {/* Dismiss / Close Button */}
            <button
              type="button"
              onClick={(e) => handleClose(e, banner.id)}
              className="banners-close-btn absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-zinc-800 border border-white/20 text-white/70 hover:text-white hover:bg-red-600 transition-colors flex items-center justify-center text-xs shadow-md z-10"
              aria-label="Close banner"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Icon */}
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 border border-white/10 group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5 fill-current/10" />
            </div>

            {/* Text Content */}
            <div className="min-w-0 flex-1">
              <div className="banner-text font-display text-sm font-bold text-white tracking-wide truncate">
                {banner.title}
              </div>
              <div className="banner-sub text-xs font-semibold text-white/70 group-hover:text-pink-300 transition-colors flex items-center gap-1">
                {banner.subtitle}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
