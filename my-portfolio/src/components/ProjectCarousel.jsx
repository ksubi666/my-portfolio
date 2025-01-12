import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { GithubIcon } from '@/assets/GithubIcon';
import { Link } from 'lucide-react';
import { projects } from '@/assets';

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
