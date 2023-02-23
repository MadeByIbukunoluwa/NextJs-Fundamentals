
import { useRouter } from "next/router"



function clientProjectId() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>
        <h1>
        The project page for a specific Project for a selected client 
        </h1>
 </div>
  )
}


export default clientProjectId