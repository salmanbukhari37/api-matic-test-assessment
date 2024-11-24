import Layout from "../layout/Layout";
import { AppRoute } from "../dto/types";
import { pagesContent } from "../dto/data";
import PageRenderer from "../components/PageRenderer";
import { Helmet } from "react-helmet";
import { eRoutes } from "dto/enum/Routes.enum";

// Extract the default page (Page-1) from the pagesContent
const defaultPage = pagesContent.Pages[0]; // Assuming "Page-1" is the first page

export const routes: AppRoute[] = [
  {
    label: defaultPage.title,
    path: "/",
    element: (
      <Layout>
        <Helmet>
          <title>
            {eRoutes.AppTitle} | {defaultPage.title}
          </title>
          <meta
            name="description"
            content={defaultPage.bodyText.slice(0, 150)}
          />
        </Helmet>
        <PageRenderer pageIndex={0} />
      </Layout>
    ),
  },
  ...pagesContent.Pages.slice(1).map((page: any, index: number) => ({
    label: page.title,
    path: `/${page.title.toLowerCase().replace(/\s+/g, "-")}`,
    element: (
      <Layout>
        <Helmet>
          <title>
            {eRoutes.AppTitle} | {page.title}
          </title>
          <meta name="description" content={page.bodyText.slice(0, 150)} />
        </Helmet>
        <PageRenderer pageIndex={index + 1} />{" "}
      </Layout>
    ),
  })),
];
