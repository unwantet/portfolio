import Card from "./Card";

const projects = [
  {
    title: "GSearch",
    bgImg: "/public/projects/githubsearcher.png",
    vercel: "https://github-demo-io.vercel.app/",
    github: "https://github.com/unwantet/github-searcher",
    description:
      "GitHub User Searcher - это инструмент, разработанный для быстрого и удобного поиска пользователей на платформе GitHub. Этот проект позволяет находить профили пользователей по различным критериям, таким как имя пользователя, репозитории и другая информация, доступная в профилях GitHub.",
    },
    {
        title: "Password Generator",
        bgImg: "public/projects/password.png",
        vercel: "https://password-generator-betav1.vercel.app/",
        github: "https://github.com/unwantet/password-generator",
        description:'',
    },
    {
      title: "NEXT JS Dummy",
      bgImg: "public/projects/next js dummy.png",
      vercel: "https://next-js-dummy-sage.vercel.app/",
      github: "https://github.com/unwantet/next.js-dummy",
      description:'',
  },
    
];

export default function Projects() {
  return (
    <div className="flex flex-col-reverse items-center gap-10">
      {projects.map((project) => (
        <div>
          <Card project={project} />
        </div>
      ))}
    </div>
  );
}
