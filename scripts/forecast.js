const key ='RhFU7SUHveWLBzHIRNV9YDxsjesYARXd';

const get_city=async (city)=>
{
   const base="http://dataservice.accuweather.com/locations/v1/cities/search";

   const query =`?apikey=${key} &q=${city}`;
   console.log(key)
   const response = await fetch(base+query);
   const data = await response.json();
    
   return data[0];
}
 const get_weather=async (id)=>
 {
    const base=`http://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query=`?apikey=${key}`;

    const response=await fetch(base+query);
    const data=await response.json();
    return data[0];
 }

