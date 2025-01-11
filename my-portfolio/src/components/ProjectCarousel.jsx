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

const projects = [
  {
    title: 'Expense Tracker',
    image: expense,
    href: 'https://expense-tracker-fe-eight.vercel.app/',
  },
  {
    title: 'Blog Web',
    image: blogWeb,
    href: 'https://blog-web-psi-ten.vercel.app/',
  },
  {
    title: 'Unread Clone',
    image: unread,
    href: 'https://ksubi666.github.io/Unread/',
  },
  {
    title: 'Pinetour',
    image: pinetour,
    href: 'https://ksubi666.github.io/Pinetour/',
  },
  {
    title: 'Portfolio',
    image: portfolio,
    href: 'https://portfolio-ksubi666s-projects.vercel.app/',
  },

  {
    title: 'Todo App',
    image: todo,
    href: 'https://ksubi666.github.io/todo-list/',
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
                </div>
                <a href={project.href} target="_blank">
                  <img
                    src={project.image}
                    alt={`${project.title}'s image`}
                    className="object-cover rounded-2xl min-h-[700px]"
                  />
                </a>
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
