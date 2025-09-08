export const SITE = {
  website: "https://yourdomain.com/", // replace this with your deployed domain
  author: "Jonas Lergell",
  profile: "https://yourdomain.com/",
  desc: "Personal website and blog",
  title: "thrawny.github.io",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false, // Enable when you set up your GitHub repo
    text: "Edit page",
    url: "https://github.com/yourusername/yourrepo/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
