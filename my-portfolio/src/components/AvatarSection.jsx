import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profile from '../assets/Profile.jpg';

const styles = { fallback: 'text-[90px] font-medium text-[#c7c7c7]' };

export const AvatarSection = () => {
  return (
    <Avatar>
      <AvatarImage src={profile} />
      <AvatarFallback className={styles.fallback}>KS</AvatarFallback>
    </Avatar>
  );
};
