export const SITE = {
  website: "https://ngubiadventure.com/", // replace this with your deployed domain
  author: "Ngubi Adventure Forest Camp",
  // profile: "",
  desc: "Ngubi Adventure Forest Camp: Enriching nature experiences, fostering teamwork, and promoting conservation in the Kikuyu escarpment forest.",
  title: "Ngubi Adventure Forest Camp",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Africa/Nairobi", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
