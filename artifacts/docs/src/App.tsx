import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";

// Home is static — it's the primary landing page, no round-trip delay for LCP
import Home from "@/pages/Home";

// All other routes are lazy — only their code loads when the user navigates there
const NotFound        = lazy(() => import("@/pages/not-found"));
const Docs            = lazy(() => import("@/pages/Docs"));
const Article         = lazy(() => import("@/pages/Article"));
const Tools           = lazy(() => import("@/pages/Tools"));
const ToolRouter      = lazy(() => import("@/pages/tools/ToolRouter"));
const Templates       = lazy(() => import("@/pages/Templates"));
const ProSystems      = lazy(() => import("@/pages/ProSystems"));
const ProSystem       = lazy(() => import("@/pages/ProSystem"));
const BusinessStarter = lazy(() => import("@/pages/BusinessStarter"));

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
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
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
