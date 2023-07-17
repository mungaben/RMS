


import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
// export default authMiddleware({});

// This example protects all routes except for the public routes
export default authMiddleware({
  publicRoutes: ["/","/DashBoard2"],
  ignoredRoutes: ["/((?!api|trpc))(_next|.+\..+)(.*)","/"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
