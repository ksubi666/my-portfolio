const styles = {
  container:
    'h-full w-fit bg-white rounded-3xl p-5 flex flex-col justify-between 2xl:p-10',
  year: 'text-[18px] font-medium 2xl:text-[32px]',
  tagContainer: 'flex flex-col',
  profession: 'text-[18px] font-medium 2xl:text-[30px]',
  tags: 'text-[14px] text-[#149063]  2xl:text-[22px]',
  universityName: 'text-[16px] font-medium 2xl:text-[24px]',
};
export const EduCard = ({ year, profession, tags, universityName }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.year}>{year}</h3>
      <div className={styles.tagContainer}>
        <h4 className={styles.profession}>{profession}</h4>
        <label className={styles.tags}>{tags}</label>
      </div>
      <h5 className={styles.universityName}>{universityName}</h5>
    </div>
  );
};
