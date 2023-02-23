import Link from "next/link"

function ClientsPage() {
    const clients = [
        {id:"max",name:"Maximilian"},
        {id:"manu",name:"Manuel"}
    ] 
    return (
      <div>
        <h1>Client Page </h1>
        <ul>
          {/* <li>
            <Link href="/clients/max">Maximilian</Link>
          </li>
          <li>
            <Link href="/clients/max">Manuel</Link>
          </li> */}
          {clients.map((client)=> {
           return  <li key={client.id}>
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              <Link href={{
                pathname:'/clients/[id]',
                query:{id:client.id}
              }}>{client.name}</Link>
            </li>;
          })}
        </ul>
      </div>
    );
}

export default ClientsPage