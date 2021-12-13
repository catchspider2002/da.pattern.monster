const strings = {
  website: "https://sv.pattern.monster",
  title: "Pattern Monster",
  description: "En smidig online-mönstergenerator för att skapa mönsterpassade SVG-mönster.",
  description2: "Snabba upp din webbplats utan att kompromissa med bildkvalitet.",
  description3: "Perfekt för webbplatsens bakgrunder, kläder, varumärke, förpackningsdesign och mer.",
  keywords: "svg mönster, mönster, svg bakgrunder, vektor bakgrundsbild, mönstergenerator, mönsterskapare",
  pages: [
    {
      page: "index",
      title: "Generator för SVG-mönster",
      keywords: "",
      description: "",
      image: "",
    },
    {
      page: "changelog",
      title: "Historik",
      keywords: "Historik",
      description: "Changelog for Pattern Monster.",
      image: "",
    },
    {
      page: "downloads",
      title: "Nedladdningar",
      keywords: "Nedladdningar",
      description: "Downloads for Pattern Monster.",
      image: "",
    },
    {
      page: "features",
      title: "Funktioner",
      keywords: "Funktioner",
      description: "Features for Pattern Monster.",
      image: "",
    },
    {
      page: "privacy-policy",
      title: "Sekretesspolicy",
      keywords: "Sekretesspolicy",
      description: "Privacy Policy for Pattern Monster.",
      image: "",
    },
    {
      page: "api",
      title: "API",
      keywords: "api",
      description: "API for Pattern Monster.",
      image: "",
    },
    {
      page: "accessories",
      title: "Accessories",
      keywords: "accessories, shop",
      description: "Accessories for Pattern Monster.",
      image: "",
    },
    {
      page: "home-living",
      title: "Home & Living",
      keywords: "home, living, shop",
      description: "Home Living for Pattern Monster.",
      image: "",
    },
    {
      page: "phone-cases",
      title: "Phone Cases",
      keywords: "phone, cases, shop",
      description: "Phone Cases for Pattern Monster.",
      image: "",
    },
    {
      page: "stationery-office",
      title: "Stationery & Office",
      keywords: "stationery, office, shop",
      description: "Stationery & Office for Pattern Monster.",
      image: "",
    },
    {
      page: "stickers-skins",
      title: "Stickers & Skins",
      keywords: "stickers, skins, shop",
      description: "Stickers & Skins for Pattern Monster.",
      image: "",
    },
    {
      page: "wall-art",
      title: "Wall Art",
      keywords: "wall-art, shop",
      description: "Wall Art for Pattern Monster.",
      image: "",
    },
  ],
  versions: [
    {
      lang: "en",
      website: "https://pattern.monster",
    },
    {
      lang: "de",
      website: "https://de.pattern.monster",
    },
    {
      lang: "pl",
      website: "https://pl.pattern.monster",
    },
    {
      lang: "tr",
      website: "https://tr.pattern.monster",
    },
    {
      lang: "es",
      website: "https://es.pattern.monster",
    },
    {
      lang: "it",
      website: "https://it.pattern.monster",
    },
    {
      lang: "ro",
      website: "https://ro.pattern.monster",
    },
    {
      lang: "fr",
      website: "https://fr.pattern.monster",
    },
    {
      lang: "ar",
      website: "https://ar.pattern.monster",
    },
    {
      lang: "pt",
      website: "https://pt.pattern.monster",
    },
    {
      lang: "zh-cn",
      website: "https://cn.pattern.monster",
    },
    {
      lang: "nl",
      website: "https://nl.pattern.monster",
    },
    {
      lang: "sv",
      website: "https://sv.pattern.monster",
    },
  ],
};

const pageDetails = (page) => {
  let imagePrefix = "https://giguom.com/pattern.monster/images/";
  let pageValues =
    strings.pages.filter((currentPage) => currentPage.page === page)[0] || strings.pages.filter((currentPage) => currentPage.page === "index")[0];

  let website = strings.website;
  let title = strings.title + " - " + strings.pages[0].title;
  let url = website;
  let keywords = strings.keywords;
  let desc = strings.description + " " + strings.description3;
  let image = pageValues.image == "" ? imagePrefix + "/TwitterBG2.png" : pageValues.image;

  let versions = strings.versions.map((version) => {
    return { lang: version.lang, website: version.website + (page === "index" ? "" : "/" + page + "/") };
  });

  if (page != "index") {
    title = pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
    url = website + "/" + page + "/";
    desc = pageValues.description + " " + strings.description + " " + strings.description3;
    keywords = pageValues.keywords + ", " + strings.keywords;
  }

  return { title, url, keywords, desc, image, versions };
};

