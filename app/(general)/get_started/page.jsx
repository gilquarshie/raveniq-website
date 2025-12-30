import { client } from '@/sanity/lib/client';
import GetStartedWrapper from './getstartedwrapper';

export default async function GetStarted() {
    const services = await client.fetch(`*[_type == 'services' && defined(slug.current)][0]`);
  const {title, shortDescription, cta, pricingPlans} = services;

  return (
  <div>
   <GetStartedWrapper title={title} shortDescription={shortDescription} cta={cta} pricingPlans={pricingPlans} />
  </div>
  )
}