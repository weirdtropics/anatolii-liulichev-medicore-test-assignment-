import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Outlet } from 'react-router-dom';

export default function ToolpadDashboardLayout() {
  return (
    <DashboardLayout>
<PageContainer
  breadcrumbs={[]}
  title=""
  sx={{
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0 2vw',
    [`@media (min-width: 1920px)`]: {
      maxWidth: '100%',
    },
    [`@media (min-width: 2560px)`]: {
      maxWidth: '80%',
    },
    [`@media (min-width: 3200px)`]: {
      maxWidth: '75%',
    },
    [`@media (min-width: 5120px)`]: {
      maxWidth: '70%',
    },
    [`@media (min-width: 7680px)`]: {
      maxWidth: '65%',
    },
    [`@media (min-width: 10240px)`]: {
      maxWidth: '60%',
    },
  }}
>
  <Outlet />
</PageContainer>
    </DashboardLayout>
  );
}
