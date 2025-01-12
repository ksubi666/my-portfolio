import { Button } from './ui/button';

const styles = {
  container:
    'w-full bg-white h-full rounded-3xl relative p-5 flex items-center justify-center',
  button: 'absolute -top-3',
  linkContainer: 'h-full w-full flex items-center justify-center gap-6',
  imgContainer: 'grid grid-cols-2 gap-x-10 gap-y-4',
  img: 'max-w-10 max-h-10 min-[1900px]:max-w-[60px] min-[1900px]:max-h-[60px]',
};

export const TechCard = ({ title, data, links }) => {
  return (
    <div className={styles.container}>
      <Button className={styles.button}>{title}</Button>
      {links ? (
        <div className={styles.linkContainer}>
          {data?.map((el, i) => {
            return (
              <a key={i} href={el.href} target="_blank">
                <img src={el.image} className="w-14 h-14" />
              </a>
            );
          })}
        </div>
      ) : (
        <div className={styles.imgContainer}>
          {data?.map((el, i) => {
            return <img key={i} src={el.image} className={styles.img} />;
          })}
        </div>
      )}
    </div>
  );
};
