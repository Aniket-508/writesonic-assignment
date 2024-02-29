export type PathMap = {
  id?: number;
  name: React.ReactNode | string;
  icon?: string;
  url?: string;
  options?: Array<PathMap & { url: string }>;
};

const pathmap: PathMap[] = [
  {
    id: 1,
    name: "products",
    options: [
      {
        id: 10,
        name: "Chatsonic",
        url: "/chat",
      },
      {
        id: 20,
        name: "Botsonic",
        url: "/botsonic",
      },
      {
        id: 30,
        name: "Photosonic",
        url: "/photosonic",
      },
      {
        id: 40,
        name: "Audiosonic",
        url: "/audiosonic",
      },
    ],
  },
  {
    id: 2,
    name: "resources",
    options: [
      {
        id: 20,
        name: "Blog",
        url: "/blog",
      },
      {
        id: 21,
        name: "Guides and Tutorial",
        url: "/docs",
      },
      {
        id: 22,
        name: "API",
        url: "/api",
      },
      {
        id: 23,
        name: "Status",
        url: "/status",
      },
    ],
  },
  {
    id: 3,
    name: "company",
    options: [
      {
        id: 30,
        name: "Contact Us",
        url: "/contact-us",
      },
      {
        id: 31,
        name: "About Us",
        url: "/about-us",
      },
      {
        id: 32,
        name: "Careers",
        url: "/careers",
      },
    ],
  },
  {
    id: 4,
    name: "pricing",
    options: [
      {
        id: 40,
        name: "Writesonic",
        url: "/pricing",
        icon: "logo.svg",
      },
      {
        id: 41,
        name: "Botsonic",
        url: "/botsonic/pricing",
        icon: "botsonic-logo.svg",
      },
    ],
  },
  {
    id: 5,
    name: "affiliates",
    url: "/affiliates",
  },
];

export { pathmap };
