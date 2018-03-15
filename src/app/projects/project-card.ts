export class ProjectCard {
    title : string
    subtitle? : string
    custom_html?: string
    image?: string
    icons? : {
      class_name?: string
      icons: string[]
    }
    card_class?: string
}
