export interface Size{
    size: string,
    price: number
}

export interface Extra{
    name: string,
    price: number
}

export interface Dish {
    id: string,
    name: string,
    price: number,
    imageURL: string,
    category: string,
    sizes?: Size[]
    extras?: Extra[]
}

export interface ListedDish extends Dish {
    quantity?: number
    selectedSize?: Size
    selectedExtras?: Extra[]
    total?: number
}