let bmcData = `<path d="M0 24.48C0 10.96 13.33 0 29.76 0h678.99c16.44 0 29.76 10.96 29.76 24.48v104.04c0 13.52-13.32 24.48-29.76 24.48H29.76C13.33 153 0 142.04 0 128.52Z" fill="#ffc800"/>
<path d="M109.52 50.32l-.06-.04-.16-.05c.06.05.14.08.22.09zM110.5 57.31l-.07.02.08-.02zM109.55 50.3h-.03v.02l.03-.01zM109.52 50.32h.02-.02zM110.45 57.3l.11-.06.04-.03.04-.04a.65.65 0 00-.2.13zM109.72 50.47l-.12-.1-.07-.04c.04.07.1.12.19.14zM81.88 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM98.05 115.17c0-.1-.05-.08-.04.28l.02-.09c0-.06 0-.12.02-.19zM96.38 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM70.49 119.11a.48.48 0 00-.24-.11l.2.1.04.01zM67.93 116.66a2.38 2.38 0 010 0z" fill="#0D0C22"/>
<path d="M85.14 72.77C81.62 74.27 77.63 76 72.45 76a24 24 0 01-6.4-.89l3.58 36.74a6.14 6.14 0 006.12 5.63s5.07.26 6.76.26c1.83 0 7.29-.26 7.29-.26a6.14 6.14 0 006.12-5.63l3.83-40.6a16.3 16.3 0 00-5.4-.97c-3.36 0-6.08 1.16-9.21 2.5z" fill="#fff"/>
<path d="M54.98 57.1l.07.06.03.02a.6.6 0 00-.1-.08z" fill="#0D0C22"/>
<path d="M116.3 53.71l-.54-2.72c-.48-2.43-1.58-4.74-4.08-5.62-.8-.28-1.72-.4-2.33-.99-.62-.58-.8-1.49-.94-2.33l-.78-4.62c-.23-1.33-.42-2.81-1.03-4.03-.79-1.63-2.43-2.58-4.06-3.21-.83-.32-1.69-.58-2.55-.8-4.08-1.07-8.36-1.46-12.55-1.69-5.03-.28-10.08-.2-15.1.25-3.73.34-7.67.75-11.22 2.04a9.5 9.5 0 00-3.62 2.05 3.92 3.92 0 00-.72 4.67 6.05 6.05 0 002.82 2.37c1.47.66 3 1.16 4.58 1.5 4.39.96 8.93 1.34 13.41 1.5 4.97.2 9.95.04 14.89-.48 1.22-.14 2.44-.3 3.66-.49 1.44-.22 2.36-2.1 1.93-3.4-.5-1.56-1.86-2.17-3.4-1.93l-.68.1-.16.02a95.5 95.5 0 01-4.8.47 107.24 107.24 0 01-19.14-.4l-.47-.07-.1-.01-.48-.07a50.9 50.9 0 01-2.96-.53.44.44 0 010-.87h.02a47.95 47.95 0 013.42-.6c.54-.03 1.08-.13 1.61-.2a102.3 102.3 0 0122.2.1l.56.08.38.05c1.09.16 2.17.36 3.25.6 1.6.34 3.66.45 4.37 2.2.22.56.33 1.18.45 1.76l.16.75.01.04 1.13 5.27a.95.95 0 01-.15.75.97.97 0 01-.66.4h-.01l-.23.04-.23.03a128.48 128.48 0 01-6.45.68 149.64 149.64 0 01-12.9.52 151.25 151.25 0 01-19.17-1.24l-.51-.07-1.19-.17c-1.33-.2-2.64-.45-3.97-.66a6.9 6.9 0 00-4.58.66 6.66 6.66 0 00-2.76 2.86c-.62 1.29-.8 2.7-1.08 4.08-.28 1.39-.72 2.88-.55 4.3a6.87 6.87 0 005.59 6.13 161.9 161.9 0 0046.27 1.53 1.98 1.98 0 012.19 2.17l-.3 2.85a1089465.02 1089465.02 0 01-4.15 40.42c-.17 1.67-.19 3.4-.5 5.04-.5 2.6-2.27 4.2-4.83 4.78-2.35.54-4.76.82-7.17.84-2.67.01-5.34-.1-8.01-.1-2.86.02-6.35-.24-8.55-2.36-1.94-1.87-2.2-4.79-2.47-7.31l-1.04-10.03-1.94-18.59L62.84 70l-.07-.6c-.15-1.43-1.16-2.84-2.76-2.77-1.37.06-2.93 1.23-2.77 2.77l.93 8.92 1.92 18.44 1.64 15.72.31 3.01c.6 5.49 4.8 8.44 9.98 9.27 3.03.5 6.14.6 9.21.64 3.94.06 7.92.22 11.8-.5 5.74-1.05 10.05-4.89 10.67-10.84l.53-5.15 1.75-17.05 1.9-18.58.87-8.51a1.98 1.98 0 011.6-1.74c1.64-.32 3.2-.87 4.38-2.12 1.86-1.99 2.23-4.58 1.57-7.2zm-61.8 1.84c.03-.01-.02.2-.04.3 0-.15 0-.28.05-.3zm.16 1.23c.02 0 .06.04.1.1l-.1-.1zm.16.2c.06.1.09.16 0 0zm.32.26l.02.03a.21.21 0 00-.03-.03zm55.13-.38c-.6.56-1.48.82-2.36.95A166.3 166.3 0 0178.1 59.7a200.69 200.69 0 01-21.24-2.03c-.7-.1-1.44-.23-1.92-.74-.9-.96-.46-2.9-.22-4.06.21-1.06.62-2.48 1.88-2.63 1.98-.23 4.28.6 6.23.9a136.85 136.85 0 0037.57.3c1.84-.26 3.67-.54 5.5-.87 1.62-.3 3.42-.84 4.4.84.67 1.15.76 2.68.66 3.98-.04.56-.28 1.1-.7 1.48z" fill="#0D0C22"/>
<g aria-label="Trakteer me op een koffie" transform="translate(1026.53 -199.71) scale(9.22544)" fill="#000" stroke="#000" stroke-width=".11">
    <path d="M-92.81 29.53v-1.35l-.44-.1-.44-.1q-.45-.1-.71-.1-.5 0-.5.28 0 .31.2.52.22.22.39.22.16 0 .29-.09.14-.09.24-.09.13 0 .13.15 0 .13-.12.22t-.38.09q-.43 0-.72-.37-.3-.36-.3-.75 0-.38.18-.57.18-.19.44-.19.6 0 1.8.38.09-.5.35-.5.12 0 .12.65.77.24 1.32.24.36 0 .63-.23.08-.06.14-.06.06 0 .06.05 0 .22-.32.4-.32.16-.76.16t-1.07-.11l.01 1.5q0 .42-.03.71-.02.3-.12.62-.1.32-.25.54-.15.22-.43.36-.27.14-.63.14t-.65-.16q-.3-.17-.3-.52 0-.21.12-.35.11-.14.3-.14.18 0 .18.09 0 .04-.04.15-.05.12-.05.23 0 .12.14.25.15.14.43.14.79 0 .79-2.31z"/>
    <path d="m-91.23 30.04.44-.05q.06 0 .11.08.05.07.05.15l-.06.54q-.04.46-.04.73 0 .26.04.26.14-.01.38-.34t.47-.84q.23-.52.28-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34-.3 0-.47-.12-.05-.06-.05-.7 0-.63.13-1.08-.46 0-.64-.3-.1-.15-.1-.34 0-.19.08-.33t.23-.14q.15 0 .27.16.12.15.12.34 0 .19-.1.38.02.02.1.02z"/>
    <path d="M-87.66 32.15q-.31 0-.47-.12-.06-.06-.06-.28l.02-.61q-.2.51-.41.77-.2.24-.52.24t-.55-.3q-.24-.3-.24-.93 0-.64.35-1.13.37-.5.96-.5.25 0 .57.34.06-.09.22-.2.17-.13.28-.13.12 0 .12.3 0 .08-.05.3-.04.24-.1.34-.07.18-.07 1.3 0 .2.05.2.14 0 .37-.33.24-.33.47-.84.24-.52.29-.52.05 0 .05.06 0 .23-.23.7-.62 1.34-1.05 1.34zm-.97-2.54q-.22 0-.48.34-.24.32-.24.77 0 .44.12.73.14.28.35.28.27 0 .77-1.3l.02-.22.02-.24q-.07-.13-.25-.24-.18-.12-.31-.12z"/>
    <path d="m-84.3 32.4.22-.03q.06 0 .06.06 0 .11-.15.17-.15.05-.34.05-.36 0-.6-.28-.24-.29-.67-1.06-.1-.17-.1-.25 0-.12.33-.28.54-.28.54-.7 0-.12-.09-.2-.08-.08-.21-.08-.2 0-.45.45-.27.44-.36.84-.09.39-.09.84 0 .22-.13.22-.18 0-.35-.04-.16-.06-.16-.14l.06-.75q.06-.68.07-.97.03-1.62.2-2.48.02-.07.2-.24.2-.18.33-.18.11 0 .1.3 0 .3-.12 1.27-.13.98-.16 1.79.14-.51.45-.96.32-.45.64-.45.54 0 .54.52 0 .35-.2.63-.22.28-.56.46-.08.03-.08.07 0 .04.03.08.5.88.85 1.24.1.1.2.1zm1.95-1.58q-.63 1.33-1.07 1.33-.42 0-.5-.1-.07-.1-.07-.68 0-.58.1-1.68-.39-.08-.41-.32 0-.13.16-.13.17 0 .3.06l.16-1.16q.03-.15.15-.28.13-.14.25-.14.1 0 .1.33 0 .15-.1 1.39.2-.04.46-.16t.31-.12q.14 0 .14.09.01.08-.3.22-.3.13-.64.2-.1 1.17-.1 1.76 0 .32.1.32.14-.01.38-.34.24-.32.47-.84.24-.52.28-.52.06 0 .06.06 0 .23-.23.7z"/>
    <path d="M-81.57 32.15q-.44 0-.7-.33-.26-.34-.26-.77 0-.87.36-1.31.37-.44.95-.44.27 0 .44.15.17.14.17.4 0 .47-.4.8-.4.31-.98.33.04.3.21.54.18.22.42.22t.43-.11q.19-.11.35-.32.33-.44.57-1l.1-.2q.03-.06.07-.06.05 0 .05.06 0 .4-.48 1.2-.53.84-1.3.84zm-.42-1.36q.47-.08.69-.3.22-.23.22-.58 0-.36-.23-.36-.28 0-.47.39-.2.38-.2.85z"/>
    <path d="M-79.24 32.15q-.44 0-.7-.33-.27-.34-.27-.77 0-.87.37-1.31.36-.44.94-.44.27 0 .45.15.17.14.17.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.19.22.43.22.23 0 .42-.11.2-.11.35-.32.34-.44.58-1l.1-.2q.03-.06.07-.06.05 0 .05.06 0 .4-.49 1.2-.52.84-1.29.84zm-.42-1.36q.47-.08.68-.3.22-.23.22-.58 0-.36-.23-.36-.27 0-.46.39-.2.38-.21.85z"/>
    <path d="m-77.2 30.04.44-.05q.07 0 .12.08.04.07.04.15l-.05.54q-.05.46-.05.73 0 .26.05.26.13-.01.37-.34t.47-.84q.24-.52.28-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34-.3 0-.46-.12-.06-.06-.06-.7 0-.63.14-1.08-.46 0-.65-.3-.1-.15-.1-.34 0-.19.09-.33.08-.14.22-.14.15 0 .27.16.13.15.13.34 0 .19-.12.38.04.02.1.02zm3.58 1.64v.25q0 .22-.12.22-.19 0-.36-.04-.18-.06-.18-.15l.04-.62q.05-.54.05-.81v-.47q0-.38.08-.46.08-.08.28-.23.2-.15.29-.15.1 0 .12.03.02.03.02.12 0 .42-.16.79-.04.45-.04.63.42-.79.6-1.03.28-.46.52-.46.15 0 .28.11.14.12.14.3l-.01.33-.01.24v.11q.02-.06.26-.36l.32-.38.18-.17q.18-.18.33-.18.15 0 .27.1.14.12.14.28 0 .35-.08 1.04-.07.67-.07.85 0 .18.05.18.13-.01.37-.34t.47-.84q.24-.52.28-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34-.27 0-.43-.12-.05-.06-.05-.29 0-.24.04-.76.05-.53.05-.8 0-.26-.1-.26t-.44.35q-.34.35-.37.5-.05.26-.05 1.16 0 .22-.12.22-.18 0-.34-.04-.16-.06-.16-.15l.04-.78q.05-.7.05-.97 0-.29-.1-.29-.08 0-.43.55-.35.54-.39.75-.03.22-.03.46z"/>
    <path d="M-69 32.15q-.45 0-.72-.33-.26-.34-.26-.77 0-.87.37-1.31.36-.44.94-.44.27 0 .45.15.17.14.17.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.19.22.43.22t.43-.11q.19-.11.35-.32.33-.44.57-1l.1-.2q.03-.06.07-.06.05 0 .05.06 0 .4-.48 1.2-.53.84-1.3.84zm-.43-1.36q.47-.08.68-.3.23-.23.23-.58 0-.36-.23-.36-.28 0-.47.39-.2.38-.2.85zm5.84-.39q.32-.11.44-.18l.19-.12.1-.06.06-.02q.06 0 .06.07t-.24.25q-.25.18-.62.32-.05.67-.42 1.08-.36.41-1.04.41-.49 0-.75-.39-.26-.4-.26-.92 0-.53.3-1 .33-.47.82-.47.22-.15.52-.15.31 0 .57.32.26.33.27.85zm-.51.4-.29.01q-.36 0-.62-.21-.25-.23-.25-.49t.09-.45q-.35.27-.35 1.06 0 .39.16.73.16.35.5.35.34 0 .53-.29.2-.3.23-.71zm-.5-1.32q-.12 0-.2.12-.07.1-.07.24 0 .3.2.48t.48.18h.1q-.02-.39-.14-.7-.11-.32-.37-.32z"/>
    <path d="m-62.94 29.64.28-.26q.2-.16.3-.16.11 0 .11.31t-.16.61q-.03.15-.05.42.23-.63.46-.95.23-.31.56-.31.33 0 .58.3.24.3.24.93 0 .64-.36 1.13-.36.5-.95.5-.3 0-.61-.23 0 1.52-.17 2.31-.02.07-.22.24-.19.17-.28.17-.1 0-.13-.12-.04-.13-.04-.24 0-.82.33-2.1.06-.75.07-1.64l.04-.9zm1.06 2.23q.23 0 .48-.32.24-.33.24-.8 0-.47-.13-.75t-.35-.28q-.38 0-.87 1.58l-.01.34q.22.23.64.23zm4.1.28q-.44 0-.7-.33-.27-.34-.27-.77 0-.87.37-1.31.36-.44.94-.44.27 0 .45.15.17.14.17.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.2.22.43.22.24 0 .43-.11t.35-.32q.33-.44.57-1l.1-.2q.03-.06.07-.06.05 0 .05.06 0 .4-.48 1.2-.53.84-1.3.84zm-.42-1.36q.47-.08.68-.3.23-.23.23-.58 0-.36-.23-.36-.28 0-.47.39-.2.38-.2.85z"/>
    <path d="M-55.45 32.15q-.45 0-.7-.33-.27-.34-.27-.77 0-.87.37-1.31.36-.44.94-.44.27 0 .44.15.18.14.18.4 0 .47-.4.8-.4.31-.98.33.03.3.2.54.19.22.42.22.24 0 .43-.11.2-.11.35-.32.34-.44.57-1l.1-.2q.04-.06.08-.06.05 0 .05.06 0 .4-.49 1.2-.52.84-1.3.84zm-.42-1.36q.47-.08.68-.3.22-.23.22-.58 0-.36-.23-.36-.28 0-.47.39-.19.38-.2.85z"/>
    <path d="m-53.48 31.68.01.25q0 .22-.12.22-.2 0-.37-.04-.17-.06-.17-.15l.04-.62q.04-.54.04-.81v-.47q0-.38.08-.46.08-.08.28-.23.2-.15.3-.15.09 0 .11.03.03.03.03.12 0 .42-.16.79-.04.45-.04.63l.33-.54q.3-.5.51-.72.21-.23.38-.23t.3.1q.13.12.13.28 0 .35-.08 1.04-.07.67-.07.85 0 .18.05.18.13-.01.37-.34t.47-.84q.24-.52.28-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34-.3 0-.46-.12-.06-.06-.06-.29 0-.24.04-.76.05-.53.05-.8 0-.26-.1-.26-.09 0-.47.55-.4.54-.42.7-.05.27-.05.51zm6.47.72.21-.03q.06 0 .06.06 0 .11-.15.17-.15.05-.34.05-.36 0-.6-.28-.24-.29-.67-1.06-.1-.17-.1-.25 0-.12.33-.28.54-.28.54-.7 0-.12-.09-.2-.08-.08-.21-.08-.19 0-.45.45-.26.44-.36.84-.09.39-.09.84 0 .22-.12.22-.19 0-.35-.04-.17-.06-.17-.14l.06-.75q.07-.68.08-.97.03-1.62.19-2.48.02-.07.21-.24.2-.18.32-.18t.1.3q0 .3-.12 1.27-.13.98-.16 1.79.15-.51.46-.96.31-.45.63-.45.54 0 .54.52 0 .35-.2.63-.21.28-.56.46-.07.03-.07.07l.02.08q.5.88.85 1.24.1.1.2.1zm2.65-2q.31-.11.43-.18l.2-.12.09-.06.06-.02q.07 0 .07.07t-.25.25q-.25.18-.61.32-.06.67-.42 1.08-.37.41-1.04.41-.5 0-.76-.39-.26-.4-.26-.92 0-.53.31-1 .32-.47.81-.47.22-.15.53-.15.3 0 .57.32.26.33.27.85zm-.52.4-.28.01q-.37 0-.62-.21-.26-.23-.26-.49t.09-.45q-.34.27-.34 1.06 0 .39.16.73.16.35.5.35.34 0 .53-.29.19-.3.22-.71zm-.5-1.32q-.12 0-.19.12-.07.1-.07.24 0 .3.2.48t.47.18h.1q-.02-.39-.14-.7-.1-.32-.36-.32z"/>
    <path d="m-42.1 30.18.05-.3q-.33-.06-.33-.35 0-.3.43-.3.4-2.04 1-2.04.13 0 .21.2.1.2.1.58 0 .38-.18.91t-.42.84l.02.05q.23.1.47.1.24 0 .38-.02l.16-.03q.1 0 .1.1 0 .09-.17.14-.16.04-.38.04-.21 0-.5-.09.24.67.24 1.74 0 1.06-.24 1.7-.23.63-.62.63-.23 0-.4-.15t-.17-.5q0-1.26.2-2.93-.23.12-.46.2.13.55.13 1.03 0 .49-.02.79-.01.3-.07.7-.05.4-.14.71-.09.3-.26.5-.16.22-.42.22-.24 0-.4-.16-.17-.17-.17-.67 0-1.41.16-3.07-.45-.18-.45-.65 0-.29.15-.48.14-.19.36-.19h.1q.11-.7.2-1.15.1-.45.34-.77.24-.32.46-.32.25 0 .25.57 0 .87-.65 1.99.2.21.36.66.27-.07.57-.23zm-1.18.63q-.08 1.09-.08 1.98 0 .89.02 1.22.02.33.11.33.24 0 .4-.7.14-.69.14-1.49t-.16-1.4q-.2.06-.43.06zm1.5 1.5q0 1.46.13 1.46.2 0 .34-.56.15-.57.15-1.28 0-1.5-.3-1.94l-.15.15q-.17 1.33-.17 2.17zm.44-2.78q.12-.1.31-.6.2-.52.2-.79 0-.51-.1-.51-.3 0-.57 1.71.08.07.16.2zm-1.22-1.69q0-.31-.07-.31-.13 0-.28.57-.14.57-.26 1.52.6-1.06.6-1.78zm-1.22 1.84q-.23 0-.23.23 0 .24.26.42l.07-.64-.1-.01zm.52.8.31-.02q-.11-.3-.25-.45l-.02.03-.04.44z"/>
    <path d="M-40.3 28.23q0-.14.15-.24.15-.1.27-.1.22 0 .22.24t-.13.43q-.13.17-.36.17-.15 0-.15-.5zm.23 3.92q-.3 0-.47-.12-.05-.06-.05-.4t.05-1.14q.05-.8.09-.86.04-.06.25-.24.2-.17.31-.17.12 0 .12.3 0 .08-.04.3-.04.24-.1.34-.1.26-.1 1.37 0 .22.04.22.14-.01.38-.34t.47-.84q.23-.52.28-.52.06 0 .06.06 0 .23-.23.7-.63 1.34-1.06 1.34z"/>
    <path d="M-38.24 32.15q-.44 0-.7-.33-.26-.34-.26-.77 0-.87.36-1.31.37-.44.95-.44.27 0 .44.15.18.14.18.4 0 .47-.4.8-.4.31-.99.33.04.3.21.54.18.22.42.22t.43-.11q.19-.11.35-.32.33-.44.57-1l.1-.2q.04-.06.08-.06t.04.06q0 .4-.48 1.2-.53.84-1.3.84zm-.42-1.36q.47-.08.69-.3.22-.23.22-.58 0-.36-.23-.36-.28 0-.47.39-.19.38-.2.85z"/>
  </g>`;
let bmcHeader = `<svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 738.83 153" fill="none">${bmcData}</svg>`;
let bmcFooter = `<svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 0 738.83 153" fill="none">${bmcData}</svg>`;

export default { bmcHeader, bmcFooter, strings, pageDetails };
