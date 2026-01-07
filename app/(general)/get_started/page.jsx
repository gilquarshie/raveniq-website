import { client } from '@/sanity/lib/client';
import GetStartedWrapper from './getstartedwrapper';

export default async function GetStarted() {
    const services = await client.fetch(`*[_type == 'services']`);

    let object = []
    
  services.map((service) => {
    object.push({title: service.title, shortDescription: service.shortDescription, cta: service.cta, pricingPlans: service.pricingPlans})
  })
  // services.map((service) => {
  //   title.push(service.title);
  //   shortDescription.push(service.shortDescription);
  //   cta.push(service.cta);
  //   pricingPlans.push(service.pricingPlans);
  // })

  return (
  <div>
   <GetStartedWrapper object={object} />
  </div>
  )
}