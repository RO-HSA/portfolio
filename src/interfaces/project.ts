import { ProjectBannerProps } from '@/components/ui/project-banner';

export interface Projects extends ProjectBannerProps {
  stack?: 'frontend' | 'backend' | 'fullstack';
}
