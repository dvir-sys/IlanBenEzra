import { ListItem } from "./listItem";

export interface TaskList {
    id: number,
    items: Array<ListItem>,
    title: string,
    description: string,
    color: string,
    image: string
}