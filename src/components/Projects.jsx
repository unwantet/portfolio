import Card from "./Card";

const projects = [
  {
    title: "GSearch",
    bgImg: "/public/projects/github%20searcher.png",
    img: "/public/search-ico (1).png",
    vercel: "https://github-demo-io.vercel.app/",
    github: "https://github.com/unwantet/github-searcher",
    description:
      "GitHub User Searcher - это инструмент, разработанный для быстрого и удобного поиска пользователей на платформе GitHub. Этот проект позволяет находить профили пользователей по различным критериям, таким как имя пользователя, репозитории и другая информация, доступная в профилях GitHub.",
    },
    {
        title: "GSearch",
        bgImg: "/public/projects/github%20searcher.png",
        img: "/public/search-ico (1).png",
        vercel: "https://github-demo-io.vercel.app/",
        github: "https://github.com/unwantet/github-searcher",
        description:
          "GitHub User Searcher - это инструмент, разработанный для быстрого и удобного поиска пользователей на платформе GitHub. Этот проект позволяет находить профили пользователей по различным критериям, таким как имя пользователя, репозитории и другая информация, доступная в профилях GitHub.",
        },
    
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-10">
      {projects.map((project) => (
        <div>
          <Card project={project} />
        </div>
      ))}
    </div>
  );
}
