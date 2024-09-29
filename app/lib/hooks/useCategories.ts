import {useContext} from 'react'
import {CategoriesContext} from '@lib/context/category'
import type { Dish } from "@types"

export function useCategories(){
    const {activeCategory, setActiveCategory} = useContext(CategoriesContext)
  
    const filterDishes = (dishes: Dish[]) => {
        if(activeCategory === 'Todos'){
            return dishes
        }
        return dishes.filter(dish => dish.category === activeCategory)
    }
  
    return {filterDishes, activeCategory, setActiveCategory}
  }