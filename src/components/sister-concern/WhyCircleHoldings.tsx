// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// const tabData = [
//   {
//     id: 'prestigious-landmarks',
//     title: 'Prestigious Landmarks',
//     items: ['Luxury', 'Comfort', 'Safety'],
//     content: `CIRCLE with his associates have the opportunities and facilities to provide a wide range of engineering services ranging from individual residential building to high rise multi-storied commercial building, from factory building to community building, from power plant to transmission line construction work.

// CIRCLE always believe in quality and timely completion of project with clients satisfaction.`,
//   },
//   {
//     id: 'superior-quality',
//     title: 'Superior Quality',
//     items: ['Quality', 'Timely', 'Satisfaction'],
//     content: `Quality is our core principle and architecture is our passion. We endeavor to offer global standard architectural design solutions whilst keeping the local culture in mind. We believe that every project is unique; hence unique architectural requirements may arise. Thus, we work very closely with a panel of the leading Architects to sketch your dreams into reality. While our highly experienced Engineering & Quality Assurance teams ensure those dreams are built to unparalleled quality.

// CIRCLE always believe in quality and timely completion of project with clients satisfaction.`,
//   },
//   {
//     id: 'best-materials',
//     title: 'Best Materials',
//     items: ['Quality', 'Suitability', 'Durability'],
//     content: `At CIRCLE, we use the best construction materials without compromise, such as 72 grade Steel; highest grade Portland Composite Cement of only multinational brands; Sylhet Sand for casting (min FM2.5) or Fine Local Sand for finishing works; best quality Ready Mix Concrete (RMC); and custom machine made Solid Cement Concrete Block (CCB) to ensure zero salinity.

// CIRCLE always believe in quality and timely completion of project with clients satisfaction.`,
//   },
//   {
//     id: 'best-consultants',
//     title: 'Best Consultants',
//     items: ['Luxury', 'Comfort', 'Safety'],
//     content: `CIRCLE with his associates have the opportunities and facilities to provide a wide range of engineering services ranging from individual residential building to high rise multi-storied commercial building, from factory building to community building, from power plant to transmission line construction work.

// CIRCLE always believe in quality and timely completion of project with clients satisfaction.`,
//   },
//   {
//     id: 'uncompromised',
//     title: 'Uncompromised',
//     items: ['Luxury', 'Comfort', 'Safety'],
//     content: `CIRCLE with his associates have the opportunities and facilities to provide a wide range of engineering services ranging from individual residential building to high rise multi-storied commercial building, from factory building to community building, from power plant to transmission line construction work.

// CIRCLE always believe in quality and timely completion of project with clients satisfaction.`,
//   },
//   {
//     id: 'on-time-delivery',
//     title: 'On-Time Delivery',
//     items: ['Luxury', 'Comfort', 'Safety'],
//     content: `CIRCLE with his associates have the opportunities and facilities to provide a wide range of engineering services ranging from individual residential building to high rise multi-storied commercial building, from factory building to community building, from power plant to transmission line construction work.

// CIRCLE always believe in quality and timely completion of project with clients satisfaction.`,
//   },
// ];

// const WhyCircleHoldings = () => {
//   const [activeTab, setActiveTab] = useState(tabData[0].id);

//   return (
//     <div className="container mx-auto py-10 px-4 md:px-8">
//       <h1 className="text-4xl font-bold text-center mb-10">
//         Why Circle Holdings
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Tabs */}
//         <div className="w-full lg:w-2/3">
//           <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-0">
//             <ul className="flex md:flex-col border-l-4 border-mainText space-y-2 text-lg font-medium">
//               {tabData.map((tab) => (
//                 <li
//                   key={tab.id}
//                   className={`cursor-pointer px-4 py-2 ${
//                     activeTab === tab.id
//                       ? 'text-mainText font-bold bg-gray-100'
//                       : 'text-gray-600 hover:text-mainText'
//                   }`}
//                   onClick={() => setActiveTab(tab.id)}
//                 >
//                   {tab.title}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Panel */}
//           <div className="bg-white p-6 rounded shadow">
//             {tabData.map((tab) =>
//               tab.id === activeTab ? (
//                 <div key={tab.id}>
//                   <h5 className="text-lg font-semibold mb-4 uppercase">
//                     {tab.title}
//                   </h5>
//                   <ul className="list-disc ml-6 text-sm text-gray-700 mb-4">
//                     {tab.items.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                   <p className="text-gray-800 whitespace-pre-line">{tab.content}</p>
//                 </div>
//               ) : null
//             )}
//           </div>
//         </div>

//         {/* Image Box */}
//         <div className="w-full lg:w-1/3 flex justify-center">
//           <div className="rounded overflow-hidden shadow-lg">
//             <Image
//               src="https://www.circleholdingsbd.com/wp-content/uploads/2019/03/worker2.jpg"
//               alt="Worker at site"
//               width={400}
//               height={300}
//               className="object-cover"
//             />
//             <div className="text-center bg-gray-100 py-4 text-sm">
//               Building with trust and quality.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyCircleHoldings;
