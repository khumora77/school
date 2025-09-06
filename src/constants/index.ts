
export const navLink = [
  { name: "home", route: "/" },
  {
    name: "about", route:"/about"
   
  },
  { name: "contact", route: "/contact" },

  {
    name:"news", route:"/news"
  },
  {name:"achievements", 
     dropdown: [
      { name: "teachers", route: "/teachers" },
      { name: "pupils", route: "/pupils" },
    ],
  }
];


export const lngs = [
  { route: "en", label: "English" },
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
];


export const messages = [
  {
    id: "8382",
    name: "qweer",
    email: "teamsoft1314@gmail.com",
    message: "dsavsa",
  },
] as const;

export const cards = [
  { id: "01", image: "/src/assets/teachers/image.png" },
  { id: "03", image: "/src/assets/teachers/image copy 2.png" },
  { id: "04", image: "/src/assets/teachers/image copy 3.png" },
  { id: "05", image: "/src/assets/teachers/image copy 4.png" },
  { id: "06", image: "/src/assets/teachers/image copy 5.png" },
  { id: "07", image: "/src/assets/teachers/image copy 6.png" },
  { id: "08", image: "/src/assets/teachers/image copy 7.png" },
  { id: "09", image: "/src/assets/teachers/image copy 8.png" },
] as const;

export const pupils = [
  { id: "01", image: "/src/assets/pupils/image.png" },
  { id: "02", image: "/src/assets/pupils/image copy.png" },
  { id: "03", image: "/src/assets/pupils/image copy 9.png" },
  { id: "04", image: "/src/assets/pupils/image copy 2.png" },
  { id: "05", image: "/src/assets/pupils/image copy 3.png" },
  { id: "06", image: "/src/assets/pupils/image copy 4.png" },
  { id: "07", image: "/src/assets/pupils/image copy 5.png" },
] as const;

export const news = [
  {
    id: "01",
    title: "news1.title1",
    text: "news1.text1",
    link: "https://job.piima.uz/",
    image: "/src/assets/news/image copy 3.png",
  },
  {
    id: "02",
    title: "news1.title2",
    text: "news1.text2",
    link: "https://ariza.piima.uz/application/cabinet",
    image: "/src/assets/news/image copy 4.png",
  },
  {
    id: "03",
    title: "news1.title3",
    text: "news1.text3",
    link: "https://ariza.piima.uz/application/cabinet",
    image: "/src/assets/news/image.png",
  },
  {
    id: "04",
    title: "news1.title4",
    text: "news1.text4",
    link: "https://job2.piima.uz/",
    image: "/src/assets/news/image copy.png",
  },
  {
    id: "05",
    title: "news1.title5",
    text: "news1.text5",
    link: "https://ariza.piima.uz/application/main",
    image: "/src/assets/news/image copy 2.png",
  },
];



