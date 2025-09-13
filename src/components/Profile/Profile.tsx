import { memo } from 'react';
import type { IProfileProps } from './Profile.types';
import { StyledText } from '../StyledText';

const Profile = memo<IProfileProps>(({ imgSrc, description }) => (
  <section className="flex flex-col items-center justify-center">
    <div className='mb-4'><img src={imgSrc} /></div>

    <StyledText text={description} />
  </section>
));

Profile.displayName = 'Profile';

export default Profile;
