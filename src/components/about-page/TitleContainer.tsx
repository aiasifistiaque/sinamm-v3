import React, { Children, FC } from 'react';
import PageTitle from '../home-page/PageTitle';

type TitleContainerProps = {
	children: any;
	className?: string;
};

const TitleContainer: FC<TitleContainerProps> = ({ children, className }) => {
	return <PageTitle className={className}>{children}</PageTitle>;
};

export default TitleContainer;
