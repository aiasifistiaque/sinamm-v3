import React from 'react'
import RootLayout from '../layout/RootLayout/RootLayout'
import RootPage from '../root/RootPage'
import AccordionExample from './HSEAccordian'
import HSEAccordian from './HSEAccordian'

const HSEPolicy = () => {
  return (
    <RootLayout>
      <RootPage
        headerText='Company HSE Policy'
        headerDescription='Sinamm Engineering Limited is committed to the health, safety, and well-being of its employees, vendors, visitors, and the communities in which operate. We also recognize our responsibility to protect the environment and ensure sustainable business practices.'
      >
        <div>
          <HSEAccordian />
        </div>
      </RootPage>
    </RootLayout>
  )
}

export default HSEPolicy