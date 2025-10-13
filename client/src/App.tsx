// import { Switch, Route } from "wouter";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { useAuth } from "@/hooks/useAuth";
// import Landing from "@/pages/landing";
// import Home from "@/pages/home";
// import Profile from "@/pages/profile";
// import Ratings from "@/pages/ratings";
// import Achievements from "@/pages/achievements";
// import Messages from "@/pages/Messages";
// import Premium from "@/pages/premium";
// import PremiumSuccess from "@/pages/premium-success";
// import NotFound from "@/pages/not-found";
// import Debug from "@/pages/debug";
// import Test from "@/pages/test";

// function Router() {
//   const { isAuthenticated, isLoading, user } = useAuth();

//   console.log('Router state:', { isLoading, isAuthenticated, hasUser: !!user });

//   // Show loading for any route while auth is being determined
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Switch>
//       <Route path="/test" component={Test} />
//       <Route path="/debug" component={Debug} />

//       {isAuthenticated ? (
//         <>
//           <Route path="/" component={Home} />
//           <Route path="/discover" component={Home} />
//           <Route path="/profile" component={Profile} />
//           <Route path="/ratings" component={Ratings} />
//           <Route path="/achievements" component={Achievements} />
//           <Route path="/messages" component={Messages} />
//           <Route path="/premium" component={Premium} />
//           <Route path="/premium-success" component={PremiumSuccess} />
//         </>
//       ) : (
//         <>
//           <Route path="/" component={Landing} />
//           <Route path="/discover" component={Landing} />
//           <Route path="/profile" component={Landing} />
//           <Route path="/ratings" component={Landing} />
//           <Route path="/achievements" component={Landing} />
//           <Route path="/messages" component={Landing} />
//           <Route path="/premium" component={Landing} />
//         </>
//       )}

//       <Route component={NotFound} />
//     </Switch>
//   );
// }
// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Router />
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }
// export default App;


import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Landing from "@/pages/landing";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Ratings from "@/pages/ratings";
import Achievements from "@/pages/achievements";
import Messages from "@/pages/Messages";
import Premium from "@/pages/premium";
import PremiumSuccess from "@/pages/premium-success";
import NotFound from "@/pages/not-found";
import Debug from "@/pages/debug";
import Test from "@/pages/test";

function Router() {
  const { isAuthenticated, isLoading, user } = useAuth();

  console.log('Router state:', { isLoading, isAuthenticated, hasUser: !!user, userEmail: user?.email });

  // Show loading screen while determining auth state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/test" component={Test} />
      <Route path="/debug" component={Debug} />

      {isAuthenticated ? (
        <>
          <Route path="/" component={Home} />
          <Route path="/discover" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/ratings" component={Ratings} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/messages" component={Messages} />
          <Route path="/premium" component={Premium} />
          <Route path="/premium-success" component={PremiumSuccess} />
        </>
      ) : (
        <>
          <Route path="/" component={Landing} />
          <Route path="/discover" component={Landing} />
          <Route path="/profile" component={Landing} />
          <Route path="/ratings" component={Landing} />
          <Route path="/achievements" component={Landing} />
          <Route path="/messages" component={Landing} />
          <Route path="/premium" component={Landing} />
        </>
      )}

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;