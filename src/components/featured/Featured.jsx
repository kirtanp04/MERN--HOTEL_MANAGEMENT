import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import "./Featured.css"
import {CircularProgress} from '@material-ui/core'
const Featured=()=>{
    const navigate=useNavigate();
    const {data,loading,error}=useFetch("/hotels/countByCity?cities=Anand,Vadodara,Rajkot")

    const handleclick=()=>{
        navigate("/hotels/anand")

    }
    const handleclick1=()=>{
        navigate("/hotels/vadodara")
        
    }
    const handleclick2=()=>{
        navigate("/hotels/rajkot")
        
    }
    
    return(
        <div className="featured">
            
            { loading ? < CircularProgress/> :(<><div className="featuredItem">
                <img src="https://i.ytimg.com/vi/Rjzm8KgxQqk/maxresdefault.jpg" alt="" 
                className="featuredImg"
                onClick={handleclick}
                 />
                <div className="featureTitles">
                    <h1>Anand</h1>
                    <h2>{data[0]} Properties</h2>


                </div>

                
            </div>
            <div className="featuredItem">
                <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/03/600x400-27.jpg" alt="" className="featuredImg"onClick={handleclick1} />
                <div className="featureTitles">
                    <h1>Vadodara</h1>
                    <h2>{data[1]} Properties</h2>


                </div>

                
            </div>
            <div className="featuredItem">
                <img src="https://architecture.live/wp-content/uploads/2022/02/001-2.jpg" alt="" className="featuredImg" onClick={handleclick2} />
                <div className="featureTitles">
                    <h1>Rajkot</h1>
                    <h2>{data[2]} Properties</h2>


                </div>

                
            </div></>)}
            
        </div>
    )
}
export default Featured