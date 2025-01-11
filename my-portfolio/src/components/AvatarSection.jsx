import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import profile from '../assets/Profile.jpg';

export const AvatarSection = () => {
  return (
    <Avatar>
      <AvatarImage src={profile} />
      <AvatarFallback className="text-[90px] font-medium text-[#c7c7c7]">
        KS
      </AvatarFallback>
    </Avatar>
  );
};
