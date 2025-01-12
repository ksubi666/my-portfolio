import { InfoCard } from './InfoCard';
import { ProjectCarousel } from './ProjectCarousel';
import TechCard from './TechCard';
const dataWithImages = [
  {
    name: 'CSS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'HTML',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'NodeJS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'JavaScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'ReactJS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'TailwindCSS',
    image:
      'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png',
  },
  {
    name: 'NextJS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'TypeScript',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'ShadcnUI',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjouFTAB2PcXfnfkjy1SUjkaMeaymXnzoOA&s',
  },
  {
    name: 'Vercel',
    image:
      'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico',
  },
  {
    name: 'Figma',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Cypress',
    image:
      'https://yt3.googleusercontent.com/iD0oePTGV8tZwEEP_WEG2rvyNiQAVfmjhawFMCj17ARjjmw-J70k9NDjSE5QTzD9Vk3ayBU=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    name: 'PostgreSQL',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  { name: 'Neon.tech', image: 'https://neon.tech/favicon.ico' },
  {
    name: 'ExpressJS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'REST API',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJoxiAXVIxedd5WnxL3yepJpACK2lmCSl9w&s',
  },
  {
    name: 'MongoDB',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Mongoose',
    image: 'https://avatars.githubusercontent.com/u/7552965?s=200&v=4',
  },
  {
    name: 'GraphQL',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'Apollo GraphQL',
    image: 'https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg',
  },
  {
    name: 'Jest',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    name: 'NPM',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  },
  {
    name: 'NX',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlITmCFPf1iGcgyhmnVQkXJnVMb42qtp_9Zg&s',
  },
  {
    name: 'GitHub',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'ESLint',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
  },
  {
    name: 'Cloudflare',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaQqABKT1-8jjuiFfj1Wn1OqKUBIatY6ZHw&s',
  },
  {
    name: 'Cloudinary',
    image:
      'https://logowik.com/content/uploads/images/cloudinary-icon8821.logowik.com.webp',
  },
  { name: 'JWT', image: 'https://jwt.io/img/pic_logo.svg' },
];

const styles = { container: 'flex gap-10 w-full h-fit' };

export const ProjectsAndTechSection = () => {
  return (
    <div className={styles.container}>
      <InfoCard fourOfFive title={'Projects'}>
        <ProjectCarousel />
      </InfoCard>
      <InfoCard oneOfFive>
        <TechCard title={'Skills'} data={dataWithImages} />
      </InfoCard>
    </div>
  );
};
