import { Button } from './ui/button';

const styles = { container: 'h-fit w-full flex flex-wrap gap-4' };

export const Interests = ({ data }) => {
  return (
    <div className={styles.container}>
      {data?.map((interest, i) => {
        return (
          <Button variant="interest" key={i}>
            {interest}
          </Button>
        );
      })}
    </div>
  );
};
