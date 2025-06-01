// import React from 'react';
// import { TabsContent } from '../Tabs';
// import parse from 'html-react-parser';
// const TabContentOne = ({ project }: any) => {
// 	return (
// 		<TabsContent value='overview' className='space-y-6'>
// 			{project?.shortDescription && (
// 				<div>
// 					<h2 className='text-2xl font-bold mb-4'>Project Description</h2>
// 					<div className='text-gray-600'>
// 						{parse(project?.shortDescription || '')}
// 					</div>
// 				</div>
// 			)}

// 			{project?.challenges && (
// 				<div>
// 					<h2 className='text-2xl font-bold mb-4'>Challenge</h2>
// 					<p className='text-gray-600'>{project?.challenges}</p>
// 				</div>
// 			)}

// 			{project?.solution && (
// 				<div>
// 					<h2 className='text-2xl font-bold mb-4'>Solution</h2>
// 					<p className='text-gray-600'>{project?.solution}</p>
// 				</div>
// 			)}

// 			{project?.result && (
// 				<div>
// 					<h2 className='text-2xl font-bold mb-4'>Results</h2>
// 					<p className='text-gray-600'>{project?.result}</p>
// 				</div>
// 			)}
// 		</TabsContent>
// 	);
// };

// export default TabContentOne;
