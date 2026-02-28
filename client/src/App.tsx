import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import CollaborationModels from "./pages/CollaborationModels";
import UseCases from "./pages/UseCases";
import Research from "./pages/Research";
import Technical from "./pages/Technical";
import Roadmap from "./pages/Roadmap";
import FAQ from "./pages/FAQ";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/models" component={CollaborationModels} />
        <Route path="/use-cases" component={UseCases} />
        <Route path="/research" component={Research} />
        <Route path="/technical" component={Technical} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/faq" component={FAQ} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
