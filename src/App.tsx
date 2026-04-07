import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import DataEntry from "./pages/DataEntry.tsx";
import InternetResearch from "./pages/InternetResearch.tsx";
import ContentCreation from "./pages/ContentCreation.tsx";
import EmailSupport from "./pages/EmailSupport.tsx";
import VirtualAssistance from "./pages/VirtualAssistance.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/data-entry" element={<DataEntry />} />
          <Route path="/research" element={<InternetResearch />} />
          <Route path="/content" element={<ContentCreation />} />
          <Route path="/email-support" element={<EmailSupport />} />
          <Route path="/virtual-assistance" element={<VirtualAssistance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
