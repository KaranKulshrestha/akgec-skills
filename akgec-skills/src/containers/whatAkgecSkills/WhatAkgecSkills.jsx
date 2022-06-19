import React from 'react'
import { Feature } from '../../components'
import "./whatakgecskills.css"

const WhatAkgecSkills = () => {
  return (
    <div className='akgec__whatakgec section__margin' id='wakgec'>
      <div className='akgec__whatakgec-feature'>
      <Feature title="What is This program" text="It's time to shape your career with right and contemporary skills in technology with AKGEC Skills Foundation. If you are pursuing Engineering and desire to work in the domain of embedded systems & IoT, you may join this face to face (offline) Industrial Training Program. " />
      </div>
      <div className='akgec__whatakgec-heading'>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <a href='#blog'><p>Explore the Library</p></a>
      </div>
      <div className="akgec__whatakgec-container">
      <Feature title="Course content:" text="The course content is tailor-made to meet the current industry demands. This program is ideal for engineers with little or no exposure to embedded systems design and internet of things implementation but aspiring to become the expert in this domain. The course content will cover the following." />
      <Feature title="Basics of Embedded Systems" text="Arduino is a popular framework to get the basic understanding of microcontroller based systems. We begin with some advanced concepts of Arduino such as multi-tasking and low level programming with Arduino to understand the working of Embedded Systems." />
      <Feature title="RTOS with Embedded System" text="An RTOS (Real Time Operating System) is commonly used when there are more interrupt sources, more functions and more communication interfaces. To design more complex and real time embedded systems we will harness the capabilities of FreeRTOS tailored for ESP32 MCU." />
      <Feature title="IoT Protocols" text="IoT protocols are an integral part of the IoT technology stack. These protocols enable hardware to exchange data and out of this useful information can be extracted by the end user. We will practice a few popular protocols such as MQTT, HTTP, Web Socket, Wi-Fi, Bluetooth etc. " />
      <Feature title="Cloud Services for IoT" text="We will show how to work with the most popular cloud service for the Internet of Things Amazon Web Services IoT core. You will learn how to connect your devices to it and create a certificate and a policy for them. Next, we will modify our program for ESP32 so that it can work with the Amazon Web Services IoT Core. Then I'll show you how you can use one certificate and policy for multiple devices." />
      <Feature title="PCB Designing" text="Printed Circuit Boards are an integral part of any system. We will explain the design and manufacturing process of PCBs for designing embedded systems with specific microcontrollers." />
      <Feature title="Projects" text="During the course you will design and develop at least 2 minor projects and one major project with ESP32, Raspberry Pi, FreeRTOS and AWS Cloud. " />
      <Feature title="Embedded IoT Club" text="You will be a member of the Embedded IoT Club. As a member you will get regular updates in the field of embedded systems and IoT and free offline/ online classes. Also you will get the opportunity to work on live projects with our team." />
    </div>
    </div>
  )
}

export default WhatAkgecSkills