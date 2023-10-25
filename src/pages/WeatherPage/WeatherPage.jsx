import WeatherForm from "../../components/WeatherForm/WeatherForm"
export default function WeatherPage(){

    const handleonSearchChange = (searchData) =>{
        console.log(searchData)
    }

    return (
      <div>
        <WeatherForm onSearchChange={handleonSearchChange}/>
      </div>  
    );
}