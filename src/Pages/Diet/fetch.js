import { useEffect, useState } from 'react';
import api from '../../api'

export default function FindFoodByBlood(blood){
    const [lists, setLists] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/api/foodlists')
                setLists(response.data)
            }
            catch(error){
                console.error(error)
            }
        }

        fetchData()
    }, [])

    const blood_type ="group "+ blood;
    const result = {good:[],bad:[],normal:[]};
    for(let i in lists){
        if(lists[i].hasOwnProperty(blood_type)){
            if(lists[i][blood_type] === 'O')
            {
                result.normal.push({food:Object.values(lists[i])[0],food_type: Object.entries(lists[i])[0][0]})
            } 
            else if(lists[i][blood_type] === 'X')
            {
                result.bad.push({food:Object.values(lists[i])[0],food_type: Object.entries(lists[i])[0][0]})
            } 
            else if(lists[i][blood_type] === '+'){
                result.good.push({food:Object.values(lists[i])[0],food_type: Object.entries(lists[i])[0][0]})
            } 
        }
    }

    
    return result;
}

const uniqueSorter = (foodArr) => {
    let sortedFoods = foodArr.sort()
    foodArr = sortedFoods.filter((food, index) => {
        return index === sortedFoods.indexOf(food)
    });
    return foodArr
}

export function structurize(result){
    // const subResult = [];
    let goodArr = [];
    let normalArr = [];
    let badArr = [];
    for(let i=0; i<result.good.length; i++){
        // subResult[i] = {good:result.good[i].food}
        goodArr.push(result.good[i].food)
    }
    for(let i=0; i<result.bad.length; i++){
        // subResult[i] = {...subResult[i], bad:result.bad[i]?.food}
        badArr.push(result.bad[i].food)
    }
    for(let i=0; i<result.normal.length; i++){
        // subResult[i] = {...subResult[i], normal:result.normal[i]?.food}
        normalArr.push(result.normal[i].food)
    }

    goodArr = uniqueSorter(goodArr)
    badArr = uniqueSorter(badArr)
    normalArr = uniqueSorter(normalArr)

    return [
        goodArr,
        badArr,
        normalArr
    ]
}