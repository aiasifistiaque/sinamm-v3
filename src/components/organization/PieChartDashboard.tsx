import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import StatsCard from './StatsCard';
import { Users, Wrench, Zap, MapPin, Truck, GraduationCap } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro';
import PageTitle from '../home-page/PageTitle';
import Subtitle from '../home-page/Subtitle';

const engineeringData = [
	{ name: 'Civil Graduate Engineer', value: 48, color: '#3b82f6' },
	{ name: 'Electrical Graduate Engineer', value: 3, color: '#f59e0b' },
	{ name: 'Mechanical Graduate Engineer', value: 3, color: '#10b981' },
	{
		name: 'Civil/Electrical/Mechanical (Diploma Engr.)',
		value: 94,
		color: '#8b5cf6',
	},
	{ name: 'Surveyor', value: 11, color: '#06b6d4' },
	{ name: 'CAD Operator', value: 3, color: '#f97316' },
	{ name: 'Equipment and Vehicle Operator', value: 65, color: '#ef4444' },
	{ name: 'Mechanic/Electrician/Welder/Fitter', value: 50, color: '#a855f7' },
	{ name: 'Procurement Team', value: 18, color: '#a3e635' },
	{ name: 'Accounts Team', value: 32, color: '#7dd3fc' },
	{ name: 'Others', value: 159, color: '#93c5fd' },
];

const totalEngineers = engineeringData.reduce((sum, item) => sum + item.value, 0);

const CustomTooltip = ({ active, payload }: any) => {
	if (active && payload && payload.length) {
		const data = payload[0];
		const percentage = ((data.value / totalEngineers) * 100).toFixed(1);
		return (
			<div className='bg-white p-3 shadow-lg'>
				<p className='font-semibold text-gray-800'>{data.name}</p>
				<p className='text-sm text-gray-600'>
					Count: <span className='font-bold'>{data.value}</span>
				</p>
				<p className='text-sm text-gray-600'>
					Percentage: <span className='font-bold'>{percentage}%</span>
				</p>
			</div>
		);
	}
	return null;
};
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='white'
			fontSize={12}
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};
const PieChartDashboard = () => {
	const statsData = [
		{
			title: 'Civil Graduate Engineers',
			value: 48,
			// icon: <Users className='h-6 w-6' />,
			color: 'bg-blue-500',
			percentage: ((48 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Electrical Graduate Engineers',
			value: '03',
			// icon: <Zap className='h-6 w-6' />,
			color: 'bg-amber-500',
			percentage: ((3 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Mechanical Graduate Engineers',
			value: '03',
			// icon: <Wrench className='h-6 w-6' />,
			color: 'bg-emerald-500',
			percentage: ((3 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Diploma Engineers (Civil / Electrical / Mechanical)',
			value: 94,
			// icon: <GraduationCap className='h-6 w-6' />,
			color: 'bg-violet-500',
			percentage: ((94 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Surveyors',
			value: 11,
			// icon: <MapPin className='h-6 w-6' />,
			color: 'bg-cyan-600',
			percentage: ((11 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'CAD Operators',
			value: '03',
			// icon: <LayoutTemplate className='h-6 w-6' />,
			color: 'bg-yellow-500',
			percentage: ((3 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Equipment and Vehicle Operators',
			value: 65,
			// icon: <Truck className='h-6 w-6' />,
			color: 'bg-red-500',
			percentage: ((65 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Mechanic / Electrician / Welder / Fitter',
			value: 50,
			// icon: <Settings className='h-6 w-6' />,
			color: 'bg-orange-600',
			percentage: ((50 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Procurement Team',
			value: 18,
			// icon: <Package className='h-6 w-6' />,
			color: 'bg-lime-600',
			percentage: ((18 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Accounts Team',
			value: 32,
			// icon: <Calculator className='h-6 w-6' />,
			color: 'bg-sky-700',
			percentage: ((32 / totalEngineers) * 100).toFixed(1),
		},
		{
			title: 'Others',
			value: 159,
			// icon: <MoreHorizontal className='h-6 w-6' />,
			color: 'bg-gray-500',
			percentage: ((159 / totalEngineers) * 100).toFixed(1),
		},

		{
			title: 'Total',
			value: 486,
			// icon: <MoreHorizontal className='h-6 w-6' />,
			color: 'bg-[#e5ecf7]',
			percentage: ((159 / totalEngineers) * 100).toFixed(1),
		},
	];

	return (
		<div className=' flex flex-col gap-4'>
			{/* Main Chart */}

			<div className=''>
				<div className='flex flex-col gap-4 justify-center'>
					{/* <SectionIntro className='space-y-2' headerText='Workforce Chart' /> */}
					<PageTitle>OUR total Workforce count of SINAMM Engineering</PageTitle>
					<Subtitle className='md:w-2/3'>
						{`Depending on its type, a workforce chart can show organizational hierarchy, headcount by department, employee demographics, shift schedules, or staffing trends. These charts support strategic planning, resource allocation, and informed decision-making in human resource management.`}
					</Subtitle>
				</div>

				{/* <CardContent>
					<div className='h-96'>
						<ResponsiveContainer width='100%' height='100%'>
							<PieChart>
								<Pie
									data={engineeringData}
									cx='50%'
									cy='50%'
									labelLine={false}
									outerRadius={120}
									fill='#8884d8'
									dataKey='value'
									label={renderCustomizedLabel}
								>
									{engineeringData.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Pie>
								<Tooltip content={<CustomTooltip />} />
							</PieChart>
						</ResponsiveContainer>
					</div>
				</CardContent> */}
			</div>
			{/* Stats Cards */}
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 py-4'>
				{statsData.map((stat, index) => (
					<StatsCard
						key={index}
						{...stat}
					/>
				))}
			</div>
		</div>
	);
};

export default PieChartDashboard;
