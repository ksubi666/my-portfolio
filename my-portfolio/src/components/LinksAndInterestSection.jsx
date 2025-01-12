import { InterestData, linksData } from '@/assets';
import { InfoCard } from './InfoCard';
import { Interests } from './Interests';
import { TechCard } from './TechCard';

const styles = {
  container: 'flex gap-10 w-full min-h-[350px] min-[1900px]:h-[400px] ',
  textContainer:
    'h-full w-full bg-black rounded-3xl p-6 text-white flex flex-col justify-between',
};

export const LinksAndInterestSection = () => {
  return (
    <div className={styles.container}>
      <InfoCard twoOfFour>
        <TechCard title={'Links'} data={linksData} links />
      </InfoCard>
      <InfoCard half title={'Interests'}>
        <Interests data={InterestData} />
        <div className={styles.textContainer}>
          <h2 className="text-[20px]">
            Let´s chat! I´m ready to work on excinting projects
          </h2>
          <label>ksubi666@gmail.com</label>
        </div>
      </InfoCard>
    </div>
  );
};
