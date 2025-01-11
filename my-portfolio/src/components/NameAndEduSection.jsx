import { AvatarSection } from './AvatarSection';
import { EduCard } from './EduCard';
import { InfoCard } from './InfoCard';

const styles = {
  container: 'flex gap-10 w-full',
  cardContainer:
    'w-[calc(25%-40px)] min-h-1/4 bg-[#F0F0F0] rounded-3xl p-6 flex flex-col justify-between min-[1900px]:p-12',
  h3: 'text-[28px] font-medium min-[1900px]:text-[40px]',
  textContainer: 'flex flex-col gap-3',
  h1: 'text-[28px] font-semibold min-[1900px]:text-[36px]',
  h2: 'text-[24px] font-medium text-[#5C5C5C] min-[1900px]:text-[30px]',
  eduContainer: 'flex gap-5 h-full min-[1900px]:gap-10',
};

export const NameAndEduSection = ({ name, profession }) => {
  return (
    <div className={styles.container}>
      <AvatarSection />
      <div className={styles.cardContainer}>
        <h3 className={styles.h3}>Hello 👋🏻 I’m</h3>
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>{name}</h1>
          <h2 className={styles.h2}>{profession}</h2>
        </div>
      </div>
      <InfoCard twoOfFour title={'Education'}>
        <div className={styles.eduContainer}>
          <EduCard
            year={'2020 - 2024'}
            profession={'Fashion Design'}
            tags={'#Fashion #Design #Art #Style #Illustration'}
            universityName={'MUST'}
          />
          <EduCard
            pinned
            year={'2024'}
            profession={'Full-Stack Developer'}
            tags={
              '#Fullstack #Frontend #Frontend #Coding #Developer #Javascript #Typescript'
            }
            universityName={'Pinecone Academy'}
          />
        </div>
      </InfoCard>
    </div>
  );
};
