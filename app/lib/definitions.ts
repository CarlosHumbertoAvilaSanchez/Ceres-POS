interface Size{
    size: string,
    price: number
}

interface Extra{
    name: string,
    price: number
}

export interface Dish {
    id: string,
    name: string,
    price: number,
    imageURL: string,
    category: string,
    quantity?: number
    sizes?: Size[]
    extras?: Extra[]
}

export interface ListedDish extends Dish {
    quantity: number
    selectdSize?: Size
    selectedExtras?: Extra[]
    total: number
}