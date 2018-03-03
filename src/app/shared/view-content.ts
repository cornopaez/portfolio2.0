export class ViewContent {
  route: string
  view_title: string
  navbar: {
    title: string,
    links: string[]
  }
  content: {
    icons: string[],
    image: string,
    description: string,
    points: [
      {
        title: string,
        description: string,
        finer_points: string[]
      }
    ],
    source: string,
    footer: string,
    description_links: string[]
  }
  footer: {
    links: string[]
  }
}