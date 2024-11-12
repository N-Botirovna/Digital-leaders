import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = ({ size }) => {
	return (
		<div
			className={`w-full h-screen flex items-center justify-center `}
		>
			<Spin
				indicator={
					<LoadingOutlined
						style={{
							fontSize: size || 62,
							color: '#9ec8fc',
						}}
						spin
					/>
				}
			/>
		</div>
	);
};