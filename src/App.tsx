import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DataEntry from "./pages/DataEntry";
import InternetResearch from "./pages/InternetResearch";
import ContentCreation from "./pages/ContentCreation";
import EmailSupport from "./pages/EmailSupport";
import VirtualAssistance from "./pages/VirtualAssistance";
import About from "./pages/About";

const queryClient = new QueryClient();

const basename = import.meta.env.BASE_URL.startsWith("/") ? import.meta.env.BASE_URL : undefined;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/research" element={<InternetResearch />} />
            <Route path="/content" element={<ContentCreation />} />
            <Route path="/email-support" element={<EmailSupport />} />
            <Route path="/virtual-assistance" element={<VirtualAssistance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
