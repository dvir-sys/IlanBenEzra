import { Item } from "./item";

export interface List {
    id: number,
    items: Array<Item>,
    title: string,
    description: string,
    color: string,
    image: string
}