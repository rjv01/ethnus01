import Axios from "axios";
import { useEffect,useState } from "react";


function F1(){
    //Axios only used in lifeCycle but here its not using lifeCycle
    //useEffect is used to handle this if LifeCycle is not used 

    //Axios.post(url,{newObj});
    //Axios.get(url);
    //Axios.put(url+id,(updObj))
    //Axios.delete(url+id);
    //Axios is used to sent HTTP req

    const [data,setData] = useState([]);
    
    useEffect(()=>{

        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200 ){ //200 ok //404 page not found //500 internal page error
                // res.data.forEach(i => {
                //     console.log(i);
                // });
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((error)=>{
            alert(error);
        })
    },[])

    const ListNames = ()=>{
        return data.map((val)=>{
            return <h1>{val.name}</h1>
        })
    }

    return(
        <div>
            <h1>Hello</h1>
            {ListNames()}
        </div>
    )
}

export default F1;