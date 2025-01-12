import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import expense from '../assets/ExpenseTracker.png';
import blogWeb from '../assets/BlogWeb.png';
import pinetour from '../assets/pinetour.png';
import portfolio from '../assets/Portfolio.png';
import unread from '../assets/Unread.png';
import todo from '../assets/toDoList.png';
import { GithubIcon } from '@/assets/GithubIcon';
import { Link } from 'lucide-react';

const projects = [
  {
    title: 'Expense Tracker',
    image: expense,
    href: 'https://expense-tracker-fe-eight.vercel.app/',
    github: 'https://github.com/ksubi666/expense-tracker',
  },
  {
    title: 'Blog Web',
    image: blogWeb,
    href: 'https://blog-web-psi-ten.vercel.app/',
    github: 'https://github.com/ksubi666/blog-web',
  },
  {
    title: 'Unread Clone',
    image: unread,
    href: 'https://ksubi666.github.io/Unread/',
    github: 'https://github.com/ksubi666/Unread',
  },
  {
    title: 'Pinetour',
    image: pinetour,
    href: 'https://ksubi666.github.io/Pinetour/',
    github: 'https://github.com/ksubi666/Pinetour',
  },
  {
    title: 'Portfolio',
    image: portfolio,
    href: 'https://portfolio-ksubi666s-projects.vercel.app/',
    github: 'https://github.com/ksubi666/Portfolio',
  },

  {
    title: 'Todo App',
    image: todo,
    href: 'https://ksubi666.github.io/todo-list/',
    github: 'https://github.com/ksubi666/todo-list',
  },
];
export const ProjectCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {projects?.map((project, i) => {
          return (
            <CarouselItem key={i}>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-[24px] font-medium px-4">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-5">
                    <a href={project.href} target="_blank">
                      <Link size={30} />
                    </a>
                    <a href={project.github} target="_blank">
                      <GithubIcon />
                    </a>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={`${project.title}'s image`}
                  className="object-cover rounded-2xl min-h-[700px]"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
