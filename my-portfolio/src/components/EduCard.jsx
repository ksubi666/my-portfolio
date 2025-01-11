import { Heart } from 'lucide-react';

const styles = {
  container:
    'h-full w-fit bg-white rounded-3xl p-5 flex flex-col justify-between min-[1900px]:p-10',
  pinnedContainer:
    'h-full w-fit bg-[#28D979] rounded-3xl p-5 flex flex-col justify-between min-[1900px]:p-10 text-white',
  year: 'text-[18px] font-medium min-[1900px]:text-[32px]',
  tagContainer: 'flex flex-col',
  profession: 'text-[18px] font-medium min-[1900px]:text-[30px]',
  tags: 'text-[14px] text-[#149063] min-[1900px]:text-[20px]',
  pinnedTags: 'text-[14px] text-white min-[1900px]:text-[20px]',
  universityName: 'text-[16px] font-medium min-[1900px]:text-[24px]',
  heart: 'min-[1900px]:size-[36px]',
};
export const EduCard = ({ year, profession, tags, universityName, pinned }) => {
  return (
    <div className={pinned ? styles.pinnedContainer : styles.container}>
      {pinned ? (
        <div className="flex justify-between items-center">
          <h3 className={styles.year}>{year}</h3>
          <Heart fill="white" className={styles.heart} />
        </div>
      ) : (
        <h3 className={styles.year}>{year}</h3>
      )}
      <div className={styles.tagContainer}>
        <h4 className={styles.profession}>{profession}</h4>
        <label className={pinned ? styles.pinnedTags : styles.tags}>
          {tags}
        </label>
      </div>
      <h5 className={styles.universityName}>{universityName}</h5>
    </div>
  );
};
