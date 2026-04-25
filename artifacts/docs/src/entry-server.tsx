import { renderToString } from 'react-dom/server';
import { Switch, Route, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Layout } from '@/components/Layout';
import Home from '@/pages/Home';
import Docs from '@/pages/Docs';
import Article from '@/pages/Article';
import Tools from '@/pages/Tools';
import ToolRouter from '@/pages/tools/ToolRouter';
import Templates from '@/pages/Templates';
import ProSystems from '@/pages/ProSystems';
import ProSystem from '@/pages/ProSystem';
import BusinessStarter from '@/pages/BusinessStarter';
import NotFound from '@/pages/not-found';
import { articles } from '@/data/articles';
import { tools } from '@/data/tools';
import { proSystems } from '@/data/proSystems';

export const ROUTES: string[] = [
  '/',
  '/docs',
  '/tools',
  '/templates',
  '/pro',
  '/pro/business-starter',
  ...articles.map((a) => `/docs/${a.slug}`),
  ...tools.map((t) => `/tools/${t.slug}`),
  ...proSystems
    .filter((p) => p.slug !== 'business-starter')
    .map((p) => `/pro/${p.slug}`),
];

export function render(url: string): string {
  const queryClient = new QueryClient();

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter ssrPath={url} base="">
          <Layout>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/docs" component={Docs} />
              <Route path="/docs/:slug" component={Article} />
              <Route path="/tools" component={Tools} />
              <Route path="/tools/:slug" component={ToolRouter} />
              <Route path="/templates" component={Templates} />
              <Route path="/pro" component={ProSystems} />
              <Route path="/pro/business-starter" component={BusinessStarter} />
              <Route path="/pro/:slug" component={ProSystem} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
