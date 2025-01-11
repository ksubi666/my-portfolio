const styles = {
  twoOfFour:
    'w-2/4 bg-[#F0F0F0] rounded-3xl p-6 min-[1900px]:p-12 flex flex-col gap-6 min-[1900px]:gap-12',
  fourOfFive:
    'w-4/5 bg-[#F0F0F0] rounded-3xl p-6 min-[1900px]:p-12 flex flex-col gap-6 min-[1900px]:gap-12',
  oneOfFive:
    'w-1/5 bg-[#F0F0F0] rounded-3xl p-6 min-[1900px]:p-12 flex flex-col gap-6 min-[1900px]:gap-12',
  half: 'w-1/2 bg-[#F0F0F0] rounded-3xl p-6 min-[1900px]:p-12 flex flex-col gap-6 min-[1900px]:gap-12',
};

export const InfoCard = ({
  twoOfFour,
  fourOfFive,
  oneOfFive,
  half,
  title,
  children,
}) => {
  const className =
    (twoOfFour && styles.twoOfFour) ||
    (fourOfFive && styles.fourOfFive) ||
    (oneOfFive && styles.oneOfFive) ||
    (half && styles.half);

  return (
    <div className={className}>
      <h1 className="text-[30px] font-medium min-[1900px]:text-[40px]">
        {title}
      </h1>
      {children}
    </div>
  );
};
