import { Item } from "./item";

export interface TaskList {
    id: number,
    items: Array<Item>,
    title: string,
    description: string,
    color: string,
    image: string
}