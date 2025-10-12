import { StyledText } from '@/components';
import { memo } from 'react';

const ProjectContent = memo(() => <StyledText>test</StyledText>);

ProjectContent.displayName = 'ProjectContent';

export default ProjectContent;
