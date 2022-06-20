import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useRecoilState, useRecoilValue } from "recoil"
import {foodItems} from "../../Atom/Atom"

function Home() {
    const {item, setItem} = useState("")
    const [_, setFoodItems] = useRecoilState(foodItems)

    const getItemsList = useRecoilValue(foodItems)

    const [id, setId] = useState("")
    const handleChange =(e) => {
        setItem({...item, [e.target.name]:e.target.value})
    }
    const addItem = () => {
        if(item){
            setFoodItems((oldItems) => [
                ...oldItems,
                {
                    id:id,
                    text:item,
                    icComplete: false
                }
            ])

        }
        console.log(getItemsList)
    }
    const addId =(e)=> {
        setId(e.target.value)
    }



    const DisplayItem = (item ) => {
        return 
       { <div className="row">
            <p>{item.id} {item.text}</p>
        </div>}
    }
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <h1>HOME</h1>
            </div>
            <div className="row">
                <input type="text" onChange={(e) => addId(e)} />
                <input name="item1" value={item} type="text" onChange={(e) => handleChange(e)} />
                <button onClick={addItem}>Add Item</button>
            </div>
            {/* <div className="row">
                {getItemsList.length>0 && (
                    <div className="row">
                        {
                            getItemsList.map(item => {
                                <DisplayItem key={item.id} item={item} />
                            })
                        }
                    </div>
  )}
            </div> */}
        </div>

    </div>
  )
}

export default Home