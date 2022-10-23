import {model_product_basket} from "../components/model_product_basket";

const defaultState={
    pizza:[<model_product_basket>{}],

    one_pizza:{}
}
export const reducer_basket=(state=defaultState,action: { type: any; payload: model_product_basket })=>{
    let simuliar_pizza=true;   //можно ли добавить новую питцу (есть ли похожие питцы)
    switch (action.type) {
        case "add_in_basket":
            for(let i=0;i<state.pizza.length;i++){         //пробег по массиву
                let one_pizza=state.pizza[i];               //извлекаем одну питцу
                if(one_pizza.name==action.payload.name && one_pizza.dough==action.payload.dough && one_pizza.lenght==action.payload.lenght){     //если она совпадает по имени с той, что прилетает в корзину
                    simuliar_pizza=false                      //есть похожие питцы
                    one_pizza.count=one_pizza.count+1        // то просто увеличиваем счетчик, но питцу не добавляем
                    return {
                        ...state, pizza: [...state.pizza]    //возвращаем массив
                    }
                }
                else{
                    simuliar_pizza=true  //можем добавить
                }
            }
            if(simuliar_pizza){   //если похожих питц нет, то добавляем питцу
                return {...state, pizza: [...state.pizza ,action.payload]}
            }
            return {}

        case "minus_count_pizza_basket":
            for(let i=0;i<state.pizza.length;i++){         //пробег по массиву
                let one_pizza=state.pizza[i];               //извлекаем одну питцу
                if(one_pizza.name==action.payload.name && one_pizza.dough==action.payload.dough && one_pizza.lenght==action.payload.lenght){     //если она совпадает по имени с той, что прилетает в корзину
                    if(one_pizza.count>1){
                        one_pizza.count=one_pizza.count-1        // то просто увеличиваем счетчик, но питцу не добавляем
                    }
                    return {
                        ...state, pizza: [...state.pizza]    //возвращаем массив
                    }
                }
            }
            return {}

        case "add_count_pizza_basket":
            for(let i=0;i<state.pizza.length;i++){         //пробег по массиву
                let one_pizza=state.pizza[i];               //извлекаем одну питцу
                if(one_pizza.name==action.payload.name && one_pizza.dough==action.payload.dough && one_pizza.lenght==action.payload.lenght){     //если она совпадает по имени с той, что прилетает в корзину
                        one_pizza.count=one_pizza.count+1        // то просто увеличиваем счетчик, но питцу не добавляем
                    return {
                        ...state, pizza: [...state.pizza]    //возвращаем массив
                    }
                }
            }
            return {}


        case "delete_in_basket":
            let index_pizza
            for(let i=0;i<state.pizza.length;i++){     //пробег по массиву
                let one_pizza=state.pizza[i];               //извлекаем одну питцу
                if(one_pizza.name==action.payload.name && one_pizza.dough==action.payload.dough && one_pizza.lenght==action.payload.lenght){     //если она совпадает  с той, что мы хотим удалить
                    index_pizza=i
                }
            }
            return {
                ...state, pizza: state.pizza.filter((item, index) => index !== index_pizza)
            }
                // ...state, pizza: state.pizza.filter((item, index) => index !== number_pizza)




        case "delete_first":
            return {
                ...state, pizza: state.pizza.filter((item, index) => index !== 0)
            }

        case "delete_all":
            // for(let i=0;i<state.pizza.length;i++){         //пробег по массиву
            //     let one_pizza=state.pizza[i];               //извлекаем одну пиццу
            //     if(one_pizza.name==action.payload.name && one_pizza.dough==action.payload.dough && one_pizza.lenght==action.payload.lenght){     //если она совпадает по имени с той, что прилетает в корзину
            //         simuliar_pizza=false                      //есть похожие пиццы
            //         one_pizza.count=one_pizza.count+1        // то просто увеличиваем счетчик, но пиццу не добавляем
            //         return {
            //             ...state, pizza: [...state.pizza]    //возвращаем массив
            //         }
            //     }
            //     else{
            //         simuliar_pizza=true  //можем добавить
            //     }
            // }
            return {
                ...state, pizza: []
            }
        default:
            return state
    }
}
