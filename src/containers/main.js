import React, { useState, useEffect } from "react";
import WheelComponent from '../components/wheel'
import BasicMenu from '../components/manu'
import axios from 'axios';

function Wheel() {
    const [loadFlag, setLoadFlag] = useState(true);
    const [listName, setListName] = useState("general");
    const [listNameList, setListNameList] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    const [candidateList, setCandidateList] = useState([]);
    const [colorPalette, setcolorPalette] = useState([]);

    const defaultColorPalette = ["#ff9900", "#b36b00", "#ffe6bf", "#ffcc80", "#00b366", 
                                 "#007d48", "#bfffe4", "#80ffc9", "#400099", "#2d006b", 
                                 "#dabfff", "#b580ff" ]

    const repeatArray = (array, repeats) => {
        return  Array.from({ length: repeats }, () => array).flat();
    }

    const getRestaurant = () => {
        axios.get('https://opensheet.vercel.app/1wqfGJb1KAiTt2mhr2oQkfBbfiQrAJapH8BXQ196YZgo/restaurant')
        .then((res) => { 
            setRestaurantData(res.data);
        })
        .catch((error) => { 
            setLoadFlag(false);
            console.error(error);
            }
        )
    }

    const getCandidate = () => {
        let candidateTemp = [];
        if (restaurantData.length > 0) {
            setListNameList(Object.keys(restaurantData[0]));
        }
        restaurantData.forEach(element => {
            if (listName in element){
                if (element[listName] !== '') candidateTemp.push(element[listName]);
            }
        });
        setCandidateList(candidateTemp);
        let repeats = Math.ceil(candidateTemp.length / defaultColorPalette.length);
        setcolorPalette(repeatArray(defaultColorPalette, repeats));
    }

    const onFinished = (winner) => {
        console.log(winner)
      }

    useEffect(() => {
        getRestaurant();
    }, []);

    useEffect(() => {
        getCandidate();
        console.log(listName);
        console.log(candidateList);
    }, [restaurantData, listName]);

    

    return (
        candidateList.length > 0 ?(
        <div className='wheelwrapper'>
            {/*<BasicMenu restaurantListList={listNameList} setListName={setListName} currentListName={listName}/>*/}
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
                downDuration={600}
                fontFamily='Arial'
            />
        </ div>
        ) : (loadFlag ? (<p>Loading ...</p>):(<p>Error!</p>))
    );

}

export default Wheel;