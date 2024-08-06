import React from 'react'
import PlansCard from './plansCard'

const PopularPlansHome = (serviceData) => {
  return (
    <div className="flex justify-center mb-20">
    {serviceData?.servicePlans?.map((plan, index) => (
      <PlansCard key={plan.id} plan={plan} index={index} />
    ))}
    {/* <PlansCard/> */}
  </div>
  )
}

export default PopularPlansHome