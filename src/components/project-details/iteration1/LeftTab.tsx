// import * as React from 'react';

// // THIS WAS THE FRIST DESING --> ITERATION 1

// import { Tabs, TabsList, TabsTrigger } from './Tabs'; // Import from your Tabs component
// //
// import {
// 	TabConentThree,
// 	TabContentOne,
// 	TabContentTwo,
// } from './tab-contents/index';
// import formatBackendStrings from '@/lib/formateText';
// // import { useGetByIdQuery } from '@/store/services/commonApi';

// // formatBackendStrings
// const LeftTab = ({ project }: any) => {
// 	console.log('project tab::', project);
// 	const formattedStrings =
// 		project && formatBackendStrings(project?.keyFeatures);

// 	// const { data } = useGetByIdQuery({
// 	// 	path: 'project-teams',
// 	// 	id: project?.assignedTeam?._id,
// 	// });
// 	// console.log('teams data::', data);
// 	return (
// 		<div className='lg:col-span-2'>
// 			<Tabs defaultValue='overview' className='w-full '>
// 				<TabsList className='mb-6 bg-blueBg'>
// 					<TabsTrigger value='overview'>Overview</TabsTrigger>
// 					<TabsTrigger value='features'>Features</TabsTrigger>
// 					<TabsTrigger value='gallery'>Gallery</TabsTrigger>
// 					<TabsTrigger value='team'>Team</TabsTrigger>
// 				</TabsList>

// 				<TabContentOne project={project} />
// 				<TabContentTwo formattedStrings={formattedStrings} />
// 				<TabConentThree id={project?.gallery?._id} />
// 				{/* <TabsContent value='team'>
//     <h2 className='text-2xl font-bold mb-6'>Project Team</h2>
//     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//         {project.team.map((member:any, index:number,) => (
//             <div
//                 key={index}
//                 className='bg-gray-50 p-4 rounded-md flex items-center space-x-4'
//             >
//                 <div className='bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center'>
//                     <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         width='24'
//                         height='24'
//                         viewBox='0 0 24 24'
//                         fill='none'
//                         stroke='currentColor'
//                         strokeWidth='2'
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         className='h-6 w-6 text-primary'
//                     >
//                         <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
//                         <circle cx='12' cy='7' r='4'></circle>
//                     </svg>
//                 </div>
//                 <div>
//                     <h3 className='font-medium'>{member.name}</h3>
//                     <p className='text-sm text-gray-600'>{member.role}</p>
//                 </div>
//             </div>
//         ))}
//     </div>
// </TabsContent> */}
// 			</Tabs>
// 		</div>
// 	);
// };

// export default LeftTab;
