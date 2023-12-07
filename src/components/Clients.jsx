import { clients } from "../data";
import SectionTitle from "./SectionTitle";

const Clients = () => {
  return (
    <section className=' align-element ' id='skills'>
      <SectionTitle text='Clients' />
      <div className='py-16 grid grid-cols-2 gap-8 md:grid-cols-2'>
        {clients.map(client => {
          return (
            <article
              key={client.id}
              className='flex items-center justify-center bg-neutral-900 rounded-md'>
              <img src={client.img} alt='' width={200} height={200} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
