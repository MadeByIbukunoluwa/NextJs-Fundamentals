import {useRouter} from "next/router";


function clientProjectsPage () {
    const router = useRouter();

    console.log(router.query)

    function loadProjectHandler() {
      router.push('/clients/max/projecta')
      router.replace('/clients/max/projecta')
    }
    return (
      <div>
        <h1>clientIdHome</h1>
        <button onClick={loadProjectHandler}>LoadProject A </button>
      </div>
    );
}


export default clientProjectsPage


