export const SITE = {
  website: "https://thrawny.github.io", // replace this with your deployed domain
  author: "Jonas Lergell",
  profile: "https://thrawny.github.io",
  desc: "Personal website and blog about software development",
  title: "Jonas Lergell",
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
    url: "https://github.com/thrawny/thrawny.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Stockholm", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
