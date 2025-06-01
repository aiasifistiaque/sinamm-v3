import React from 'react';
import TextBreak from '../ui/TextBreak';
import TitleContainer from './TitleContainer';
import Container from '../home-page/Container';
import Subtitle from '../home-page/Subtitle';
import Flex from '../home-page/Flex';

const Management = () => {
	return (
		<Container className=''>
			<div className='space-y-5 my-16'>
				<TitleContainer className='lg:w-1/2'>How we manage projects</TitleContainer>
				<Flex className='justify-end mt-4'>
					<Subtitle className='md:w-1/2'>
						SINAMM believe in the adoption of techniques in a systematic manner to control the
						project activities within the time frame maintaining the highest quality of works. A
						dynamic and experienced management team are working continuously and constantly adopting
						new techniques and methods in construction work with the aid of Planning, Scheduling,
						Plans and machinery to make construction easier, well within the time schedule and of
						high quality. The application of computer software in construction management
						techniques, the use of plants and machinery, fixing alternative solutions and selecting
						the possible solution have made our project activities more smart and scientific.
					</Subtitle>
				</Flex>
			</div>
		</Container>
	);
};

export default Management;
