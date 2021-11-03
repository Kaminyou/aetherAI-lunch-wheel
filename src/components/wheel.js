import React, { useState, useEffect } from "react";
import WheelComponent from 'react-wheel-of-prizes'
import axios from 'axios';

function Wheel() {

    const [listName, setListName] = useState("general");
    const [restaurantData, setRestaurantData] = useState([]);
    const [candidateList, setCandidateList] = useState([]);

    const getRestaurant = () => {
        axios.get('https://opensheet.vercel.app/1wqfGJb1KAiTt2mhr2oQkfBbfiQrAJapH8BXQ196YZgo/restaurant')
        .then((res) => { 
            setRestaurantData(res.data);
        })
        .catch(
            (error) => { console.error(error) }
        )
    }

    const getCandidate = () => {
        let candidateTemp = [];
        restaurantData.forEach(element => {
            if (listName in element){
                if (element[listName] !== '') candidateTemp.push(element[listName]);
            }
        });
        setCandidateList(candidateTemp);
    }

    const onFinished = (winner) => {
        console.log(winner)
      }

    useEffect(() => {
        getRestaurant();
    }, []);

    useEffect(() => {
        getCandidate();
        console.log(candidateList)
    }, [restaurantData]);

    const colorPalette = [ "#ff9900", "#b36b00", "#ffe6bf", "#ffcc80", "#00b366", 
                           "#007d48", "#bfffe4", "#80ffc9", "#400099", "#2d006b", 
                           "#dabfff", "#b580ff" ]

    return (
        candidateList.length > 0 ?(
        <div className='wheelwrapper'>
            <WheelComponent
                segments={candidateList}
                segColors={colorPalette}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce={false}
                size={200}
                upDuration={100}
                downDuration={1000}
                fontFamily='Arial'
                />
        </ div>
        ) : (<p>Error</p>)
    );

}

export default Wheel;