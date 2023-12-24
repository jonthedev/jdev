import { clients } from "~/data/clients"

import SectionTitle from "~/components/SectionTitle"

const Clients = () => {
  return (
    <section className='align-element' id='skills'>
      <SectionTitle text='Clients' />
      <div className='py-16 grid grid-cols-2 gap-8 md:grid-cols-2'>
        {clients.map(client => {
          return (
            <article
              key={client.id}
              className='flex items-center justify-center bg-slate-50 rounded-md'>
              {client.img}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Clients
