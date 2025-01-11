import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profile from '../assets/Profile.jpg';

export const AvatarSection = () => {
  return (
    <Avatar>
      <AvatarImage src={profile} />
      <AvatarFallback>KS</AvatarFallback>
    </Avatar>
  );
};
