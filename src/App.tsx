import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import About from "./pages/About";
import LineCredit from "./pages/LineCredit";
import Loans from "./pages/Loans";
import Merchant from "./pages/Merchant";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";

const queryClient = new QueryClient();

const RouteWrapper = ({ children, headerTextColor }: { children: React.ReactNode, headerTextColor?: string }) => {
  return (
    <>
      <Header headerTextColor={headerTextColor} />
      {children}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <RouteWrapper headerTextColor="white">
              <Index />
            </RouteWrapper>
          } />
          <Route path="/get-started" element={
            <RouteWrapper headerTextColor="black">
              <GetStarted />
            </RouteWrapper>
          } />
          <Route path="/about" element={
            <RouteWrapper headerTextColor="white">
              <About />
            </RouteWrapper>
          }/>
          <Route path="/LineCredit" element={
            <RouteWrapper headerTextColor="white">
              <LineCredit />
            </RouteWrapper>
          } />
          <Route path="/business-term-loans" element={
            <RouteWrapper headerTextColor="white">
              <Loans />
            </RouteWrapper>
          } />
          <Route path="/merchant-cash-advance" element={
            <RouteWrapper headerTextColor="white">
              <Merchant />
            </RouteWrapper>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;