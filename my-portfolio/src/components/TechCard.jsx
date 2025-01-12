import { Button } from './ui/button';

const TechCard = ({ title, data, links }) => {
  return (
    <div className="w-full bg-white h-full rounded-3xl relative p-5 flex items-center justify-center">
      <Button className="absolute -top-3">{title}</Button>
      {links ? (
        <div className="h-full w-full flex items-center justify-center gap-6">
          {data?.map((el, i) => {
            return (
              <a key={i} href={el.href} target="_blank">
                <img src={el.image} className="w-14 h-14" />
              </a>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
          {data?.map((el, i) => {
            return (
              <img
                key={i}
                src={el.image}
                className="max-w-10 max-h-10 min-[1900px]:max-w-[60px] min-[1900px]:max-h-[60px]"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TechCard;
