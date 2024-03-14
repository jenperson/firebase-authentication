import { SquidContextProvider } from '@squidcloud/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SquidContextProvider
    options={{
      appId: 'YOUR_APP_ID',
      region: 'us-east-1.aws', // example: 'us-east-1.aws'
      environmentId: 'dev', // choose one of 'dev' or 'prod'
      squidDeveloperId: 'YOUR_SQUID_DEVELOPER_ID', // for local development only
    }}
  >
    <App />
  </SquidContextProvider>
);
