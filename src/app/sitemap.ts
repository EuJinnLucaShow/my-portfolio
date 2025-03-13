import { getPosts } from "@/app/utils/utils";
import { routes as routesConfig } from "@/app/resources";

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route]
  );

  const routes = activeRoutes.map((route) => ({
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}
