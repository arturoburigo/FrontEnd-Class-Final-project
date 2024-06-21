import CarCard from "../components/CarCard";
import Header from "../components/Header";
import classes from "./Home.module.css"

export default function Home(){
    return (
        <div className={classes}> 
            <Header/>
            <CarCard/>
        </div>
    )
}