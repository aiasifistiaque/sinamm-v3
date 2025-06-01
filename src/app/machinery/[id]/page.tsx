import MachinaryIdPageComponent from '@/components/machinary-page/MachinaryIdPageComponent';
import { ScrollContainer } from '@/components/smooth-scroll';
import { getAmachinery } from '@/store/ssr/machinery';
import React, { FC } from 'react';

type MachineryIdPageProps = {
	params: any;
};

const MachineryIdPage = async ({ params }: any) => {
	const paramsId = params?.id;
	const getAmechineryData = await getAmachinery(paramsId);
	return (
		<ScrollContainer>
			<MachinaryIdPageComponent data={getAmechineryData} />
		</ScrollContainer>
	);
};

export default MachineryIdPage;
