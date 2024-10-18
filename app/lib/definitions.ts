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

export interface Branch{
    id: string,
    name: string,
    address: string,
    phone: string
}

export interface Order{
    id: string,
    branch: Branch,
    employee: string,
    customer: string,
    date: string,
    paymentMethod: string,
    dishes: ListedDish[],
    total: number
}

export interface Category{
    id: string,
    category:string
    createdAt: string
    restaurant_id: string
}